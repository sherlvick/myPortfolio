import { Fragment } from "react";

import HorizontalNavBar from "../componets/smart/HorizontalNavBar/HorizontalNavBar";

const Layout = (props) => {
  const getHorizontalNavMenuObj = () => {
    let menuObj = {};
    menuObj["HOME"] = "/";
    menuObj["WORK"] = "/work";
    menuObj["RESUME"] = "/resume";
    menuObj["CONTACT"] = "/contact";
    return menuObj;
  };

  return (
    <Fragment>
      <HorizontalNavBar menus={getHorizontalNavMenuObj()} />
      {props.children}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
