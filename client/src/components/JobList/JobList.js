import React from "react";

import Title from "../Title/Title";
import Job from "../Job/Job";
import { JobListWraper } from "./JobListStyles";
const getAllJobs = [
  {
    _id: "1",
    jobTitle: "Web developer and designer",
    companyName: "Aptech computer",
    companyLogo: "https://randomuser.me/api/portraits/men/2.jpg",
    tags: ["react", "javascript", "react native", "frontend"],
    address: "kantipath,kathmandu",
    jobDescription: "lorem iosum",
    createDate: "2019-04--7"
  },
  {
    _id: "2",
    jobTitle: "Full stack javascript developer",
    companyName: "Danfe creatives",
    companyLogo: "https://randomuser.me/api/portraits/women/2.jpg",
    tags: ["react", "javascript"],
    address: "lazimpat,Kathmandu",
    jobDescription: "lorem iosum",
    createDate: "2019-04-7"
  },
  {
    _id: "3",
    jobTitle: "front end developer",
    companyName: "satawati technology",
    companyLogo: "https://randomuser.me/api/portraits/women/8.jpg",
    tags: ["react", "javascript"],
    address: "Nepaljunj, Nepal",
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
