import React, { useState } from "react";
import { FormWrapper } from "./FormStyles";
import { Formik, Field } from "formik";
import TextInput from "./TextInput";
const initialState = {
  position: ""
};
const Form = () => {
  const [state, setState] = useState(initialState);
  return (
    <FormWrapper>
      <Formik>
        {props => {
          return (
            <form className="form">
              <div className="form__group">
                <Field
                  component={TextInput}
                  type="text"
                  placeholder="f.ex. Full Stack developer"
                  name="position"
                  label="position"
                />
              </div>
            </form>
          );
        }}
      </Formik>
      <div>pricing</div>
    </FormWrapper>
  );
};
export default Form;
