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
class Update extends Component {
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
    const { params } = this.props;
    const article =
      this.state.articles.find(article => article.id == params.id) || {};
    console.log(article);
    return (
      <main className={_update}>
        <Form article={article} />
      </main>
    );
  }
}

export default Update;
