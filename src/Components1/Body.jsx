import React from 'react'
import LeftBar from './LeftBar'
import MidBody from './MidBody'
import RightBody from './RightBody'
import "./Body.css"

const Body = () => {
  return (
    <div className='main_body'>
        <LeftBar />
        <MidBody />
        <RightBody />
    </div>
  )
}

export default Body;