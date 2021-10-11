import classes from "./HomePage.module.css";

import React from "react";

import Tooltip from "../../componets/dumb/ToolTip/Tooltip";
import HeroIntro from "./HeroIntro/HeroIntro";


const HomePage = () => {
    return(
        <React.Fragment>
            <div className={classes.HeroSection}>
            <HeroIntro />
            </div>
        <div className={classes.TilesSection}>
            <div className={`${classes.ProfileNavigatorCard} ${classes.Bg_Yellow}`}>
            <Tooltip content="Enter to see my design skills" direction="bottom" delay={200}>DESIGN</Tooltip></div>
            <div className={`${classes.ProfileNavigatorCard} ${classes.Bg_Black}`}>
            <Tooltip content="Enter to see my coding skills" direction="bottom" delay={200}>CODE</Tooltip></div>
        </div>
        </React.Fragment>
    )
};

export default HomePage