import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import users from "../users.json"
// import Footer from "../components/Footer";

export default function User() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({});
  // const [isSubmit, setSubmit] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    // const name = event.target.name;
    // const value = event.target.value;
    // setInput({ ...input, [name]: value });
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
    // setSubmit(true);
  }
  // useEffect(() => {
  //   console.log(formError);
  //   if (Object.keys(formError).length === 0 && isSubmit) {
  //     console.log(input);
  //   }
  // }, [formError]);
  // const validate = (values) => {
  //   const errors = {};
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  //   if (!values.email) {
  //     errors.email = "Email -id is required";
  //   } else if (!emailRegex.test(values.email)) {
  //     errors.email = "This is not a valid email format";
  //   } else if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (!passwordRegex.test(values.password)) {
  //     errors.password = "This is not a valid password format";
  //   } else {
  //     navigate("/hotelList");
  //   }
  //   return errors;
  // };
  // console.log(input);
  const validate = () => {
    const errors ={};
    const username = input.email;
    const password = input.password;
    users.forEach((user)=>{
      if(user.email !== username || user.password !== password){
        errors.username = "Invalid credentials";
      } else if (user.email !== username && user.password !== password) {
        errors.password = "Invalid credentials";
      } else {
        localStorage.setItem("usersDetails", JSON.stringify(user));
        navigate("/hotelList")

      }

    });
    return errors;
  };
  // console.log(users);
  const user12 = users.map((hotels)=>{
    return(
      hotels.email
    )
  })
  console.log(user12)
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
      {/* <Footer/> */}
    </div>
  );
}
