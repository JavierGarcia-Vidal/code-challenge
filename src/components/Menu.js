//#################################################################
//#############|  Dependecies / Components / Resources  |##########
//#################################################################
import React, { PropTypes } from "react";
import { Link } from "react-router";
import { css } from "emotion";
// Icons
import MaterialIcon, { colorPalette } from "material-icons-react";

//#################################################################
//############################|  Styles  |#########################
//#################################################################
// Menu Colors
const menuBackgroundColor = "#cccccc";
const menuBorderColor = "#f8b500";
// Active Colors
const activeBackgroundColor = "#f8b500";
// Active Colors
const inactiveBackgroundColor = "#50565f";
const inactiveBorderColor = "#cccccc";
const inactiveHoverBackgroundColor = "#393e46";
// Menu Styles
const _menu = css`
  display: grid;
  grid-column: 1 / span 4;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${menuBackgroundColor};
  border-top: 10px solid ${menuBorderColor}
`;
// Link Styles
const _link = css`
  display: grid;
  place-self: start stretch;
  background-color: ${activeBackgroundColor};
`;
// Active Link Styles
const _active = css` 
  background-color: ${activeBackgroundColor};
  place-self: start stretch;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;
// Inactive Left Link Styles
const _inactiveLeft = css`
  border-top-right-radius: 1rem;
  background-color: ${inactiveBackgroundColor};
  border-top: 5px solid ${inactiveBackgroundColor};
  place-self: start stretch;
  &:hover {
    border-top: 5px solid ${inactiveHoverBackgroundColor};
    background-color: ${inactiveHoverBackgroundColor};
  }
`;
// Inactive Right Link Styles
const _inactiveRight = css`
  border-top-left-radius: 1rem;
  background-color: ${inactiveBackgroundColor};
  border-top: 5px solid ${inactiveBackgroundColor};
  place-self: start stretch;
  &:hover {
    border-top: 5px solid ${inactiveHoverBackgroundColor};
    background-color: ${inactiveHoverBackgroundColor};
  }
`;
//#################################################################
//##########################|  Camponent  |########################
//#################################################################
const Menu = () => (
  <nav className={_menu}>
    <div className={_link}>
      <Link to="/about" className={_inactiveLeft}>
        <MaterialIcon icon="help" color="#f7f7f7" size={25} />
      </Link>
    </div>
    <Link to="/" className={_active}>
      <MaterialIcon icon="home" size={45} />
    </Link>
    <div className={_link}>
      <Link to="/add" className={_inactiveRight}>
        <MaterialIcon icon="add_circle" color="#f7f7f7" size={25} />
      </Link>
    </div>
  </nav>
);

Menu.propTypes = {
  title: PropTypes.string
};

export default Menu;
