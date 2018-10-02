//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { Component } from "react";
import { css } from "emotion";
// Libraries
import request from "../../library/request";
import { ARTICLES_QUERY } from "../../library/queries";
// Components
import Article from "../Article";
// Data Base
import { articles } from "../../database/db.json";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// List Colors
const backgroundColor = "#cccccc";
// List Styles
const _list = css`
  grid-column: 1 / span 4;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  padding: 2em;
  background-color: ${backgroundColor};
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
class List extends Component {
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
      <div className={_list}>
        {articles.map((article, index) => (
          <Article
            id={article.id}
            title={article.title}
            author={article.author}
            tags={article.tags}
            content={article.content}
          />
        ))}
      </div>
    );
  }
}

export default List;
