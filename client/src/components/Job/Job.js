import React from "react";
import { JobContainer, JobContentLeft, JobContentRight } from "./JobStyles";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  return (
    <JobContainer>
      <JobContentLeft>
        <div className="company-logo">
          <img src={job.companyLogo} alt="company name" />
        </div>
        <div className="company-job">
          <Link
            to={{
              pathname: `/job/${job.companyName}-${job.jobTitle
                .split(" ")
                .join("-")}`,
              id: job._id
            }}
            className="job-title"
          >
            {job.jobTitle}
          </Link>
          <div className="company-name">{job.companyName}</div>
        </div>
      </JobContentLeft>
      <JobContentRight>
        <div className="tags">
          {job.tags && job.tags.map(tag => <div>{tag}</div>)}
        </div>
        <div className="location">
          <FaMapMarkerAlt color="#ccc" /> &nbsp;<span>{job.address}</span>
        </div>
      </JobContentRight>
    </JobContainer>
  );
};

export default Job;
