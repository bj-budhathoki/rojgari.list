import styled from "styled-components";
export const PricingContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 0.2rem 0.3rem #f1f1f1;
  border-radius: 1.5rem;
  padding: 1rem;
  margin: 0 0 2rem 0;
  .benifits {
    background: ${props => (props.type === "basic" ? "#9999" : "")};
    padding: 2rem;
    border-radius: 1.5rem;
    ul {
      list-style: none;
      margin-top: 1rem;
      li {
        margin-top: 0.5rem;
      }
    }
  }
  .price__type {
    display: flex;
    /* justify-content: center; */
    .price {
      font-size: 2rem;
      font-weight: 600;
      text-transform: capitalize;
      margin-right: 1.5rem;
      color: #399;
    }
    .type {
      font-size: 2rem;
      font-weight: 600;
      text-transform: capitalize;
      margin-right: 1.5rem;
    }
  }
`;
