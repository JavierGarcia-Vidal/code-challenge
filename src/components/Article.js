import React, { PropTypes } from "react";
// Components
import Tag from "./Tag";

const Article = ({ title, author, tags, content }) => {
  return (
    <article className="article">
      <div className="title">{title}</div>
      <div className="info">
        <div className="author">{author}</div>
        <div className="content">{content}</div>
        <Tag tags={tags} />
      </div>
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
