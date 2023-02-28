import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";

export default function Header(props) {
  const navigate = useNavigate();
  function backToHomePage() {
    navigate("/");
  }
  return (
    <div>
      <div className="header-wrapper">
        <button onClick={backToHomePage} className="header-back">
          Back
        </button>
        <div className="header-content">
          <h1> Welcome {props.name} Page !! </h1>
        </div>
      </div>
    </div>
  );
}
