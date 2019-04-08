import React from "react";

import Title from "../Title/Title";
import Job from "../Job/Job";
import { JobListWraper } from "./JobListStyles";
const getAllJobs = [
  {
    _id: "1",
    jobTitle: "front end developer",
    companyName: "google",
    companyLogo: "https://randomuser.me/api/portraits/men/2.jpg",
    tags: ["react", "javascript", "react native", "frontend"],
    address: "kathmandu",
    jobDescription: "lorem iosum",
    createDate: "2019-04--7"
  },
  {
    _id: "2",
    jobTitle: "Full stack javascript developer",
    companyName: "facebook",
    companyLogo: "https://randomuser.me/api/portraits/women/2.jpg",
    tags: ["react", "javascript"],
    address: "pokhra nepal",
    jobDescription: "lorem iosum",
    createDate: "2019-04-7"
  },
  {
    _id: "3",
    jobTitle: "front end developer",
    companyName: "Airbnb",
    companyLogo: "https://randomuser.me/api/portraits/women/8.jpg",
    tags: ["react", "javascript"],
    address: "Nepaljund Nepal",
    jobDescription: "lorem iosum",
    createDate: "2019-04--7"
  }
];
const JobList = () => {
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
