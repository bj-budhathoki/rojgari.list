import React from "react";
const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  id,
  label,
  ...props
}) => {
  return (
    <>
      <div className="form__label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error" style={{ color: "red" }}>
          {errors[field.name]}
        </div>
      )}
    </>
  );
};
export default TextInput;
