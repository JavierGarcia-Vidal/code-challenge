//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { Component } from "react";
import { css } from "emotion";
// Components
import Form from "../Form";
// Data Base
import { articles } from "../../database/db.json";

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
class Add extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles
    };
  }

  // lifecycle
  //componentWillMount() {
  //  request(ARTICLES_QUERY).then(response => {
  //    this.setState({ articles: response.data.articles });
  //  });
  //}

  // Renders
  render() {
    return (
      <div className={_add}>
        <Form />
      </div>
    );
  }
}

export default Add;
