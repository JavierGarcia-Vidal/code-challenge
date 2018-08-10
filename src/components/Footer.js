import React, { PropTypes } from "react";

const Footer = ({ copyright }) => (
  <footer className="footer">
    <h5 className="copyright">{copyright}</h5>
  </footer>
);

Footer.propTypes = {
  copyright: PropTypes.string
};

export default Footer;
