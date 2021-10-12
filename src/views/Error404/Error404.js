import classes from "./Error404.module.css";

import errorImg from "../../assets/Images/error.png";

const Error404 = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.error}>404</div>
      <span className={classes.info}>Page not found</span>
      <div className={classes.TwoSection}>
          <img src={errorImg} className={classes.ErrorImg}/>
          <a className={classes.SendMsgBtn} href={`${window.location.origin}/`}>Go To Home</a>
      </div>
    </div>
  );
};

export default Error404;
