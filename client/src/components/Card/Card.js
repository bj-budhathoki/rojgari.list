import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import Button from "../Button/Button";
import styled from "styled-components";
const CardWrapper = styled.div`
  background: #ffff;
  box-shadow: 0 0 0.2rem 0.4rem #f1f1f1;
  height: ${props => props.height}rem;
  border-radius: ${props => props.borderRadius};
  display: grid;
  grid-template-rows: auto;
  text-align: center;
  padding: 1rem 3rem;
  margin-bottom: 3rem;
  & > div {
    &:not(:last-child) {
      border-bottom: 0.5px solid #f2f2f2;
    }
    width: 100%;
  }
  .company,
  .location,
  .publish {
    padding: 0.5rem 0;
    h3 {
      color: #444444;
      text-transform: capitalize;
    }
  }
  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    a {
      text-decoration: none;
      margin-top:0.5rem
      font-weight:600;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`;
const Card = ({ height, borderRadius }) => {
  return (
    <div>
      <CardWrapper height={height} borderRadius={borderRadius}>
        <div className="company">
          <h3>compnay</h3>
          <p>Theorem</p>
          <div className="links">
            <Link to="">website</Link>
            <Link to="">twitter</Link>
          </div>
        </div>
        <div className="location">
          <h3>location</h3>
          <p>{false ? <FaGlobe /> : <FaMapMarkerAlt />} Remote</p>
        </div>
        <div className="publish">
          <h3>publish</h3>
          <p>3 days ago</p>
        </div>
      </CardWrapper>
      <Button width={100} bg="#339" borderRadius="0.5rem">
        Apply Now
      </Button>
    </div>
  );
};
Card.defaultProps = {
  height: 10,
  borderRadius: 1
};
Card.propTypes = {
  height: PropTypes.number,
  borderRadius: PropTypes.number
};
export default Card;
