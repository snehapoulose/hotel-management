import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Admin.css";
// import LogOutPage from "../components/LogOutPage";

export default function Admin() {
  const [adminHotel, setAdminHotel] = useState({
    name: "",
    phone: "",
    email: "",
  });
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
      <div className="home-contents">
        <p> {hotels.name} </p>
      </div>
      <div className="home-contents">
        <p>{hotels.phone}</p>
      </div>
      <div className="home-contents">
        <p>{hotels.email}</p>
      </div>
      <button onClick={() => deleteByValue(hotels)} className="delete-button">
        Delete
      </button>
    </div>
  ));
  function backToHomePage() {
    navigate("/");
    localStorage.removeItem("adminDetails")
    localStorage.removeItem("usersDetails")
  }
  const handleChange = (event) => {
    // setAdminHotel(event.target.value);
    setAdminHotel((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setHotelList((prevState) => [
      {
        name: adminHotel.name,
        phone: adminHotel.phone,
        email: adminHotel.email,
      },
      ...prevState,
    ]);
    setAdminHotel({
      name:"",
      phone:"",
      email:""
    })
    // if (adminHotel.trim().length !== 0) {
    //   setHotelList((prevState) => [{ name: adminHotel.name,phone:adminHotel.phone }, ...prevState]);
    //   setAdminHotel('')
    // } else {
    //   alert("Please enter the hotel name");
    // }
  };
  console.log(adminHotel);

  return (
    <div>
      <button onClick={backToHomePage} className="header-logout">
        Log Out
      </button>
      {/* <LogOutPage/> */}
      <Link to="/userList" className="user-list">
        Users List
      </Link>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Hotel Name"
          name="name"
          value={adminHotel.name}
          onChange={handleChange}
          className="add-hotel"
        />
        <input
          type="text"
          placeholder="Hotel Phone"
          name="phone"
          value={adminHotel.phone}
          onChange={handleChange}
          className="add-hotel"
        />
        <input
          type="email"
          placeholder="Hotel Email"
          name="email"
          value={adminHotel.email}
          onChange={handleChange}
          className="add-hotel"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <div className="home-container">{hotelData}</div>
    </div>
  );
}
