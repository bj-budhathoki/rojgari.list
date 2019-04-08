import React from "react";
import { Nav } from "./NavabarStyles";
import { IoLogoTwitter } from "react-icons/io";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Navbar = ({ color }) => {
  return (
    <Nav color={color}>
      <h2>
        <Link to="/">Rojgari.list</Link>
      </h2>

      <Button>post a job</Button>
    </Nav>
  );
};

export default Navbar;
