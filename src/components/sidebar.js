import React from "react";
import MenuItem from "./menu-item";
import navigation from "../navigation";
import classes from "./sidebar.module.css";

const Sidebar = ({ activeMainMenuItem, setActiveMainMenuItem, activeSubMenuItem, setActiveSubMenuItem }) => {

  return (
    <aside className={classes.sidebar}>
      <nav>
        <ul className={classes.menu}>
          {navigation.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onClick={setActiveMainMenuItem}
              setActiveMenuItem={setActiveMainMenuItem}
              activeMenuItem={activeMainMenuItem}
              activeSubMenuItem={activeSubMenuItem}
              setActiveSubMenuItem={setActiveSubMenuItem}
            />
          ))}
        </ul>
      </nav>
      <footer>
        <p>© 2023 EMOTIQ - All rights reserved</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
