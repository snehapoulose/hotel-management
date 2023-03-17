import React from "react";
import LogOutPage from "../components/LogOutPage";
import "../Styles/HotelInvoice.css";

export default function HotelInvoice() {
  const hotelReceipt = JSON.parse(localStorage.getItem("hotelDetails"));
  return (
    <>
      <LogOutPage/>
      <div className="hotel-invoice">
        <h1>HOTEL INVOICE</h1>
        <p>Hotel Name :{hotelReceipt.name}</p>
        <p>
          Address : {hotelReceipt.address.street} {hotelReceipt.address.suite}{" "}
        </p>
        <p>{hotelReceipt.address.city}</p>
        <p>ZipCode : {hotelReceipt.address.zipcode}</p>
        <p>Phone : {hotelReceipt.phone}</p>
        <p>E-mail id : {hotelReceipt.email}</p>
      </div>
    </>
  );
}
