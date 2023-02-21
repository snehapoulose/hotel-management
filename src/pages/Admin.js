import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../Styles/HomePage.css";


export default function Admin() {
  const [hotelList,setHotelList] = useState([]);
  const [adminHotel,setAdminHotel] =useState("")
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setHotelList(data));

  },[]);
  console.log(hotelList)
  const deleteByValue = value => {
    setHotelList(oldValues => {
      return oldValues.filter(hotel => hotel !== value)
    })
  }
  const adminHotelData = hotelList.map((hotels)=>(
    <p>
      {hotels.name}
    </p>
  ))
  const handleChange = (event)=>{
    setAdminHotel(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    setHotelList((prevState) => [
      {  name: adminHotel },
      ...prevState,
    ]);
  }

  return (
    <div>
         <Header name = "Admin"/>
         <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Hotel Name" name="hotelName" value={adminHotel} onChange= {handleChange}/>
         <button type="submit">Add</button>
         </form>
         {adminHotelData}
         <div className="home-container">
         {hotelList.map((hotel) => (
          <div>
            <div className="home-content">
              <h2>{hotel.name}</h2>
            </div>
            <div className="home-content">
              <p>{hotel.address.city}</p>
            </div>
            <button  onClick={() => deleteByValue(hotel)}>Delete</button>
          </div>
        ))}

        </div>
    </div>
  );
}
