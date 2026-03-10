import "./button-main.css";
import React from "react";

const ButtonMain = ({ buttonText, customClass = "" }) => {
  return <button className={`button-main bg-color-primary rounded-lg py-3 px-5 text-color-dark font-semibold cursor-pointer ${customClass}`}>{buttonText}</button>;
};

export default ButtonMain;
