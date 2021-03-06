//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";
// Components
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Main Colors
const backgroundColor = "#cccccc";
// App Styles
const _app = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 150px 75px 1fr 150px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  input {
    font-family: "Open Sans", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
// Main Styles
const _main = css`
  grid-column: 1 / span 4;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  padding: 1rem;
  background-color: ${backgroundColor};
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const App = ({ children }) => (
  <div className={_app}>
    <Header title="TEST REACT COMPONENTS" />
    <Menu />
    <main className={_main}>{children}</main>
    <Footer copyright="Copyright © 2018 Javier García-Vidal Simón." />
  </div>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;
