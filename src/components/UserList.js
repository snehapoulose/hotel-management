import React from 'react'
import userList from '../userList.json'
import '../Styles/userList.css'
import { useNavigate } from 'react-router-dom'

export default function UserList() {
    const navigate = useNavigate();

    function backToAdmin(){
        navigate("/admin")
      }
  return (
    <div>
          <button onClick={backToAdmin} className ="header-back">Back</button>
          <div className='table-data'>
        <table>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Hotel Name</th>
            </tr>
       
       {userList.map((data, key) => {
          return (
            <tr key={key}>
             <td> {data.id}</td>
             <td>{data.name}</td>
             <td>{data.hotelName}</td>
            </tr>
          );
         
        })}
         </table>
    </div>
    </div>
  )
}
