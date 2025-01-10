import React from "react";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import "./LoginForm.css"; // Подключаем стили

function LoginForm() {
    
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <MyInput
        name="login"
        type="text"
        placeholder="Enter your login"
        label="Login"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <MyButton className="button" type="submit" text="Submit💥"></MyButton>
    </form>
  );
}

export default LoginForm;