import React from "react";
import "./MyInput.css";


function MyInput({ name, type, placeholder, label }) {
    return (
      <div className="my-input">
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} placeholder={placeholder} />
      </div>
    );
  }
  
  export default MyInput;