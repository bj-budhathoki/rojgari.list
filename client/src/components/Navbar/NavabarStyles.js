import styled from "styled-components";
import { colors } from "../../themes";
export const Nav = styled.nav`
  color: ${colors.text};
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    a {
      text-decoration: none;
      color: ${props => (props.color ? props.color : colors.text)};
    }
  }
`;
