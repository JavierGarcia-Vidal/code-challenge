import React, { Component } from "react";
// Libraries
import request from "../library/request";
import { ARTICLES_QUERY } from "../library/queries";
// Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// Styles
import "../stylesheets/styles.css";
// Data Base
import { articles } from "../database/db.json";

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
      <div className="App">
        <Header />
        <Main articles={this.state.articles} />
        <Footer />
      </div>
    );
  }
}

export default App;
