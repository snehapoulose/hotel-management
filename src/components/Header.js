import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Header.css";

export default function Header(props) {
  const navigate = useNavigate()
  function backToHomePage(){
   navigate("/")
  }
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-content">
          <button onClick={backToHomePage}>Back</button>
          <h1> Welcome {props.name} Page !! </h1>
        </div>
      </div>
    </div>
  );
}
