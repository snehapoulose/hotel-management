import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";

export default function HotelList() {
  const [hotelList, setHotelList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setHotelList(data));
  }, []);
  return (
    <div>
      <Header name="Hotel List" />
      <div className="home-container">
        {hotelList.map((hotel) => (
          <div>
            <div className="home-content">
              <h2>{hotel.name}</h2>
            </div>
            <div className="home-content">
              <p>{hotel.address.city}</p>
            </div>
            <div className="home-content">
              <p>{hotel.phone}</p>
            </div>
            <div className="home-content">
              <p>{hotel.website}</p>
            </div>
            <div className="home-content">
            <Link >Book Hotel</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
