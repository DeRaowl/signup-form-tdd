import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return (
    <button className="sign-in" onClick={onClick}>
      Sign in
    </button>
  );
}

export default Button;
