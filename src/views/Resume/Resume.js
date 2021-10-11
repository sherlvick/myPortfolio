import React from "react";

import classes from "./Resume.module.css";

import user from "../../assets/Images/user.png";
import twitter from "../../assets/Images/twitter.png";
import facebook from "../../assets/Images/facebook.png";
import linkedin from "../../assets/Images/linkedin.png";
import github from "../../assets/Images/github.png";

// import components
import RatingStars from "../../componets/dumb/RatingStars/RatingStars";

const Resume = () => {
  return (
    <section>
      <div className={classes.Hero}>
        <img
          className={classes.UserImg}
          src={user}
          width="150px"
          height="150px"
          alt="user"
        />
        <div className={classes.UserDescription}>
          <p>Aman Kumar</p>
          <p>UI Developer</p>
          <RatingStars max={5} score={3} />
        </div>
        <div className={classes.stage}>
          <a className={`${classes.box} ${classes.bounce4} ${classes.MarginBtmLvl2}`}><img
            
            src={twitter}
            alt="twitter"
          /></a>
          <a className={`${classes.box} ${classes.bounce4} ${classes.MarginBtmLvl1}`}><img
            src={facebook}
            alt="facebook"
          /></a>
          <a className={`${classes.box} ${classes.bounce4} ${classes.MarginBtmLvl1}`} href="https://linkedin.com/in/aman-kumar-518196a1" target="_blank" rel="noreferrer"><img
            src={linkedin}
            alt="linkedin"
          /></a>
          <a className={`${classes.box} ${classes.bounce4} ${classes.MarginBtmLvl2}`} href="https://github.com/sherlvick" target="_blank" rel="noreferrer"><img
            src={github}
            alt="github"
          /></a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
