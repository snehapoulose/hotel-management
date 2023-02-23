import React from "react";
import "../Styles/HotelInvoice.css";
import {useNavigate} from 'react-router-dom';

export default function HotelInvoice() {
  const hotelReceipt = JSON.parse(localStorage.getItem("hotelDetails"));
  const navigate = useNavigate()
  function backToHotelList(){
    navigate("/hotelList")
  }
  return (
    <>
        <button onClick={backToHotelList} className ="header-back">Back</button>
      <div className="hotel-invoice">
        <h1>
          HOTEL INVOICE
        </h1>
        <p>Hotel Name :{hotelReceipt.name}</p>
        <p>Address : {hotelReceipt.address.street} {hotelReceipt.address.suite} </p>
        <p>{hotelReceipt.address.city}</p>
        <p>ZipCode : {hotelReceipt.address.zipcode}</p>
        <p>Phone : {hotelReceipt.phone}</p>
        <p>E-mail id : {hotelReceipt.email}</p>
      </div>
    </>
  );
}
