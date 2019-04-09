import React from "react";
import { FormWrapper } from "./FormStyles";
const initialform = {};
const Form = () => {
  return (
    <FormWrapper>
      <div className="form">
        <form>
          <input type="text" />
        </form>
      </div>
      <div>pricing</div>
    </FormWrapper>
  );
};
export default Form;
