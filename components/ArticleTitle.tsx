import React from "react";
import IArticle from "../models/Article";

export interface ArticleTitleProps {
  article: IArticle;
  index: number;
}

const ArticleTitle = (props: ArticleTitleProps) => {
  const { article, index } = props;
  const hostname =
    article.url === undefined ? null : new URL(article.url).hostname;

  return (
    <div>
      <span style={{ color: "grey" }}>{index + 1}.</span>&nbsp;&nbsp;
      <a href={article.url} rel="noopener noreferrer" target="_blank">
        {article.title}
      </a>{" "}
      {hostname && (
        <a
          href={article.url}
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: "grey" }}
        >
          ({hostname})
        </a>
      )}
    </div>
  );
};

export default ArticleTitle;
