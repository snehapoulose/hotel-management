import React from "react";
// import { useParams } from 'react-router-dom';
import "../Styles/HotelInvoice.css";
import {TbFileInvoice} from "react-icons/tb"
import {useNavigate} from 'react-router-dom';

export default function HotelInvoice() {
  // const {id} =useParams()
  // const [hotel,setHotel]=useState([]);

  // useEffect(()=>{
  //     fetch('https://jsonplaceholder.typicode.com/users' + id)
  //     .then((res)=>res.json())
  //     .then((data)=>setHotel(data));
  // },[])
  const hotelReceipt = JSON.parse(localStorage.getItem("hotelDetails"));
  const navigate = useNavigate()
  function backToHotelList(){
    navigate("/hotelList")
  }
  return (
    <>
      {/* {hotel.map((hotel)=>(
            <div>
                <p></p>
            </div>
        ))} */}
        <button onClick={backToHotelList}>Back</button>
      <div className="hotel-invoice">
        <h1>
          <TbFileInvoice className='invoice-icon'/>
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
