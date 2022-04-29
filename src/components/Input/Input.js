import React from "react";
import { useGlobalContext } from "../../context/SignupContext";
import "./Input.css";

function Input({ type, value, onChange, label, placeholder }) {
  const { error } = useGlobalContext();
  console.log(error);
  return (
    <label className="signup__label">
      <p>{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="signup__input"
        style={{ borderColor: `${error.isError ? "red" : "grey"}` }}
      />
    </label>
  );
}
export default Input;
