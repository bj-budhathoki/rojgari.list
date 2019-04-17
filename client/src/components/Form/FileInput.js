import React from "react";
import styled from "styled-components";
const FileInputContainer = styled.div`
  .file {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 100%;
  }

  .file-custom {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
    padding: 1rem 1rem;
    line-height: 1.5;
    background-color: #fff;
    border: 0.075rem solid #ddd;
    border-radius: 0.25rem;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .file-custom:after {
    content: "Choose file...";
  }
  .file-custom:before {
    position: absolute;
    top: -0.075rem;
    right: -0.075rem;
    bottom: -0.075rem;
    z-index: 6;
    display: block;
    content: "Browse";
    height: auto;
    padding: 1rem 1rem;
    line-height: 1.5;
    color: #555;
    background-color: #eee;
    border: 0.075rem solid #ddd;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  /* Focus */
  .file input:focus ~ .file-custom {
    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9;
  }
`;
const FileInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  id,
  label,
  onChange,
  ...props
}) => {
  // const handleFileChange = event => {
  //   console.log("change", event.currentTarget.files[0].name);
  //   onChange("logo", event.currentTarget.files[0].name);
  // };

  return (
    <>
      <div className="form__label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input {...field} {...props} className="input" />
      {touched[field.name] && errors[field.name] && (
        <div className="error" style={{ color: "red" }}>
          {errors[field.name]}
        </div>
      )}
    </>
  );
};
export default FileInput;
