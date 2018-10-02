//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";
// Components
import Form from "../Form";
import Article from "../Article";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Update Colors
const backgroundColor = "#cccccc";
// Update Styles
const _update = css`
  grid-column: 1 / span 4;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-rows: auto;
  padding: 2em;
  background-color: ${backgroundColor};
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Update = ({ article }) => {
  return (
    <main className={_update}>
      <Form article={article} />
    </main>
  );
};

Update.propTypes = { articles: PropTypes.arrayOf(PropTypes.object) };

export default Update;
