import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
// import Footer from "../components/Footer";
import "../Styles/Admin.css";

export default function Admin() {
  const [adminHotel, setAdminHotel] = useState("");
  const [hotelList, setHotelList] = useState([]);
  const navigate = useNavigate();

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
  function backToHomePage() {
    navigate("/");
  }
  const handleChange = (event) => {
    setAdminHotel(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setHotelList((prevState) => [{ name: adminHotel }, ...prevState]);
    if (adminHotel.trim().length !== 0) {
      setHotelList((prevState) => [{ name: adminHotel }, ...prevState]);
      setAdminHotel('')
    } else {
      alert("Please enter the hotel name");
    }
  };
  console.log(adminHotel);

  return (
    <div>
      <button onClick={backToHomePage} className="header-logout">
        Log Out
      </button>
      <Link to = "/userList" className="user-list">Users List</Link>
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
      <div className="home-container">
        {hotelData}
      </div>
      {/* <Footer/> */}
    </div>
  );
}
