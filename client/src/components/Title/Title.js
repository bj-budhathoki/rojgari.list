import React from "react";
import styled from "styled-components";
const TitleWrapper = styled.div`
  font-size: 3.4rem;
  text-transform: capitalize;
  text-align: center;
  font-weight: 600;
  margin-bottom: 3rem;
`;
const Title = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};
export default Title;
