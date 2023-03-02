import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "../Styles/HomePage.css";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
// import Footer from "./Footer";

export default function HomePage() {
  const [hotelData, setHotelData] = useState([]);
  const [searchHotel, setSearchHotel] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setHotelData(data));
  }, []);
  console.log(searchHotel);
  return (
    <div>
      <Navbar />
      <div className="home-header">
        <input
          type="search"
          placeholder="Search hotel name or location"
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
              hotel.name.toLowerCase().includes(searchHotel.toLowerCase()) ||
              hotel.address.city
                .toLowerCase()
                .includes(searchHotel.toLowerCase())
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
                <p>
                  <GoLocation /> {hotel.address.city}
                </p>
              </div>
              <div className="home-content">
                <p>
                  <BsFillTelephoneFill /> {hotel.phone}
                </p>
              </div>
              <div className="home-content">
                <p>{hotel.website}</p>
              </div>
            </div>
          ))}
      </div>
      {/* <Footer/> */}
    </div>
  );
}
