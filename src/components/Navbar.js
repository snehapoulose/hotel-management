import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-content">
        <h1>Booking Ark</h1>
        <div className="navbar-links">
          {/* <Link to="user">User</Link>
          <Link to="adminLogin">Admin</Link>
          <Link to="hotelAdmin">Hotel Admin</Link> */}
          <Link to="login">Start Booking Hotels </Link>
        </div>
      </div>
    </>
  );
}
