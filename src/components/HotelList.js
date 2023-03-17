import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";

export default function HotelList() {
  const [date, setDate] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const [hotelList] = useFetch("https://jsonplaceholder.typicode.com/users");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    const current = new Date();
    console.log(current);
    setDate(e.target.value);
  };
  console.log(date);
  const displayUsers = hotelList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((hotel) => {
      return (
        <div>
          <div className="home-content">
            <h2>{hotel.name}</h2>
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
          <div className="home-content">
            <label>
              <small> Booking Date: </small>
              <input type="date" onChange={handleChange} ref={dateInputRef} />
            </label>
          </div>
          <div className="home-content">
            <Link to={`/hotelInvoice/${hotel.id}`}>
              <button
                onClick={() => {
                  localStorage.setItem("hotelDetails", JSON.stringify(hotel));
                  console.log(hotel.name);
                }}
                className="hotel-invoice-button"
              >
                Book Hotel
              </button>
            </Link>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(hotelList.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <Header name="Hotel List" />
      <div className="home-container">{displayUsers}</div>
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
