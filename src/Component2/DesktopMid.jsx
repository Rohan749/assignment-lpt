import React from 'react'
import "./DesktopMid.css"
import vector from "./assets/Vector.svg"
import points from "./assets/points.svg"
import Switch from './Switch'



const DesktopMid = () => {
  return (
    <div className='desktopMid'>
      <div className='desktopMid_search'>
        <img src={vector} alt="search:"/>
        <input placeholder='Search For Jobs and Applications' type="search" />
      </div>
      <h1 className='desktopMid_heading'>Applications</h1>

      <div className='desktopMid_filters'>
        <h3>Filters</h3>
        <nav className='filters'>
          <Switch />
        </nav>
        <div className='desktopMid_tags'>
          <nav className='tag'>
            <img src={points} alt="->"/><nav>&nbsp;JOBS</nav> 
          </nav>
          <nav className='tag'>
            <img src={points} alt="->"/><nav>&nbsp;JOBS DOMAIN</nav> 
          </nav>
          <nav className='tag'>
            <img src={points} alt="->"/><nav>&nbsp;SCORE</nav> 
          </nav>
          <nav className='tag'>
            <img src={points} alt="->"/><nav>&nbsp;APPLICATION DATE</nav> 
          </nav>
          <nav className='tag'>
            <img src={points} alt="->"/><nav>&nbsp;TAGS</nav> 
          </nav>
          
        </div>
      </div>
    </div>
  )
}

export default DesktopMid