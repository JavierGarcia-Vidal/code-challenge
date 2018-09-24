import React, { PropTypes } from "react";
// Components
import Form from "./Form";
import Article from "./Article";

const Main = ({ articles }) => {
  return (
    <main className="articles">
      <Form />
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
