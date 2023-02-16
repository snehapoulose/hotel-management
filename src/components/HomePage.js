import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "../Styles/HomePage.css";

export default function HomePage() {
  const [hotelData, setHotelData] = useState([]);
  const [searchHotel, setSearchHotel] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setHotelData(data));
  }, []);
  console.log(hotelData);
  console.log(searchHotel);
  return (
    <div>
      <Navbar />
      <div className="home-header">
        <input
          type="search"
          placeholder="Search hotel name"
          className="search-box"
          onChange={(event) => setSearchHotel(event.target.value)}
        />
      </div>
      <div className="home-container">
        {hotelData
          .filter((hotel) => {
            if (searchHotel === "") {
              return hotel;
            } else if (
              hotel.name.toLowerCase().includes(searchHotel.toLowerCase())
            ) {
              return hotel;
            }
          })
          .map((hotel) => (
            <div>
              <div className="home-content">
                <h2> {hotel.name}</h2>
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
            </div>
          ))}
      </div>
    </div>
  );
}
