import React from "react";
import YoutubeLogo from "./icons/youtube-logo.png"
import MenuIcon from "./icons/icons8-squared-menu-24.png"
import NavIcon from "./NavIcon"
import NavBell from "./icons/icons8-bell-24.png"
import NavVideo from "./icons/icons8-video-call-24.png"
import UserPhoto from "./icons/userphoto.png"
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
        <img src={NavVideo} alt="Video-icon" className="video-icon" ></img>
        <img src={MenuIcon} alt="Menu-icon" className="menu-icon" ></img>
        <img src={NavBell} alt="Bell-icon" className="bell-icon" ></img>
        <img src={UserPhoto} alt="User-icon" className="user-icon" ></img>
      </nav>
    </div>
  );
};

export default NavBar;
