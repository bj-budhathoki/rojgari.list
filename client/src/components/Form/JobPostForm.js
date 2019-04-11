import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import TextInput from "./TextInput";
import { FormWrapper } from "./FormStyles";
let schema = yup.object().shape({
  position: yup.string().required()
});
const JobPostForm = ({ handleSubmit }) => {
  return (
    <FormWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <Field
            id="position"
            name="position"
            type="text"
            placeholder="f.ex. Full Stach developer"
            label="position"
            component={TextInput}
          />
        </div>
        <div className="form__group">
          <Field
            id="position"
            name="position"
            type="text"
            placeholder="f.ex. Full Stach developer"
            label="position"
            component={TextInput}
          />
        </div>
      </form>
    </FormWrapper>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    position: ""
  }),
  handleSubmit: values => {
    console.log("handle submit", values);
  },
  validationSchema: schema
})(JobPostForm);
