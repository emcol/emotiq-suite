import React, { useState } from "react";
import SubMenuItem from "./submenu-item";
import classes from "./menu-item.module.css";
import arrowIcon from "../assets/icons/icon-arrow-down.svg";
import networkIcon from "../assets/icons/icon-network.svg";

const MenuItem = ({ item, activeMenuItem, setActiveMenuItem, activeSubMenuItem, setActiveSubMenuItem }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const menuClassName = `${classes["menu-item"]} ${activeMenuItem === item.id ? classes["active"] : ""} ${expanded ? classes["expanded"] : ""}`;
  
  const handleClick = () => {
    if (hasSubmenu) {
      setExpanded(!expanded);
    } else {
      setActiveMenuItem(item.id);
      setActiveSubMenuItem(null);
    }
  };

  return (
    <li className={menuClassName} onClick={handleClick}>
      <div className={classes["menu-item-wrapper"]}>
        <div className={classes["menu-item-label"]}>
          <div className={classes["menu-item-icon"]}>
            <img src={item.icon || networkIcon} alt="network" className="img-full" />
          </div>
          <p className={classes["menu-item-text"]}>{item.title}</p>
        </div>
        {hasSubmenu && (
          <div className={classes["menu-arrow-icon"]}>
            <img src={arrowIcon} alt="arrow" className="img-full" />
          </div>
        )}
      </div>
      {hasSubmenu && (
        <ul className={classes.submenu}>
          {item.submenu.map(subitem => (
            <SubMenuItem
              key={subitem.id}
              subitem={subitem}
              activeSubMenuItem={activeSubMenuItem}
              setActiveSubMenuItem={setActiveSubMenuItem}
              setActiveMenuItem={setActiveMenuItem}
              parentMenuItemId={item.id}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;