//#################################################################
//#############  Dependecies / Components / Resources  ############
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";
// Components
import Tag from "./Tag";
// Icons
import MaterialIcon, { colorPalette } from "material-icons-react";

//#################################################################
//############################  Styles  ###########################
//#################################################################
// Articles Colors
const articlesBackgroundColor = "#393e46";
const articlesBorderColor = "#393e46";
// Title Colors
const titleBackgroundColor = "#393e46";
const titleTextColor = "#f8b500";
// Author Colors
const authorBackgroundColor = "#50565f";
const authorBorderColor = "#393e46";
const authorTextColor = "#f8b500";
// Content Colors
const contentBackgroundColor = "#f7f7f7";
const contentTextColor = "#50565f";
// Update Colors
const updateBackgroundColor = "#f8b500";
const updateHoverBackgroundColor = "#f89500";
const updateTextColor = "#a77415";
const updateHoverTextColor = "#c0a13b";
// Delete Colors
const deleteBackgroundColor = "#be3737";
const deleteHoverBackgroundColor = "#d42a2a";
const deleteTextColor = "#6a0000";
const deleteHoverTextColor = "#460606";
// Articles Styles
const _article = css`
  background-color: ${articlesBackgroundColor};
  border-radius: 1rem;
  border: 0.5rem solid ${articlesBorderColor};
`;
// Title Styles
const _title = css`
  background-color: ${titleBackgroundColor};
  color: ${titleTextColor};
  letter-spacing: 0.15rem;
  padding: 0.5rem 1rem 1.5rem 1rem;
`;
// Author Styles
const _author = css`
  background-color: ${authorBackgroundColor};
  color: ${authorTextColor};
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${authorBorderColor};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;
// Content Styles
const _content = css`
  background-color: ${contentBackgroundColor};
  color: ${contentTextColor};
  font-size: 0.9rem;
  letter-spacing: 0.025rem;
  text-align: left;
  padding: 1.25rem;
`;
// Navigation Styles
const _navigation = css`
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  grid-template-rows: 15px;
  font-size: 0.7rem;
`;
// Id Styles
const _id = css`
  visibility: hidden;
  margin-left: 100px;
`;
// Update Styles
const _update = css`
  background-color: ${updateBackgroundColor};
  color: ${updateTextColor};
  border-bottom-left-radius: 1rem;
  padding-left: 5px;
  &:hover {
    background-color: ${updateHoverBackgroundColor};
    color: ${updateHoverTextColor};
  }
`;
// Delete Styles
const _delete = css`
  background-color: ${deleteBackgroundColor};
  color: ${deleteTextColor};
  border-top-right-radius: 1rem;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    background-color: ${deleteHoverBackgroundColor};
    color: ${deleteHoverTextColor};
  }
`;
//#################################################################
//##########################  Camponent  ##########################
//#################################################################
const Article = ({ id, title, author, tags, content }) => {
  return (
    <article className={_article}>
      <div className={_navigation}>
        <span className={_id}>{id}</span>
        <a href="/update/{id}" className={_update}>
          <MaterialIcon icon="edit" size={15} />
        </a>
        <a href="/delete/{id}" className={_delete}>
          <MaterialIcon icon="close" size={15} />
        </a>
      </div>
      <a href="/{id}">
        <div className={_title}>{title}</div>
      </a>
      <div className="info">
        <div className={_author}>{author}</div>
        <div className={_content}>{content}</div>
        <Tag tags={tags} />
      </div>
    </article>
  );
};

Article.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string
};

export default Article;
