import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ type, title, path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className={type === "light" ? "button-light" : "button-dark"}
    >
      {title}
    </button>
  );
};

export default Button;
