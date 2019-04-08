const { gql } = require("apollo-server-express");
exports.typeDefs = gql`
  type Job {
    _id: ID
    jobTitle: String!
    companyName: String!
    companyLogo: String!
    tags: [String]
    address: String!
    jobDescription: String
    createDate: String
  }
  type Query {
    getAllJobs: [Job]
  }
  type Mutation {
    addJob(
      jobTitle: String!
      companyName: String!
      companyLogo: String!
      tags: [String]
      address: String!
      jobDescription: String
    ): Job
  }
`;

// module.exports = typeDefs;
