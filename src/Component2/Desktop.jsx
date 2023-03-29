import React, { useEffect } from 'react'
import DesktopLeft from './DesktopLeft'
import DesktopMid from './DesktopMid'
import DesktopRight from './DesktopRight'
import "./Desktop.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Desktop = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-zoom-in" data-aos-delay="300" className='Desktop'>
      <DesktopLeft />
      <DesktopMid />
      <DesktopRight />
    </div>
  )
}

export default Desktop