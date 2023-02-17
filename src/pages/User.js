import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // setInput((values) => ({ ...values, [name]: value }));
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // alert(JSON.stringify(input, null, 2));
    setFormError(validate(input));
    setSubmit(true);
  }
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(input);
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!values.email) {
      errors.email = "Email -id is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "This is not a valid password format";
    } else {
      navigate("/hotelList");
    }
    return errors;
  };
  // console.log(input);
  return (
    <div>
      <Header name="User Page" />
      {/* {Object.keys(formError).length === 0 && isSubmit ?(
        <div>
          Signed In successful
        </div>
        // <Navigate to="/admin"/>
      ):(
        <pre>{JSON.stringify(input,undefined,2)}</pre>
      )
      } */}

      <form onSubmit={handleSubmit}>
        <p>{formError.email}</p>
        <label>
          Username:
          <input
            type="email"
            placeholder="Enter your email-id"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </label>
        <p>{formError.password}</p>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
}
