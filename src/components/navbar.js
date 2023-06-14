import React from 'react';
import classes from './navbar.module.css';
import restartIcon from '../assets/icons/icon-restart.svg';
import powerIcon from '../assets/icons/icon-power.svg';
import logo from '../assets/icons/logo.svg';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className="img-full" />
      </div>
      <ul>
        <li><button><img src={restartIcon} alt="restart" className="img-full" /></button></li>
        <li><button><img src={powerIcon} alt="restart" className="img-full" /></button></li>
        <li className={classes.divider}></li>
        <li><button><span className={classes.circle}>NC</span></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;