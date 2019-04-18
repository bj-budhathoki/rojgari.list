import React from "react";
import { JobContainer, JobContentLeft, JobContentRight } from "./JobStyles";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  return (
    <JobContainer>
      <JobContentLeft>
        <div className="company-logo">
          <img src={job.logo} alt="company name" />
        </div>
        <div className="company-job">
          <Link
            to={{
              pathname: `/job/${job.name}-${job.position.split(" ").join("-")}`,
              id: job._id
            }}
            className="job-title"
          >
            {job.position}
          </Link>
          <div className="company-name">{job.name}</div>
        </div>
      </JobContentLeft>
      <JobContentRight>
        <div className="tags">
          {job.tags && job.tags.map(tag => <div>{tag}</div>)}
        </div>
        <div className="location">
          <FaMapMarkerAlt color="#ccc" /> &nbsp; <span>{job.location}</span>
        </div>
      </JobContentRight>
    </JobContainer>
  );
};

export default Job;
