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
// Active Link Styles
const _active = css` 
  background-color: ${activeBackgroundColor};
  place-self: start stretch;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;
// Inactive Link Styles
const _inactive = css`
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
    <Link to="/about" className={_inactive}>
      <MaterialIcon icon="help" color="#f7f7f7" size={25} />
    </Link>
    <Link to="/" className={_active}>
      <MaterialIcon icon="home" size={45} />
    </Link>
    <Link to="/add" className={_inactive}>
      <MaterialIcon icon="add_circle" color="#f7f7f7" size={25} />
    </Link>
  </nav>
);

Menu.propTypes = {
  title: PropTypes.string
};

export default Menu;
