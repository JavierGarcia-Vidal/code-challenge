//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Header Colors
const background = "#393e46";
const border = "#f8b500";
const text = "#f8b500";
// Header Styles
const _header = css`
  display: grid;
  grid-column: 1 / span 4;
  background-color: ${background};
  border-bottom: ${border}
`;
// Head Styles
const _head = css`
  padding: 2rem;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: ${text};
  place-self: center stretch;
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Header = ({ title }) => (
  <header className={_header}>
    <div className={_head}>{title}</div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
