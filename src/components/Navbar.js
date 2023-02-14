import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="header-content">
        <h1>Booking Ark</h1>
        <div className="header-links">
          <Link to="user">User</Link>
          <Link to="admin">Admin</Link>
          <Link to="hotelAdmin">Hotel Admin</Link>
        </div>
      </div>
    </>
  );
}
