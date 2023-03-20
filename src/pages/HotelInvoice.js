import React from "react";
import Header from "../components/Header";
import "../Styles/HotelInvoice.css";

export default function HotelInvoice() {
  const hotelReceipt = JSON.parse(localStorage.getItem("hotelDetails"));
  return (
    <>
      <Header name="Hotel Invoice" />
      <div className="hotel-invoice">
        <p>Hotel Name :{hotelReceipt.name}</p>
        <p>
          Address : {hotelReceipt.address.street} {hotelReceipt.address.suite}
        </p>
        <p>{hotelReceipt.address.city}</p>
        <p>ZipCode : {hotelReceipt.address.zipcode}</p>
        <p>Phone : {hotelReceipt.phone}</p>
        <p>E-mail id : {hotelReceipt.email}</p>
      </div>
    </>
  );
}
