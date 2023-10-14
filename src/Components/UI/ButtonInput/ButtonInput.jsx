import React from "react";
import "./ButtonInput.scss";

const ButtonInput = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      <img src="\img\HomePage\icons8-поиск.svg"></img>
    </button>
  );
};

export default ButtonInput;
