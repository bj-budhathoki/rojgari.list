import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FooterWrapper } from "./FooterStyles";
import Button from "../Button/Button";
const Footer = () => {
  return (
    <FooterWrapper>
      <Button>post a job</Button>
      <div className="footer-links">
        <FaTwitter />
        <FaInstagram />
      </div>
      <div className="copyright">
        Copyright &copy;{new Date().getFullYear()} rojgari.list
      </div>
    </FooterWrapper>
  );
};
export default Footer;
