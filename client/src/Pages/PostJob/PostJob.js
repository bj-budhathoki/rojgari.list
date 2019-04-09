import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/";

const PostJonContainer = styled.div`
  padding: 3rem 10rem;
  .title {
    /* background: red; */
    margin-top: 5rem;
    text-align: center;
    font-size: 2.5rem;
  }
`;
const PostJob = () => {
  return (
    <PostJonContainer>
      <Navbar color="#339" />
      <div className="title">
        <h1>Post a Job</h1>
      </div>
      <Form />
    </PostJonContainer>
  );
};
export default PostJob;
