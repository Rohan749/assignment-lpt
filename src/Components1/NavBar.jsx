import React, { useEffect } from "react";
import "./NavBar.css";
import logo from "./assets/logo.svg";
import messagelogo from "./assets/messages.svg";
import bell from "./assets/Vector.svg";
import award from "./assets/award.svg";
import profile from "./assets/profile.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";

const NavBar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-zoom-in" data-aos-delay="300" className="nav_bar">
        <Link to="./applications">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <input
          type="search"
          placeholder="type for search"
          className="navbar_form"
        />
        <div className="icons">
        <nav className="nav__icons"><img src={messagelogo} alt="msg" /></nav>
        <nav className="nav__icons"><img src={bell} alt="notifications" /></nav>
        <nav className="nav__icons"><img src={award} alt="award" /></nav>      
        </div>
        <div className="nav_profile">
          <img src={profile} alt="profile"/>
          <div className="profile_description">
            <div>Akash Mishra</div>
            <button className="profileEdit_btn">EDIT MY PROFILE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
