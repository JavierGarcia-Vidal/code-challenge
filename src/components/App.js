//#################################################################
//#############  Dependecies / Components / Resources  ############
//#################################################################
import React, { Component } from "react";
import { css } from "emotion";
// Libraries
import request from "../library/request";
import { ARTICLES_QUERY } from "../library/queries";
// Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// Data Base
import { articles } from "../database/db.json";
//#################################################################
//############################  Styles  ###########################
//#################################################################
// App Styles
const app = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 6rem 1fr 10rem;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  input {
    font-family: "Open Sans", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
//#################################################################
//##########################  Camponent  ##########################
//#################################################################
class App extends Component {
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
      <div className={app}>
        <Header title="TEST REACT COMPONENTS" />
        <Main articles={this.state.articles} />
        <Footer copyright="Copyright © 2018 Javier García-Vidal Simón." />
      </div>
    );
  }
}

export default App;
