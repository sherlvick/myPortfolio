import classes from "./HomePage.module.css";

import React from "react";

import Tooltip from "../../componets/dumb/ToolTip/Tooltip";
import HeroIntro from "./HeroIntro/HeroIntro";

import contactBanner from "../../assets/Images/contact.png";

const HomePage = () => {
    return(
        <React.Fragment>
            <div className={classes.HeroSection}>
            <HeroIntro />
            </div>
        <div className={`${classes.Grid} ${classes.FontSize_20} ${classes.Cursor_Pointer}`}>
            <div className={`${classes.ProfileNavigatorCard} ${classes.Padd_250_0} ${classes.Width_100} ${classes.Text_Center} ${classes.Bg_Yellow} ${classes.TextColor_White}`}>
            <Tooltip content="Enter to see my design skills" direction="bottom" delay={200}>DESIGN</Tooltip></div>
            <div className={`${classes.ProfileNavigatorCard} ${classes.Padd_250_0} ${classes.Width_100} ${classes.Text_Center} ${classes.Bg_Black} ${classes.TextColor_White}`}>
            <Tooltip content="Enter to see my coding skills" direction="bottom" delay={200}>CODE</Tooltip></div>
        </div>
        <img className={classes.ContactImg} src={contactBanner} width="256px" height="256px" alt="contact" />
        </React.Fragment>
    )
};

export default HomePage