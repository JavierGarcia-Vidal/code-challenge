import React, { PropTypes } from "react";

const Article = ({ title, author, tags, content }) => {
  return (
    <article className="article">
      <h3>{title}</h3>
      <div>{author}</div>
      <div>{tags}</div>
      <p>{content}</p>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string
};

export default Article;
