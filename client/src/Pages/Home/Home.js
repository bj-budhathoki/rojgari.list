import React from "react";
import Header from "../../components/Header/Header";
import JobList from "../../components/JobList/JobList";
import { Query } from "react-apollo";
import { GET_ALL_JOBS } from "../../queries/queries";
const Home = () => {
  return (
    <div>
      <Header />
      <Query query={GET_ALL_JOBS}>
        {({ data, loading, error }) => {
          console.log("grapql data", data);
          if (loading) return <h1>loading...</h1>;
          return <JobList getAllJobs={data.getAllJobs} />;
        }}
      </Query>
    </div>
  );
};
export default Home;
