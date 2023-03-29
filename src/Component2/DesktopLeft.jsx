import React from 'react'
import "./DesktopLeft.css"
import archive from "./assets/archive.svg";
import img1 from "./assets/image 1.svg";
import subtract from "./assets/Subtract.svg";
import user from "./assets/User.svg";
import { Link } from 'react-router-dom';

const DesktopLeft = () => {
  return (
    <div className='desktopLeft'>
      <nav className='desktopLeft_logo'>
      </nav>
      <Link to="/">
      <nav className='i1'>JOB<br />TOOLI</nav>
      </Link>
      <nav className='desktopLeft_icons i2'> <img src={img1} alt="o"/> </nav>
      <nav className='desktopLeft_icons i3'> <img src={subtract} alt="o"/> </nav>
      <nav className='desktopLeft_icons i4'> <img src={user} alt="o"/> </nav>
      <nav className='desktopLeft_icons i5'> <img src={subtract} alt="o"/> </nav>
      <nav className='desktopLeft_icons i6'> <img src={archive} alt="o"/> </nav>
    </div>
  )
}

export default DesktopLeft