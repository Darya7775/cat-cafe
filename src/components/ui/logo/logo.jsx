import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <Link to="/" className="logo__link">
      <img src={logo} alt="логотип" />
      <span className="logo__text">Котокафе</span>
    </Link>
  );
}

export default Logo;
