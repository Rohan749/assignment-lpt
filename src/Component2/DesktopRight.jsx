import React from "react";
import "./DesktopRight.css";
import bell from "./assets/bell.svg";
import profile from "./assets/m.svg";
import DesktopRightBody from "./DesktopRightBody";
import m1 from "./assets/m.svg";
import m4 from "./assets/m 4.svg";
import m5 from "./assets/m 5.svg";
import m6 from "./assets/m 6.svg";
import m7 from "./assets/m 7.svg";
import w3 from "./assets/w 3.svg";
import w5 from "./assets/w 5.svg";
import w6 from "./assets/w 6.svg";
import w7 from "./assets/w 7.svg";


const users = [
  {
    profile: m1,
    name: "Chikelu Obasea",
    desc: "Full-stack Ruby on Rails Developer",
    state: "New",
    percent: "85%",
    date: "16 sep 2018"
  },
  {
    profile: m4,
    name: "Dusya Sigachyaova",
    desc: "Miracle Marketer on Steroids",
    state: "Second Interview",
    percent: "56%",
    date: "04 feb 2019"
  },
  {
    profile: m5,
    name: "Ekene Obasey",
    desc: "Finally Dressed with Bravado",
    state: "Phone Interview",
    percent: "76%",
    date: "16 sep 2018"
  }
  ,
  {
    profile: m6,
    name: "Fabiana Capmany",
    desc: "Miracle Marketer on Steroids",
    state: "Final Interview",
    percent: "45%",
    date: "23 nov 2018"
  },
  {
    profile: m7,
    name: "Grigoriy Kozhukhoz",
    desc: "Full-stack Ruby on Rails Developer",
    state: "Final Interview",
    percent: "36%",
    date: "05 jan 2019"
  },
  {
    profile: w3,
    name: "Xuan Jingyi",
    desc: "Full stack Ruby on Rails Developer",
    state: "New",
    percent: "85%",
    date: "05 jan 2019"
  },
  {
    profile: w5,
    name: "Igor Antonovich",
    desc: "Full-stack Ruby on Rails Developer",
    state: "Second Interview",
    percent: "76%",
    date: "04 feb 2019"
  },
  {
    profile: w6,
    name: "Alberta Raya",
    desc: "Miracle Marketer on Steroids",
    state: "New",
    percent: "77%",
    date: "16 sep 2018"
  },
  {
    profile: w7,
    name: "Lucas Pacheco",
    desc: "Full-stack Ruby on Rails Developer",
    state: "Phone Interview",
    percent: "40%",
    date: "16 sep 2018"
  }
]

const DesktopRight = () => {
  return (
    <div className="desktopRight">
      <div className="desktopRight_top">
        <div className="top_contents">
          <img src={bell} alt="Notifications" />
        </div>
        <div className="top_contents">
          <img src={profile} alt="Profile" />
        </div>
        <div className="profile_name top_contents">
          <nav className="p_name">Riley Cooper</nav>
          <nav className="p_position">Acme International</nav>
        </div>
      </div>
      <div className="desktopRight_middle">
        <nav>Showing 45 results from 108 total</nav>
      </div>
      <div className="desktopRight_body">
        {users.map((user)=> (
            <DesktopRightBody 
            profile = {user.profile}
            name = {user.name}
            desc = {user.desc}
            state = {user.state}
            percent = {user.percent}
            date = {user.date}
            />
        ))}
      </div>
    </div>
  );
};

export default DesktopRight;
