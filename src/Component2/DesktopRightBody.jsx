import React from "react";
import "./DesktopRightBody.css";

const DesktopRightBody = (props) => {
  return (
    <div className="desktopRightBody">
      <div className="first_content">
        <nav>
          <img className="profile_nav" src={props.profile} alt="profile" />
        </nav>
        <div className="desktopRight_profile">
            <span className="right_name">{props.name}</span><span className="profile_date">{props.date}</span>
            <nav className="right_desc">{props.desc}</nav>
      </div>
      </div>
      
      <div className="profile_state">{props.state}</div>
      <div className="profile_percent">{props.percent}</div>
    </div>
  );
};

export default DesktopRightBody;
