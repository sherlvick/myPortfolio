import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./HorizontalNavBar.module.css";

// import icons
import logo from "../../../assets/Images/logo192.png";
import { Hamburger } from "../../../ProjectIcons";

// import components
import Backdrop from "../../dumb/Backdrop/Backdrop";
import MenuUserDropdown from "../../dumb/MenuUserDropdown/MenuUserDropdown";

const HorizontalNavBar = (props) => {
  const history = useHistory();

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  let navContainerClass = classes.NavBarContainer;
  let menuButtonContainerClass = classes.MenuButtonContainer;
  let MenuButtonClass = classes.MenuButton;

  if (isMobileMenuVisible === true) {
    navContainerClass = classes.MobileNavContainer;
    menuButtonContainerClass = classes.MobileMenuButtonContainer;
    MenuButtonClass = classes.MobileMenuButton;
  }

  // Logic for generating menu button jsx and onClick handler
  const onClickOfMenu = (menuName) => {
    history.push(props.menus[menuName].route)
  };

  let menuButtons = [];
  let key = 0;
  for (const btnName in props.menus) {
    key++;
    menuButtons.push(<a className={MenuButtonClass} key={`${btnName}_${key}`} onClick={() => onClickOfMenu(btnName)}>{isMobileMenuVisible && props.menus[btnName].icon}<span className={classes.MenuName}>{btnName}</span></a>)
  } 
  // -----------------------------

  const hideMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  return (
    <React.Fragment>
      <div className={navContainerClass}>
        <img className={classes.Logo} src={logo} alt="logo" />
        {isMobileMenuVisible && <MenuUserDropdown/>}
        <div className={menuButtonContainerClass}>
          {menuButtons}
        </div>
      </div>
      <div className={classes.HamburgerIconContainer} onClick={() => setIsMobileMenuVisible(true)}><Hamburger /></div>
      <Backdrop isVisible={isMobileMenuVisible} clicked={hideMobileMenu} />
    </React.Fragment>
  );
};

export default HorizontalNavBar;
