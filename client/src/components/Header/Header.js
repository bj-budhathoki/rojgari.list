import React from "react";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderContent,
  HeaderSlug
} from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
      <HeaderContent>
        <HeaderTitle>
          YOUR DREAM JOB <span>FOR</span> THE FUTURE ?
        </HeaderTitle>
        <HeaderSlug>A Job Board for Tech Enthusiasts.</HeaderSlug>
      </HeaderContent>
    </HeaderWrapper>
  );
};
export default Header;
