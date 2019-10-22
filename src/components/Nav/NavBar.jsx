import React from "react";
import YoutubeLogo from "./icons/youtube-logo.png"
import MenuIcon from "./icons/icons8-squared-menu-24.png"
import NavIcon from "./NavIcon"
import NavBell from "./icons/icons8-bell-24.png"
import "./NavBar.css";



const NavBar = props => {
  return (
    <div className="menu">
      <nav className="main-navbar">
        <NavIcon/>
        <a href="/">
          <img src={YoutubeLogo} alt="Youtube Logo" className="youtube-logo" />
        </a>
        {props.children}
        <img src={MenuIcon} alt="Menu-icon" className="menu-icon" ></img>
        <img src={NavBell} alt="Bell-icon" className="bell-icon" ></img>
      </nav>
    </div>
  );
};

export default NavBar;
