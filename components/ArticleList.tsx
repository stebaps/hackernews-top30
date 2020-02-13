import React from "react";
import axios from "axios";

import IArticle from "../models/Article";
import LabelledButton from "./LabelledButton";
import ArticleTitle from "./ArticleTitle";

interface IState {
  loading: boolean;
  articles: Array<IArticle>;
}

class ArticleList extends React.Component<{}, IState> {
  state = {
    loading: true,
    articles: Array<IArticle>()
  };

  componentDidMount() {
    this.fetchTopStories();
  }

  async fetchTopStories() {
    const topStories = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );

    const top30StoryIds = topStories.data.slice(0, 30);

    const articlesData = await axios.all(
      top30StoryIds.map(storyID => this.fetchStoryWithID(storyID))
    );

    const articles: Array<IArticle> = articlesData.map((articleData: any) => {
      return articleData.data;
    });

    this.setState({
      loading: false,
      articles: articles
    });
  }

  async fetchStoryWithID(storyID) {
    return axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`
    );
  }

  renderArticles() {
    if (this.state.articles.length > 0) {
      return this.state.articles.map((article, index) => {
        return (
          <tr key={article.id}>
            <td>
              <ArticleTitle article={article} index={index} />
              <br />
              <LabelledButton
                icon="bullseye"
                label="Score"
                value={article.score}
              />
              <LabelledButton icon="user" label="By" value={article.by} />
            </td>
          </tr>
        );
      });
    } else if (!this.state.loading) {
      return (
        <tr>
          <td>No articles to display.</td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div className="ui main text container" style={{ marginTop: "5em" }}>
        {this.state.loading && (
          <div className="ui active text loader">Please Wait...</div>
        )}
        <table className="ui very basic unstackable table">
          <tbody>{this.renderArticles()}</tbody>
        </table>
      </div>
    );
  }
}

export default ArticleList;
