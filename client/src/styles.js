import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*,*::after,*::before
{
box-sizing:inherit;
margin:0;
padding:0;
}
html
{

  font-size:62.5%
}
body {
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  background:#F8F8F8;
  }
`;
