import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import TextInput from "./TextInput";
import Pricing from "../Pricing";
import Button from "../Button/Button";
import { FormWrapper } from "./FormStyles";
let schema = yup.object().shape({
  position: yup.string().required(),
  name: yup.string().required(),
  website: yup.string().required(),
  url_email: yup.string().required(),
  contact_email: yup.string().required()
});
const JobPostForm = ({ handleSubmit, isSubmitting }) => {
  const handleFormsubmit = e => {
    e.preventDefault();
  };
  return (
    <FormWrapper>
      <form className="form">
        <div className="thejob">
          <h2>The job</h2>
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
              id="location"
              name="location"
              type="text"
              placeholder="f.ex. kathmandu,nepal(leave blank if this job is locaion independent)"
              label="location"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="salary"
              name="salary"
              type="text"
              placeholder="f.ex, 90,000-110,000nrp/month"
              label="salary"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="description"
              name="description"
              type="text"
              placeholder="f.ex, 90,000-110,000nrp/month"
              label="description"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="tags"
              name="tags"
              type="text"
              placeholder="f.ex, 90,000-110,000nrp/month"
              label="tags"
              component={TextInput}
            />
          </div>
        </div>
        <div className="thecompany">
          <h2>The company</h2>
          <div className="form__group">
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="f.ex. abc"
              label="name*"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="website"
              name="website"
              type="text"
              placeholder="f.ex. abc"
              label="website*"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="twitter"
              name="twitter"
              type="text"
              placeholder="f.ex. abc"
              label="twitter"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="url_email"
              name="url_email"
              type="text"
              placeholder="hr@company.com"
              label="URL or E-Mail to Apply*"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="company"
              name="company"
              type="text"
              placeholder="About your Company"
              label="About your Company"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="contact_email"
              name="contact_email"
              type="email"
              placeholder="example@company.com"
              label="Contact E-Mail (just for us)*"
              component={TextInput}
            />
          </div>
          <div className="form__group">
            <Field
              id="logo"
              name="logo"
              type="file"
              label="logo"
              component={TextInput}
            />
          </div>
        </div>
      </form>
      <div>
        <Pricing type="basic" price="free" />
        <Pricing type="featured" price="100" />
        <Button
          disabled={isSubmitting}
          type="submit"
          onClick={handleSubmit}
          bg="#339"
          width={100}
          borderRadius="1rem"
        >
          post your job
        </Button>
      </div>
    </FormWrapper>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    position: "",
    location: "",
    salary: "",
    description: "",
    tags: [],
    name: "",
    website: "",
    twitter: "",
    url_email: "",
    company: "",
    contact_email: "",
    logo: ""
  }),
  handleSubmit: values => {
    console.log("handle submit", values);
  },
  validationSchema: schema
})(JobPostForm);
