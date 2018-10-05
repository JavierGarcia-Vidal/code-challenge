//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";
// Components
import Form from "../Form";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Add Colors
const backgroundColor = "#cccccc";
// Add Styles
const _add = css`
  grid-column: 1 / span 4;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  padding: 1em;
  background-color: ${backgroundColor};
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Add = ({ article }) => {
  return (
    <main className={_add}>
      <Form article={article} />
    </main>
  );
};

Add.propTypes = { article: PropTypes.arrayOf(PropTypes.object) };

export default Add;
