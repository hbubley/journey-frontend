import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import Alerts from "./Alerts";

export default function Register({ toggleIsRegistering }) {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/userdash"); 
    }
    if (error === "This email is already in use") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  console.log(user);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all information", "danger");
    } else if (password.length < 4) {
      setAlert("Please make your password at least 4 characters", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  const { name, email, password } = user;
  return (
    <>
    <form className="register-container" onSubmit={onSubmit}>
    <button onClick={() => toggleIsRegistering()} className="back-button">Back</button>
      <h1>It's nice to meet you</h1>
      <Alerts />
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="name"
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email Address"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />
      <input type="submit" className="submit-button" />
    </form>
  </>
  );
}
