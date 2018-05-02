import React, { Component } from "react";
import "./css/header.css";
const logo = "{/}";

const Header = () => {
  return (
    <header
      style={{
        height: 40,
        textAlign: "center",
        margin: "auto"
      }}
    >
      <ul>
        <li>
          <a className="active" href="#">
            {logo}
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Cv</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export { Header };
