import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import admin from'../admin.json';
import Header from "../components/Header";

export default function AdminLogin() {
    const [input, setInput] = useState({ username: "", password: "" });
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
    const validate = ()=>{
      const errors ={};
      const username = input.username;
      const password = input.password;
      admin.forEach((admins)=>{
        if(admins.email !== username || admins.password !== password){
          errors.username= "Invalid credentials";
        } else if (admins.email !== username && admins.password !== password) {
          errors.password = "Invalid credentials";
        } else {
          navigate("/admin")
        }
      });
      return errors;
    };
  return (
    <div>
       <Header name="Admin" />
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
                type="text"
                placeholder="Enter your username"
                name="username"
                value={input.username}
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
  )
}
