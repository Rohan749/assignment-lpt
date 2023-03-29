import React, { useEffect } from "react";
import "./MidUpperBody.css";
import anywhereicon from "./assets/anywhere.svg";
import filters from "./assets/Filters.svg"
import crossicon from "./assets/crossicon.svg"
import AOS from "aos";
import "aos/dist/aos.css";

const MidUpperBody = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="600" className="mid_heading">
        <h2>Search For Jobs</h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="600" className="mid_body">
        <input
          type="search"
          placeholder="type for search"
          className="mid_search"
        />
        <img src={anywhereicon} alt="choose location" />
        <img src={filters} alt="filter"/>
      </div>
      <div data-aos="fade-up" data-aos-delay="700" className="mid_selectors">
        <div data-aos="fade-left" className="selector"><img src={crossicon} alt="X"/>UX Design</div>
        <div data-aos="fade-left" className="selector"><img src={crossicon} alt="X"/>Full Time</div>
        <div data-aos="fade-left" className="selector"><img src={crossicon} alt="X"/>On-site</div>
        <div data-aos="fade-left" className="selector"><img src={crossicon} alt="X"/>Delhi NCR</div>
        <div data-aos="fade-left" className="selector"><img src={crossicon} alt="X"/>Banglore</div>
      </div>
    </>
  );
};

export default MidUpperBody;
