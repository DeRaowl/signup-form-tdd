import React, { createContext, useContext, useState } from "react";
import validateEmail from "../helpers/validateEmail";

const SignupContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    input: "",
    password: "",
    confirmPassword: "",
    error: { isError: false, msg: "" },
  });

  const handleEmailChange = (event) => {
    setState({ ...state, input: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setState({ ...state, password: event.target.value });
  };

  const handleConfirmPasswordChange = (event) => {
    setState({ ...state, confirmPassword: event.target.value });
  };

  const handleSubmit = () => {
    const { input, password, confirmPassword } = state;
    if (input === "" || password === "") {
      setState({
        ...state,
        error: { isError: true, msg: "Email cannot be empty" },
      });
    }
    if (!validateEmail(input)) {
      setState({
        ...state,
        error: { isError: true, msg: "Enter valid email address" },
      });
    }
    if (password !== confirmPassword) {
      setState({
        ...state,
        error: { isError: true, msg: "Password didn't match" },
      });
    }
    console.log(state);
  };

  return (
    <SignupContext.Provider
      value={{
        ...state,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleSubmit,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SignupContext);
};

export default ContextProvider;
