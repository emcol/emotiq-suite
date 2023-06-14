import React, { useMemo, useState } from "react";
import classes from "./page.module.css";
import navigation from "../navigation";

const Page = ({ activeMainMenuItem, activeSubMenuItem }) => {

  const [activeTab, setActiveTab] = useState(null);
  const activeMainMenuItemObj = useMemo(() => navigation.find(item => item.id === activeMainMenuItem), [activeMainMenuItem]);
  console.log(activeMainMenuItemObj);
  const activeSubMenuItemObj = useMemo(() => activeMainMenuItemObj?.submenu?.find(item => item.id === activeSubMenuItem), [activeMainMenuItemObj, activeSubMenuItem]);

  return (
    <main className={classes.page}>
      <h1>
        {activeSubMenuItemObj?.title || activeMainMenuItemObj?.title}
      </h1>
        <div className={classes.tabs}>
          {activeSubMenuItemObj?.tabs?.map(tab => (
            <div key={tab.id} className={`${classes.tab} ${activeTab === tab.id ? classes.active : ""}`}>
              <h2 onClick={() => setActiveTab(tab.id)}>{tab.title}</h2>
            </div>
          ))}
        </div>
    </main>
  );
}

export default Page;
