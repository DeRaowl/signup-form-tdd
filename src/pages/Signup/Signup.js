import React from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useGlobalContext } from "../../context/SignupContext";

import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const {
    input,
    password,
    confirmPassword,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useGlobalContext();

  return (
    <section className="signup-form">
      <Header title="Signup Form" />
      <Input
        type="email"
        value={input}
        onChange={handleEmailChange}
        label="Enter your email: "
        placeholder="eg: rahul@gmail.com"
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        label="Enter your Password: "
        placeholder="******"
      />
      <Input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        label="Re-enter password"
        placeholder="******"
      />
      {/* <Link to="/otp"> */}
      <Button onClick={handleSubmit} />
      {/* </Link> */}
    </section>
  );
}

export default Signup;
