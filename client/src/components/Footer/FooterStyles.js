import styled from "styled-components";
import { colors } from "../../themes";
export const FooterWrapper = styled.footer`
  background: ${colors.primary};
  min-height: 5rem;
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  padding: 3rem 0;
  .footer-links {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    font-size: 3rem;
    color: ${colors.text};
    &:hover {
      cursor: pointer;
    }
  }
  .copyright {
    color: ${colors.text};
    margin-top: 1rem;
  }
`;
