//#################################################################
//#############  Dependecies / Components / Resources  ############
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";

//#################################################################
//############################  Styles  ###########################
//#################################################################
// Header Colors
const background = "#393e46";
const text = "#f8b500";
// Header Styles
const _header = css`
  display: grid;
  grid-column: 1 / span 4;
  background-color: ${background};
  padding: 1rem;
`;
// Head Styles
const _head = css`
  place-self: center stretch;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: ${text};
`;
//#################################################################
//##########################  Camponent  ##########################
//#################################################################
const Header = ({ title }) => (
  <header className={_header}>
    <span className={_head}>{title}</span>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
