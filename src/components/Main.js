//#################################################################
//#############  Dependecies / Components / Resources  ############
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";
// Page Components
import List from "./pages/List";
import Detail from "./pages/Detail";
// Components
import Form from "./Form";
import Article from "./Article";

//#################################################################
//############################  Styles  ###########################
//#################################################################
// Main Colors
const backgroundColor = "#cccccc";
// Main Styles
const _main = css`
  grid-column: 1 / span 4;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  padding: 2em;
  background-color: ${backgroundColor};
`;
//#################################################################
//##########################  Camponent  ##########################
//#################################################################
const Main = ({ articles }) => {
  return (
    <main className={_main}>
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
