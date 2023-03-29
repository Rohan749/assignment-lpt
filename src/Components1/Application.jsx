import React from "react";
import job1 from "./assets/job1.svg";
import "./Application.css";

const Application = (props) => {
  return (
    <div className="application__body">
      <div className="app__body">
        <div className="app_logo">
          <img src={props.jobLogo} alt="company" />
        </div>
        <div className="application__desc">
          <nav className="app__position">{props.job}</nav>
          <nav className="app__site">{props.site}</nav>
          <nav className="app__location">{props.place}</nav>
        </div>
      </div>
      <div className="application__salary">
        <nav className="salary">{props.salary}</nav>
        <nav className="monthly">Per Month</nav>
      </div>
      <div className="application__status">
        {props.status === "Selected" ? (
          <nav className="state select">Accepted</nav>
        ) : props.status === "Rejected" ? (
          <nav className="state reject">Rejected</nav>
        ) : (
          <nav className="state process">In-process</nav>
        )}
      </div>
    </div>
  );
};

export default Application;
