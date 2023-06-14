import React, { useCallback, useState } from 'react';
import './App.css';
import classes from './App.module.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Page from './components/page';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState({ mainId: null, subId: null });

  const setActiveMainMenuItem = useCallback((mainId) => {
    setActiveMenuItem(prev => ({ ...prev, mainId }));
  }, []);
  const setActiveSubMenuItem = useCallback((subId) => {
    setActiveMenuItem(prev => ({ ...prev, subId }));
  }, []);


  return (
    <div className={classes.App}>
      <Navbar />
      <Sidebar activeMainMenuItem={activeMenuItem.mainId} setActiveMainMenuItem={setActiveMainMenuItem} setActiveSubMenuItem={setActiveSubMenuItem} activeSubMenuItem={activeMenuItem.subId} />
      <Page activeMainMenuItem={activeMenuItem.mainId} activeSubMenuItem={activeMenuItem.subId} />
    </div>
  );
}

export default App;
