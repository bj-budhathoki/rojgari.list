import styled from "styled-components";
import { corols } from "../../themes";

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2rem;
  .form {
    .thejob,
    .thecompany {
      background: #ffff;
      padding: 1rem 3rem 3rem 3rem;
      box-shadow: 0 0 0.3rem 0.4rem #f1f1f1;
      margin-bottom: 2rem;
      border-radius: 1.5rem;
    }
    &__group {
      margin-top: 2rem;
      input[type="file"] {
      }
    }
    &__label {
      text-transform: capitalize;
      font-weight: 500;
    }
    .input {
      width: 100%;
      border-radius: 0.5rem;
      border: 0.2rem solid #ccc;
      padding: 1rem 1rem;
      margin-top: 0.5rem;
      outline: none;
      ::-webkit-input-placeholder {
        color: #999;
        font-weight: bold;
      }
    }
  }
`;
