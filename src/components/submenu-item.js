import React from "react";
import classes from "./submenu-item.module.css";

const SubMenuItem = ({ subitem, activeSubMenuItem, setActiveSubMenuItem, setActiveMenuItem, parentMenuItemId }) => {
  
  const handleClick = (e) => {
    e.stopPropagation();
    setActiveSubMenuItem(subitem.id);
    setActiveMenuItem(parentMenuItemId);
  };

  const submenuItemClassName = `${classes["submenu-item"]} ${activeSubMenuItem === subitem.id ? classes["active"] : ""}`;

  return (
    <li className={submenuItemClassName}  onClick={handleClick}>
      {subitem.title}
    </li>
  );
};

export default SubMenuItem;