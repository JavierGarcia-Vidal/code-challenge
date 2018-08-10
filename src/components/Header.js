import React, { PropTypes } from "react";

const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
