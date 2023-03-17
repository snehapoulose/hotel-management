import React from "react";
import userList from "../userList.json";
import "../Styles/HotelAdmin.css";
import LogOutPage from "../components/LogOutPage";

export default function Hotel() {
  const adminStore = JSON.parse(localStorage.getItem("hotelAdminDetails"));
  const usersList = userList.filter((users) => {
    if (users.hotelId === adminStore.id) {
      return users;
    }
  });
  console.log(usersList);
  return (
    <>
      <LogOutPage/>
      <div>
        <h1>Welcome {adminStore.name} 's Page</h1>
        <h2>List of booked users:</h2>
        <div className="tables-data">
          <table>
            <tr>
              <th>User ID</th>
              <th>Name</th>
            </tr>
            {usersList.map((users) => {
              return (
                <tr>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
