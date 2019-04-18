import React from "react";

import Title from "../Title/Title";
import Job from "../Job/Job";
import { JobListWraper } from "./JobListStyles";

const JobList = ({ getAllJobs }) => {
  return (
    <JobListWraper>
      <Title title="newest jobs" />
      <div className="jobs-list">
        {getAllJobs.map(job => (
          <Job key={job._id} job={job} />
        ))}
      </div>
    </JobListWraper>
  );
};
export default JobList;
