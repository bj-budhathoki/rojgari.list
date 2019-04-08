import styled from "styled-components";
import { colors } from "../../themes";

export const DetailsWrapper = styled.div`
  padding: 3rem 10rem;
  .detail-header {
    margin-top: 5rem;
    text-align: center;
    img {
      width: 12rem;
      height: 12rem;
      border-radius: 1rem;
    }
    .job-title {
      font-size: 4rem;
      font-weight: 600;
      margin-top: 2rem;
      text-transform: capitalize;
    }
    .company {
      font-size: 2.5rem;
      /* font-weight: 600; */
      color: #ccc;
      margin-top: 1rem;
    }
    .location {
      font-size: 2rem;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 3rem;
    margin-top: 5rem;
    .about-job {
      background: #ffffff;
      padding: 3rem;
      border-radius: 1rem;
      box-shadow: 0 0 0.3rem 0.5rem #f1f1f1;
      p {
        text-align: justify;
        word-spacing: 0.2rem;
        span {
          color: #339;
          font-size: 2.5rem;
        }
      }
      .skills,
      .duties {
        margin-top: 4rem;
        .skills-list,
        .duties-list {
          margin-top: 2rem;
        }
      }
    }
    .about-company-short {
      background: green;
    }
  }
`;
