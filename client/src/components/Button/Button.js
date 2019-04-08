import React from "react";
import styled from "styled-components";
import { colors } from "../../themes";
const Button = styled.button`
  background: ${props => (props.bg ? props.bg : colors.button)};
  border: none;
  outline: none;
  border-radius: 2.5rem;
  text-transform: uppercase;
  padding: 1.8rem 1.9rem;
  color: ${colors.text};
  font-size: 1.6rem;
  font-weight: bold;
  width: ${props => props.width}%;
`;
export default Button;
