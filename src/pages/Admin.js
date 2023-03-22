import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Admin.css";
import ReactPaginate from "react-paginate";
import LogOutPage from "../components/LogOutPage";

export default function Admin() {
  const [adminHotel, setAdminHotel] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [hotelList, setHotelList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;

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
  const hotelData = hotelList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((hotel) => {
      return (
        <div>
          <div className="home-contents">
            <h2>{hotel.name}</h2>
          </div>
          <div className="home-contents">
            <p> {hotel.phone}</p>
          </div>
          <div className="home-contents">
            <p>{hotel.email}</p>
          </div>
          <button
            onClick={() => deleteByValue(hotel)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      );
    });
  const pageCount = Math.ceil(hotelList.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleChange = (event) => {
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
      name: "",
      phone: "",
      email: "",
    });
  };
  console.log(adminHotel);

  return (
    <div>
      <LogOutPage />
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
          required
        />
        <input
          type="number"
          placeholder="Hotel Phone"
          name="phone"
          value={adminHotel.phone}
          onChange={handleChange}
          className="add-hotel"
          required
        />
        <input
          type="email"
          placeholder="Hotel Email"
          name="email"
          value={adminHotel.email}
          onChange={handleChange}
          className="add-hotel"
          required
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <div className="home-container">{hotelData}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
