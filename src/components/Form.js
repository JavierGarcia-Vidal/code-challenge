//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";
// Components
import Input from "./Input";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Form Colors
const formBackgroundColor = "#393e46";
const formBorderColor = "#393e46";
// Title Colors
const titleBackgroundColor = "#393e46";
const titleTextColor = "#393e46";
// Author Colors
const authorBackgroundColor = "#50565f";
const authorBorderColor = "#393e46";
const authorTextColor = "#f8b500";
// Content Colors
const contentBackgroundColor = "#f7f7f7";
const contentTextColor = "#50565f";
// Submit Colors
const submitBackgroundColor = "#393e46";
const submitTextColor = "#f8b500";
// Form Styles
const _form = css`
  background-color: ${formBackgroundColor};
  border-radius: 1rem;
  border: 0.5rem solid ${formBorderColor};
`;
// Id Styles
const _formId = css`
  background-color: ${titleBackgroundColor};
  color: ${titleTextColor};
  padding: 0.5rem 1.5rem;
`;
// Title Styles
const _formTitle = css`
  background-color: ${titleBackgroundColor};
  color: ${titleTextColor};
  padding: 1.5rem;
`;
// Author Styles
const _formAuthor = css`
  background-color: ${authorBackgroundColor};
  color: ${authorTextColor};
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${authorBorderColor};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;
// Content Styles
const _formContent = css`
  background-color: ${contentBackgroundColor};
  color: ${contentTextColor};
  font-size: 0.9rem;
  letter-spacing: 0.025rem;
  text-align: left;
  padding: 1.25rem;
`;
// Tags Styles
const _formTags = css`
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
`;
// Submit Styles
const _formSubmit = css`
  background-color: ${submitBackgroundColor};
  color: ${submitTextColor};
  padding: 1.25rem;
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Form = ({ article }) => {
  const tags = [
    "videojuegos",
    "online",
    "pc",
    "actualidad",
    "cine",
    "libros",
    "ebooks",
    "deportes",
    "actualidad",
    "salud",
    "ingenieria",
    "mecanica"
  ];
  return (
    <form className={_form}>
      <Input
        form={_formId}
        type="text"
        name="title"
        input="_inputTitle"
        placeholder="Introduzca un id ..."
        value={article.id}
      />
      <Input
        form={_formTitle}
        type="text"
        name="title"
        input="_inputTitle"
        placeholder="Introduzca un titulo ..."
        value={article.title}
      />
      <div className="info">
        <Input
          form={_formAuthor}
          type="text"
          name="author"
          input="_inputAuthor"
          placeholder="Introduzca un autor ..."
          value={article.author}
        />
        <Input
          form={_formContent}
          type="textarea"
          name="content"
          input="_inputContent"
          placeholder="Introduzca un contenido ..."
          value={article.content}
        />
        <Input
          form={_formTags}
          type="checkbox"
          name="tags"
          input="_inputTags"
          value={article.tags}
          checkboxes={tags}
        />
        <Input
          form={_formSubmit}
          type="submit"
          name="submit"
          input="_inputSubmit"
          title="Añadir un articulo"
        />
      </div>
    </form>
  );
};

Form.propTypes = { article: PropTypes.arrayOf(PropTypes.object) };

export default Form;
