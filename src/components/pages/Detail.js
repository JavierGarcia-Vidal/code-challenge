//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { Component } from "react";
import { css } from "emotion";
// Libraries
import request from "../../library/request";
import { ARTICLES_QUERY } from "../../library/queries";
// Components
import Form from "../Form";
import Article from "../Article";
// Data Base
import { articles } from "../../database/db.json";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Detail Colors
const backgroundColor = "#cccccc";
// Detail Styles
const _detail = css`
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
class Detail extends Component {
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
    return (
      <div className={_detail}>
        <Article
          id={article.id}
          title={article.title}
          author={article.author}
          tags={article.tags}
          content={article.content}
        />
      </div>
    );
  }
}

export default Detail;
