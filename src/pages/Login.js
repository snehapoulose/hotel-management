import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import users from "../users.json";
import admin from "../admin.json";
import useFetch from "../hooks/useFetch";

export default function Login() {
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();
  const [hotelAdmin] = useFetch("https://jsonplaceholder.typicode.com/users");
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setFormError(validate(formData));
  }
  const validate = () => {
    const errors = {};
    const username = formData.email;
    const password = formData.password;
    const selectedRole = formData.role;
    if (selectedRole === "admin") {
      admin.forEach((admins) => {
        if (admins.email !== username || admins.password !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else if (admins.email !== username && admins.password !== password) {
          errors.password = "Invalid credentials or invalid role";
        } else {
          localStorage.setItem("adminDetails", JSON.stringify(admins));
          navigate("/admin");
        }
      });
      return errors;
    } else if (selectedRole === "hotel admin") {
      hotelAdmin.forEach((user) => {
        var paswd = user.username;
        var num = 123;
        paswd += num;
        if (user.email !== username || paswd !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else if (user.email !== username && paswd !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else {
          localStorage.setItem("hotelAdminDetails", JSON.stringify(user));
          navigate("/hotelAdminPage");
        }
      });
      return errors;
    } else if (selectedRole === "user") {
      users.forEach((user) => {
        if (user.email !== username || user.password !== password) {
          errors.username = "Invalid credentials or invalid role";
        } else if (user.email !== username && user.password !== password) {
          errors.password = "Invalid credentials or invalid role";
        } else {
          localStorage.setItem("usersDetails", JSON.stringify(user));
          navigate("/hotelList");
        }
      });
      return errors;
    } else {
      return errors;
    }
  };
  console.log(formData.role);
  return (
    <div>
      <Header name="Login " />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div class="form-header">
            <h3>Login Form</h3>
          </div>
          <label>
            Select a role
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-input"
            >
              <option value="select role">Select a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="hotel admin">Hotel Admin</option>
            </select>
          </label>
          <p>{formError.username}</p>
          <label>
            Username:
            <div className="form-group">
              <input
                type="text"
                name="email"
                value={formData.email}
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
                name="password"
                value={formData.password}
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
