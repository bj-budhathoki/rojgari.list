import styled from "styled-components";
import { colors } from "../../themes";
export const JobContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  min-height: 10rem;
  border-radius: 0.9rem;
  box-shadow: 0 2px 35px -4px rgba(0, 0, 0, 0.19);
  transition: 0.2s all;
  border-right: 0.8rem solid ${colors.primary};
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  &:hover {
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.19);
    transform: translateY(0.3rem);
  }
`;
export const JobContentLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  .company-logo {
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 1rem;
    }
  }
  .company-job {
    .job-title {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 600;
      text-decoration: none;
      color: #000;
      &:hover {
        text-decoration: underline;
        color: ${colors.primary};
      }
    }
    .company-name {
      text-transform: uppercase;
      color: #3d3d3d;
    }
  }
`;
export const JobContentRight = styled.div`
  @media (min-width: 480px) {
    display: grid;
  }
  display: none;
  grid-template-columns: 1fr 1fr;
  .tags {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    &:not(:last-child) {
      /* margin-right: 1rem; */
    }

    & > div {
      border: 2px solid ${colors.primary};
      padding: 0.5rem 1rem;
      align-self: flex-start;
      border-radius: 0.5rem;
      font-weight: 600;
      color: ${colors.primary};
      &:hover {
        background: ${colors.primary};
        color: ${colors.text};
        cursor: pointer;
      }
    }
  }
  ,
  .location {
  }
`;
