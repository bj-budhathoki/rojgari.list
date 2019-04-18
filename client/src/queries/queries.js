import { gql } from "apollo-boost";

/*=======
job queries
=======*/
export const GET_ALL_JOBS = gql`
  query {
    getAllJobs {
      _id
      position
      location
      description
      salary
      tags
      name
      website
      twitter
      url_email
      company
      contact_email
      logo
    }
  }
`;
