const { gql } = require("apollo-server-express");
exports.typeDefs = gql`
  type Job {
    _id: ID
    position: String!
    location: String
    description: String
    salary: String
    tags: [String]
    name: String!
    website: String!
    twitter: String
    url_email: String!
    company: String
    contact_email: String!
    logo: String
  }

  type Query {
    getAllJobs: [Job]
  }
  type Mutation {
    addJob(
      position: String!
      location: String
      description: String
      salary: String
      tags: [String]
      name: String!
      website: String!
      twitter: String
      url_email: String!
      company: String
      contact_email: String!
      logo: String
    ): Job
  }
`;

// module.exports = typeDefs;
