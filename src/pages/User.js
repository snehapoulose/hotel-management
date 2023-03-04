import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import users from "../users.json";

export default function User() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    setInput((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormError(validate(input));
  }
  const validate = () => {
    const errors = {};
    const username = input.email;
    const password = input.password;
    users.forEach((user) => {
      if (user.email !== username || user.password !== password) {
        errors.username = "Invalid credentials";
      } else if (user.email !== username && user.password !== password) {
        errors.password = "Invalid credentials";
      } else {
        localStorage.setItem("usersDetails", JSON.stringify(user));
        navigate("/hotelList");
      }
    });
    return errors;
  };
  // console.log(users);
  const user12 = users.map((hotels) => {
    return hotels.email;
  });
  console.log(user12);
  return (
    <div>
      <Header name="User Page" />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div class="form-header">
            <h3>Login Form</h3>
          </div>
          <p>{formError.username}</p>
          <label>
            Username:
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email-id"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </label>
          <p>{formError.password}</p>
          <label>
            Password:
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </label>
          <div className="form-group">
            <button type="submit" className="form-button">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
