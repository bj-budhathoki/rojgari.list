import React from "react";
import Navbar from "../Navbar/Navbar";
import { DetailsWrapper } from "./JobDetailsStyles";
import { FaMapMarkerAlt } from "react-icons/fa";
import Card from "../Card/Card";
const JobDetails = props => {
  console.log("params ::", props);
  return (
    <DetailsWrapper>
      <Navbar color="#339" />
      <div className="detail-header">
        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="logo" />
        <div className="job-title">Front-end Developer</div>
        <div className="company">Facebook</div>
        <div className="location">
          <FaMapMarkerAlt /> &nbsp;<span>Kathmandu,Nepal</span>
        </div>
      </div>
      <div className="details">
        <Card height={35} />
        <div className="about-job">
          <p>
            <span>Lorem</span> ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
          <div className="skills">
            <h2 className="skills-title">Skills & Requirements:</h2>
            <ul className="skills-list">
              <li className="list">Smart, gets things done.</li>
              <li className="list">Smart, gets things done.</li>
              <li className="list">Smart, gets things done.</li>
              <li className="list">Smart, gets things done.</li>
            </ul>
          </div>
          <div className="duties">
            <h2>Duties & Responsibilities:</h2>
            <ul className="duties-list">
              <li>Architect and build web applications.</li>
              <li>Architect and build web applications.</li>
              <li>Architect and build web applications.</li>
              <li>Architect and build web applications.</li>
              <li>Architect and build web applications.</li>
            </ul>
          </div>
        </div>
      </div>
    </DetailsWrapper>
  );
};
export default JobDetails;
