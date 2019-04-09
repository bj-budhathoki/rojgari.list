import styled from "styled-components";
import { corols } from "../../themes";

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2rem;
  .form {
    background: #ffff;
    box-shadow: 0 0 0.2rem 0.2rem #f1f1f1;
    padding: 1rem 3rem;
    &__group {
      margin-top: 2rem;
    }
    &__label {
      text-transform: capitalize;
      font-weight: 500;
    }
    input {
      width: 100%;
      height: 4rem;
      border-radius: 0.5rem;
      border: 0.2rem solid #ccc;
      padding: 0 1rem;
      margin-top: 0.5rem;
      outline: none;
      ::-webkit-input-placeholder {
        color: #999;
        font-weight: bold;
      }
    }
  }
`;
