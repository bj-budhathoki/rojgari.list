import React from "react";
import Select from "react-select";

const options = [
  { value: "React", label: "React" },
  { value: "React native", label: "React native" },
  { value: "javascript", label: "javascript" },
  { value: "Html", label: "Html" },
  { value: "css3", label: "css3" },
  { value: "node", label: "node" }
];

const SelectInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  id,
  label,
  onChange,
  ...props
}) => {
  const handleChange = value => {
    onChange("tags", value);
  };
  return (
    <>
      <div className="form__label">
        <label htmlFor={id}>{label}</label>
      </div>
      <Select
        {...props}
        isMulti={true}
        options={options}
        onChange={handleChange}
        className="basic-multi-select"
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error" style={{ color: "red" }}>
          {errors[field.name]}
        </div>
      )}
    </>
  );
};
SelectInput.defaultProps = {
  label: "tags"
};
export default SelectInput;
