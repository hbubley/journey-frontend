import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import Alerts from "./Alerts";

export default function Login({toggleIsLoggingIn}) {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/userdash"); 
    }
    if (error === "Sorry, we could not find anyone by this email/password") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated]);
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  console.log(user);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all information", "danger");
    } else if (password.length < 4) {
      setAlert("Please make your password at least 4 characters", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  }

  const {email, password} = user;


  return (
    <form className="login-container" onSubmit={onSubmit}>
      <h1>Nice to see you again</h1>
      <Alerts />
      <input
        type="text"
        className="form-control"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email Address"
      />
      <input
        type="password"
        className="form-control"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />
      <input type="submit" className="submit-button"/>
      <button onClick={() => toggleIsLoggingIn()} className="back-button">Back</button>
    </form>
  );
}
