import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

export default function AdminLogin() {
    const [input, setInput] = useState({ username: "", password: "" });
    const [formError, setFormError] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const navigate = useNavigate();
  
    function handleChange(event) {
      const name = event.target.name;
      const value = event.target.value
      setInput({ ...input, [name]: value });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
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
      const usernameRegex = /[ERT]{3}\d{4}/
      const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (!values.username) {
        errors.username = "Username is required";
      } else if (!usernameRegex.test(values.username)) {
        errors.username = "This is not a valid username format";
      } else if (!values.password) {
        errors.password = "Password is required";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "This is not a valid password format";
      } else {
        navigate("/admin");
      }
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
