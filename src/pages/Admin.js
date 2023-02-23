import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../Styles/Admin.css";

export default function Admin() {
  const [adminHotel, setAdminHotel] = useState("");
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setHotelList(data));
  }, []);
  console.log(hotelList);
  const deleteByValue = (value) => {
    setHotelList((hotelValues) => {
      return hotelValues.filter((hotel) => hotel !== value);
    });
  };
  const hotelData = hotelList.map((hotels) => (
    <div>
      <div className="container">
        <p> {hotels.name} </p>
        <button onClick={() => deleteByValue(hotels)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  ));
  const handleChange = (event) => {
    setAdminHotel(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setHotelList((prevState) => [{ name: adminHotel }, ...prevState]);
    if(adminHotel.trim().length !== 0) {
      setHotelList((prevState) => [{ name: adminHotel }, ...prevState]);
    }
    else {
      alert("Please enter the hotel name")
    }
  };
  console.log(adminHotel);

  return (
    <div>
      <Header name="Admin" />
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Hotel Name"
          name="hotelName"
          value={adminHotel}
          onChange={handleChange}
          className="add-hotel"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      {/* {adminHotelData} */}
      <div className="home-container">
        {/* {hotelList.map((hotel) => (
          <div>
            <div className="home-content">
              <h2>{hotel.name}</h2>
            </div>
            <div className="home-content">
              <p>{hotel.address.city}</p>
            </div>
            <button  onClick={() => deleteByValue(hotel)}>Delete</button>
          </div>
        ))} */}
        {hotelData}
      </div>
    </div>
  );
}
