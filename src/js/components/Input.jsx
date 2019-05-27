import React from "react";
import "../../styles/components/input.scss";

const Input = ({ label, type, id, value, className, handleChange }) => (
  <div className="input-component">
    <label>{label}
      <input
        type={type}
        className={className}
        id={id}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
    <span>{value}</span>
  </div>
);

export default Input;