import { Fragment } from "react";

import HorizontalNavBar from "../componets/smart/HorizontalNavBar/HorizontalNavBar";

import { Home,Briefcase,FileText,Globe } from "../ProjectIcons";

const Layout = (props) => {
  const getHorizontalNavMenuObj = () => {
    let menuObj = {};
    menuObj["HOME"] = {"route":"/", "icon":<Home/>};
    menuObj["WORK"] = {"route":"/work", "icon":<Briefcase/>};
    menuObj["RESUME"] = {"route":"/resume", "icon":<FileText/>};
    menuObj["CONTACT"] = {"route":"/contact", "icon":<Globe/>};
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
