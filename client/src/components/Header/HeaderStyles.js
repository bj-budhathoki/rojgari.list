import styled from "styled-components";
import { colors } from "../../themes";
export const HeaderWrapper = styled.header`
  background: ${colors.primary};
  height: 60vh;
  display: grid;
  grid-template-rows: 1fr 3fr;
  padding: 0 10rem;
`;
export const HeaderContent = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeaderTitle = styled.h1`
  color: ${colors.sText};
  font-size: 4.5rem;
  font-weight: bold;
  span {
    color: ${colors.text};
    border-top: 1px solid ${colors.text};
    border-bottom: 1px solid ${colors.text};
  }
`;
export const HeaderSlug = styled.p`
  color: ${colors.text};
  font-weight: bold;
`;
