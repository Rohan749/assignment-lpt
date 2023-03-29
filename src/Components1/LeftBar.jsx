import React, { useEffect } from 'react'
import "./LeftBar.css"
import hamburger from "./assets/hamburger.svg"
import jobicon from "./assets/jobicon.svg"
import messagesicon from "./assets/messagesicon.svg"
import events from "./assets/events.svg"
import logouticon from "./assets/logout-icon.svg"
import dashboard from "./assets/dashboard.svg"
import AOS from "aos";
import "aos/dist/aos.css";


const LeftBar = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-zoom-in" data-aos-delay="300"  className='leftBar_body'>
      <nav><img className='left_icon' src={hamburger} alt=""/></nav>
      <div className='upper_contents'>
          <nav><img className='left_icon' src={jobicon} alt=""/></nav>
          <nav><img className='left_icon' src={messagesicon} alt=""/></nav>
          <nav><img className='left_icon' src={events} alt=""/></nav>
          <nav><img className='left_icon' src={dashboard} alt=""/></nav>
        </div>
      <div className='lower_contents'>
        <button>Help</button>
        <div className='body__lowerContents'>
          <div className='lower_contents'><img className='left_icon' src={logouticon} alt=""/></div>
          Log-out
        </div>       
      </div>
    </div>
  )
}

export default LeftBar