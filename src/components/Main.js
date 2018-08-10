import React, { PropTypes } from "react";
// Components
import Article from "./Article";

const Main = ({ articles }) => {
  return (
    <main className="content">
      {articles.map((article, index) => (
        <Article
          title={article.title}
          author={article.author}
          tags={article.tags}
          content={article.content}
        />
      ))}
    </main>
  );
};

Main.propTypes = { articles: PropTypes.arrayOf(PropTypes.object) };

export default Main;
