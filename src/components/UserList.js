import React from 'react'
// import userList from '../userList.json'
import '../Styles/userList.css'
import "../Styles/HotelAdmin.css";
import { useNavigate } from 'react-router-dom'


export default function UserList() {
    const navigate = useNavigate();
    const getUserDetails = JSON.parse(localStorage.getItem("usersDetails"));
    const getHotelDetails = JSON.parse(localStorage.getItem("hotelDetails"));
    function backToAdmin(){
        navigate("/admin")
      }
  return (
    <div>
          <button onClick={backToAdmin} className ="header-back">Back</button>
          <div className='tables-data'>
        <table>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Hotel Name</th>
            </tr>
        <tr>
          <td>{getUserDetails.id}</td>
          <td>{getUserDetails.first_name} {getUserDetails.last_name}</td>
          <td>{getHotelDetails.name}</td>
        </tr>
         </table>
    </div>
    </div>
  )
}
