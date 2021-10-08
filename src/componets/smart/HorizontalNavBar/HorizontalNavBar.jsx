// import { Fragment } from "react";
import { useHistory } from "react-router-dom";

import classes from "./HorizontalNavBar.module.css";

import logo from "../../../assets/Images/logo192.png";

const HorizontalNavBar = (props) => {
  const history = useHistory();

  let menuButtons = [];
  let key = 0;
  for(const btnName in props.menus){
    key++;
    menuButtons.push(<a className={`${classes.MenuButton}`} key={`${btnName}_${key}`} onClick={() => history.push(props.menus[btnName])}>{btnName}</a>)
  }

  return (
    <div className={`${classes.NavBarContainer} ${classes.NavBarEffect}`}>
      <img className={classes.Logo} src={logo} alt="logo" />
      <div className={classes.MenuButtonContainer}>
       {menuButtons}
      </div>
    </div>
  );
};

export default HorizontalNavBar;
