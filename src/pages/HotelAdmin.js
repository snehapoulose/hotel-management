import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../Styles/HotelAdmin.css";

export default function HotelAdmin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [hotelAdmin, setHotelAdmin] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setHotelAdmin(data));
  }, []);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
  };

  const validate = () => {
    const errors = {};
    const adminUsername = formData.email;
    const adminPassword = formData.password;
    hotelAdmin.forEach((user) => {
      var paswd = user.username;
      var num = 123;
      paswd += num;
      if (user.email !== adminUsername || paswd !== adminPassword) {
        errors.username = "Invalid credentials";
      } else if (user.email !== adminUsername && paswd !== adminPassword) {
        errors.username = "Invalid credentials";
      } else {
        localStorage.setItem("adminDetails", JSON.stringify(user));
        navigate("/hotelAdminPage");
      }
    });
    return errors;
  };
  return (
    <div>
      <Header name="Hotel Admin" />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div class="form-header">
            <h3> Admin Login Form</h3>
          </div>
          <p>{formErrors.username}</p>
          <label>
            Username:
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email-id"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </label>

          <p>{formErrors.password}</p>
          <label>
            Password:
            <div className="form-group">
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </label>
          <button type="submit" className="form-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
