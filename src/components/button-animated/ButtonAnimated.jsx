import "./button-animated.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonAnimated = () => {
  return (
    <button className="button-animated flex items-center py-4 px-7 bg-color-dark rounded-full border-0 cursor-pointer overflow-hidden relative">
      <span className="block text-nowrap capitalize relative z-10 font-semibold">Free Potential Analysis</span>
      <FontAwesomeIcon icon={faArrowRight} className="ms-2 relative z-10" />
    </button>
  );
};

export default ButtonAnimated;
