import React, { PropTypes } from "react";

const Header = ({ title }) => (
  <header className="header">
    <h2 className="head">{title}</h2>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
