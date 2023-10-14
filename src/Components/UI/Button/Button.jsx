import React from "react";
import "./Button.scss";

const Button = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps} className="btn">
      {children}
    </button>
  );
};

export default Button;
