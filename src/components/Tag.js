//#################################################################
//#############  Dependecies / Components / Resources  ############
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";

//#################################################################
//############################  Styles  ###########################
//#################################################################
// Tags Colors
const tagsBackgroundColor = "#393e46";
const tagsTextColor = "#393e46";
// Tag Colors
const tagBackgroundColor = "#f8b500";
const tagHoverBackgroundColor = "#f89500";
const tagBorderColor = "#393e46";
// Tags Styles
const _tags = css`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  background-color: ${tagsBackgroundColor};
  color: ${tagsTextColor};
`;
// Tag Styles
const _tag = css`
  background-color: ${tagBackgroundColor};
  border-top: 1px solid ${tagBorderColor};
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  padding: 0.25rem;
  justify-self: stretch;
  &:last-child {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  &:hover {
    background-color: ${tagHoverBackgroundColor};
  }
`;
//#################################################################
//##########################  Camponent  ##########################
//#################################################################
const Tag = ({ tags }) => {
  return (
    <div className={_tags}>
      {tags.map((tag, index) => (
        <span key={index} className={_tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default Tag;
