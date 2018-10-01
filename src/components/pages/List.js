//#################################################################
//#############  Dependecies / Components / Resources  ############
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";

//#################################################################
//############################  Styles  ###########################
//#################################################################
// List Page Styles
const list = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 6rem 1fr 10rem;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  input {
    font-family: "Open Sans", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
//#################################################################
//##########################  Camponent  ##########################
//#################################################################
const List = ({ id, title, author, tags, content }) => {
  return (
    <article className="article">
      <div className="navigation">
        <span className="id">{id}</span>
        <a href="/update/{id}" className="update">
          <MaterialIcon icon="edit" size={15} />
        </a>
        <a href="/delete/{id}" className="delete">
          <MaterialIcon icon="close" size={15} />
        </a>
      </div>
      <a href="/{id}">
        <div className="title">{title}</div>
      </a>
      <div className="info">
        <div className="author">{author}</div>
        <div className="content">{content}</div>
        <Tag tags={tags} />
      </div>
    </article>
  );
};

List.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string
};

export default List;
