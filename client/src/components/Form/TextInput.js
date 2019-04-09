import React from "react";
const TextInput = ({
  field: { name, value, onChange },
  form: { touched, errors },
  label,
  ...props
}) => {
  console.log(props);
  return (
    <>
      <div className="form__label">
        <label forHtml="position">{label}</label>
      </div>
      <input {...props} name={name} value={value} />
    </>
  );
};
export default TextInput;
