import React from 'react'
import { useNavigate } from 'react-router';
export default function LogOutPage() {
  const navigate = useNavigate();

  function backToHomePage() {
    navigate("/");
  }
  
  return (
    <div>
          <button onClick={backToHomePage} className="header-logout">
        Log Out
      </button>
    </div>
  )
}
