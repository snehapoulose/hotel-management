import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../Styles/HomePage.css";


export default function Admin() {
  const [adminHotel,setAdminHotel] =useState("");
  const [hotelList,setHotelList] = useState([]);
 
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
  const hotel123 = hotelList.map((hotels)=>(
    <div className="home-container">
      <div className="home-content">
     <p> {hotels.name} </p>
     </div>
     <button  onClick={() => deleteByValue(hotels)}>Delete</button>
     
      </div>
  ))
  const handleChange = (event)=>{
    setAdminHotel(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setHotelList((prevState) => [
      {name:adminHotel},
      ...prevState,
    ]);
    // const update = [
    //   ...hotelList,
    //   {
    //     name:adminHotel
    //   }
    // ];
    // setHotelList(update);
  };
  console.log(adminHotel)

  return (
    <div>
         <Header name = "Admin"/>
         <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Hotel Name" name="hotelName" value={adminHotel} onChange= {handleChange}/>
         <button type="submit">Add</button>
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
          {hotel123}
        </div>
    </div>
  );
}
