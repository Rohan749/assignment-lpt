import React, { useEffect } from "react";
import Application from "./Application";
import "./MidLowerBody.css";
import job1 from "./assets/job1.svg";
import job2 from "./assets/unacadlogo.svg"
import job3 from "./assets/techsovlogo.svg"
import job4 from "./assets/ceptionlogo.svg"
import job5 from "./assets/ursalogo.svg"
import job6 from "./assets/serviologo.svg"
import AOS from "aos";
import "aos/dist/aos.css";

const jobApplications = [
  {
    joblogo: job1,
    job: "Product Designer",
    site: "Techmint, On-site",
    place: "Bengaluru, India",
    salary: "₹ 50K - ₹ 70K",
    status: "Rejected",
  },
  {
    joblogo: job2,
    job: "Product Designer",
    site: "Unacademy, Work From Home",
    place: "Bengaluru, India",
    salary: "₹ 60K - ₹ 80K",
    status: "In Process",
  },
  {
    joblogo: job3,
    job: "UX Designer",
    site: "TechNovus, On-site",
    place: "Bengaluru, India",
    salary: "₹ 60K - ₹ 75K",
    status: "Selected",
  },
  {
    joblogo: job4,
    job: "Product Designer",
    site: "Udemy, On-site",
    place: "Delhi, India",
    salary: "₹ 80K - ₹ 95K",
    status: "In Process",
  },
  {
    joblogo: job5,
    job: "Product Designer",
    site: "URSA, On-site",
    place: "Bengaluru, India",
    salary: "₹ 50K - ₹ 70K",
    status: "Selected",
  },
  {
    joblogo: job6,
    job: "UX Designer",
    site: "Servio Tech, Hybrid",
    place: "Bengaluru, India",
    salary: "₹ 60K - ₹ 75K",
    status: "Rejected",
  },
];

const MidLowerBody = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-zoom-in" data-aos-delay="1000" className="midlower_head">
        <h2>My Jobs</h2>
        <div className="midlower_body">
          <span>Job Search Status</span>
          <div className="jobsearch_status">
            <div className="green_circle" />
            <span>Actively Interviewing</span>
          </div>
        </div>
      </div>
      <div className="applications">
        <div data-aos="fade-up" data-aos-delay="1200" className="applications_body">
          <h1>Applications</h1>
          {jobApplications.map((item) => (
            <Application
              jobLogo={item.joblogo}
              job={item.job}
              site={item.site}
              place={item.place}
              salary={item.salary}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MidLowerBody;
