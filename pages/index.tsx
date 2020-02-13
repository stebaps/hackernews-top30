import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import ArticleList from "../components/ArticleList";

export default () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <Header />
      <ArticleList />
    </div>
  );
};
