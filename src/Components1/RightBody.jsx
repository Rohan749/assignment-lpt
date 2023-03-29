import React, { useEffect } from 'react'
import "./RightBody.css"
import icon from "./assets/image.svg"
import vernacular from "./assets/vernacular.svg"
import pesto from "./assets/pesto.svg"
import ursalogo from "./assets/ursalogo.svg"
import AOS from "aos";
import "aos/dist/aos.css";

const RightBody = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top" data-aos-delay="1500" className='right__body'>
      <div className='right_upperBody'>
        <div className='right_upperIcon'>
          <img src={icon} alt="Suggestions"/>
        </div>
        <div className='suggestions_heading'>
          <nav className='heading_'>Suggested Suggestion</nav>
          <a href='/'>See all</a>
        </div>
        <div className='suggestions_body'>
          <div className='suggestions_left'>
            <nav className='_left1'>Mock Interview</nav>
            <nav className='_left2'>24th August , 2022</nav>
            <nav className='_left3'>(9:00 AM - 11:00 AM)</nav>
          </div>
          <div className='suggestions_right'>
            <button className='enrollBtn'>Enroll Now</button>
          </div>
        </div>
        <div className='suggestions_body'>
          <div className='suggestions_left'>
            <nav className='_left1'>Portfolio Presentation</nav>
            <nav className='_left2'>10th Sept , 2022</nav>
            <nav className='_left3'>(12:00 AM - 2:00 PM)</nav>
          </div>
          <div className='suggestions_right'>
            <button className='enrollBtn'>Enroll Now</button>
          </div>
        </div>
        <div className='suggestions_body'>
          <div className='suggestions_left'>
            <nav className='_left1'>Technical Round</nav>
            <nav className='_left2'>10th Sept , 2022</nav>
            <nav className='_left3'>(12:00 AM - 2:00 PM)</nav>
          </div>
          <div className='suggestions_right'>
            <button className='enrollBtn'>Enroll Now</button>
          </div>
        </div>
      </div>

      {/* Lower Body of suggestion */}
      <h2 className='event_heading'>Upcoming Events</h2>
      <div  className='right_lowerBody'>
        <div className='right_content'>
          <div className='right_contentImg'>
            <img src={vernacular} alt="LOGO"/>
          </div>
          <div className='right_contentDesc'>
            <nav className='_left1'>Portfolio Presentation</nav>
            <nav className='_left2'>Tomorrow</nav>
            <nav className='_left3'>9:00 AM - 11:00 AM</nav>
          </div>
        </div>

        <div className='right_content'>
          <div className='right_contentImg'>
            <img src={pesto} alt="LOGO"/>
          </div>
          <div className='right_contentDesc'>
            <nav className='_left1'>Group Discussion</nav>
            <nav className='_left2'>25th August , 2022</nav>
            <nav className='_left3'>9:00 AM - 10:00 AM</nav>
          </div>
        </div>

        <div className='right_content'>
          <div className='right_contentImg'>
            <img src={ursalogo} alt="LOGO"/>
          </div>
          <div className='right_contentDesc'>
            <nav className='_left1'>Mock Interview Session 1</nav>
            <nav className='_left2'>29th August , 2022</nav>
            <nav className='_left3'>2:00 PM - 4:00 PM</nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBody