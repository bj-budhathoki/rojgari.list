import { gql } from "apollo-boost";

/*=======
job queries
=======*/
export const GET_ALL_JOBS = gql`
  query {
    getAllJobs {
      _id
      jobTitle
      createDate
      companyName
      companyLogo
      jobDescription
      tags
    }
  }
`;
