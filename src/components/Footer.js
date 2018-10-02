//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { css } from "emotion";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Footer Colors
const background = "#393e46";
const text = "#f8b500";
// Footer Styles
const _footer = css`
  display: grid;
  grid-column: 1 / span 4;
  background-color: ${background};
  letter-spacing: 0.1rem;
  padding: 1rem;
`;
// Copyright Styles
const _copyright = css`
  place-self: center stretch;
  font-size: 0.9rem;
  color: ${text};
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Footer = ({ copyright }) => (
  <footer className={_footer}>
    <span className={_copyright}>{copyright}</span>
  </footer>
);

Footer.propTypes = {
  copyright: PropTypes.string
};

export default Footer;
