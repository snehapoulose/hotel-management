import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Hotel() {
  const adminStore = JSON.parse(localStorage.getItem("adminDetails"));
  const navigate = useNavigate()
  function backToHomePage(){
    navigate("/")
  }
  return (
    <>
       <button onClick={backToHomePage} className ="header-back">Back</button>
        <div>
          <h1>Welcome {adminStore.name} Page</h1>
        </div>
    </>
  )
}
