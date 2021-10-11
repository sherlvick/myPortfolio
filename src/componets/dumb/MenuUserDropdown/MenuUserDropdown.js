import { useState,useRef,useEffect } from "react";

import classes from "./MenuUserDropdown.module.css";

import { ChevronDown, User } from "../../../ProjectIcons";

const MenuUserDropdown = () => {
    let containerRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    let containerClass = classes.DropdownContainer;
    if(isVisible)containerClass = classes.DropdownContainerWIthContent;

    const handleClickOutside = (event) => {
        if (
            containerRef.current &&
          !containerRef.current.contains(event.target)
        ) {
            setIsVisible(false);
        }
      };

    let dropdownContent = <div className={classes.DropdownContentWrapper} ref={containerRef}><p>dasdasdjknj</p><p>dsfdf</p><p>ghjkhkjh</p></div>;
    return (
        <div className={containerClass} onClick={() => { setIsVisible(true) }}>
            <div className={classes.UserButton}>
                <User />
                <span>Aman Kumar</span>
                <ChevronDown />
            </div>
            {isVisible && dropdownContent}
        </div>
    )
};

export default MenuUserDropdown