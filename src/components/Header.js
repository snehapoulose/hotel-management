import React from "react";
import "../Styles/Header.css";

export default function Header(props) {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-content">
          <h1> Welcome {props.name} Page !! </h1>
        </div>
      </div>
    </div>
  );
}
