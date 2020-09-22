import React, { Component } from "react";

const Button = ({ clickHandler }) => {
  return (
    <div>
      <input type="button" onClick={clickHandler} value="EmployeeDetails" />
    </div>
  );
};

export default Button;
