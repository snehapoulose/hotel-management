import  React from 'react'
import {useNavigate} from 'react-router-dom';
import userList from '../userList.json'
import '../Styles/HotelAdmin.css'
// import Footer from '../components/Footer';

export default function Hotel() {
  const adminStore = JSON.parse(localStorage.getItem("adminDetails"));
  const navigate = useNavigate()
  const usersList = userList.filter((users)=>{
    if(users.hotelId === adminStore.id) {
      return users;
    }
  })
  function backToHomePage(){
    navigate("/")
  }
  console.log(usersList)
  return (
    <>
       <button onClick={backToHomePage} className ="header-logout">Log Out</button>
        <div>
          <h1>Welcome {adminStore.name} 's Page</h1>
          <h2>List of booked users:</h2>
          <div className='tables-data'>
            <table>
            <tr>
                <th>User ID</th>
                <th>Name</th>
            </tr>
            {usersList.map((users)=>{
              return(
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                </tr>
              )
            })}
          </table>
          </div>
          {/* <Footer/> */}
        </div>
    </>
  )
}
