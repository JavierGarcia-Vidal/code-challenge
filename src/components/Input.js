//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Title Colors
const titleBackgroundColor = "#393e46";
const titleBorderColor = "#50565f";
const titleTextColor = "#f7f7f7";
// Author Colors
const authorBackgroundColor = "#50565f";
const authorBorderColor = "#393e46";
const authorTextColor = "#f8b500";
// Content Colors
const contentBackgroundColor = "#f7f7f7";
const contentBorderColor = "#f7f7f7";
// Tags Colors
const tagsBackgroundColor = "#f8b500";
const tagsBorderColor = "#393e46";
const tagsHoverBackgroundColor = "#f89500";
// Submit Colors
const submitBackgroundColor = "#393e46";
const submitBorderColor = "#f8b500";
const submitTextColor = "#f8b500";
const submitHoverBackgroundColor = "#f8b500";
const submitHoverBorderColor = "#f8b500";
const submitHoverTextColor = "#393e46";
// Title Styles
const _inputTitle = css`
  width: 100%;
  padding: 0.2rem;
  background-color: ${titleBackgroundColor};
  border: ${titleBorderColor};
  color: ${titleTextColor};
`;
// Author Styles
const _inputAuthor = css`
  width: 95%;
  background-color: ${authorBackgroundColor};
  border: ${authorBorderColor};
  color: ${authorTextColor};
`;
// Content Styles
const _inputContent = css`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border: 1px solid ${contentBorderColor};
  background-color: ${contentBackgroundColor};
  resize: none;
`;
// Tags Styles
const _inputTags = css`
  border-top: 1px solid ${tagsBorderColor};
  background-color: ${tagsBackgroundColor};
  text-align: left;
  padding: 0.25rem 0.5rem;
  &:last-child {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  &:hover {
    background-color: ${tagsHoverBackgroundColor};
  }
`;
// Tag Styles
const _inputTag = css`
  vertical-align: middle;
`;
// Submit Styles
const _inputSubmit = css`
  background-color: ${submitBackgroundColor};
  border: 1px solid ${submitBorderColor};
  color: ${submitTextColor};
  letter-spacing: 0.1rem;
  border-radius: 1rem;
  width: 85%;
  padding: 0.5rem;
  &:hover {
    background-color: ${submitHoverBackgroundColor};
    border: 1px solid ${submitHoverBorderColor};
    color: ${submitHoverTextColor};
  }
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Input = ({ key, form, type, name, input, placeholder, title, value }) => {
  const getInputClass = input => {
    switch (input) {
      case "_inputTitle":
        return _inputTitle;
      case "_inputAuthor":
        return _inputAuthor;
      case "_inputContent":
        return _inputContent;
      case "_inputTags":
        return _inputTags;
      case "_inputSubmit":
        return _inputSubmit;
    }
  };
  const getInputType = (key, type, name, input, placeholder, title, value) => {
    let inputClass = getInputClass(input);
    if (type === "textarea")
      return (
        <textarea
          rows="3"
          name={name}
          className={inputClass}
          placeholder={placeholder}
        />
      );
    else if (type === "submit")
      return (
        <input
          type={type}
          className={inputClass}
          placeholder={placeholder}
          value={title}
        />
      );
    else if (type === "checkbox")
      return value.map((tag, index) => (
        <div className={inputClass}>
          <input type={type} className={_inputTag} value={tag.toLowerCase()} />
          {tag}
        </div>
      ));
    else
      return (
        <input
          type={type}
          name={name}
          className={inputClass}
          placeholder={placeholder}
        />
      );
  };
  let inputComponent = getInputType(
    key,
    type,
    name,
    input,
    placeholder,
    title,
    value
  );

  return <div className={form}>{inputComponent}</div>;
};

Input.propTypes = {
  key: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string)
};

export default Input;
