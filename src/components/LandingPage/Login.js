import React from "react";
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <form className="login-container">
      <h1>It's nice to see you again</h1>
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="Email Address"
      />
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
      />
      <button type="submit">
        <Link to='/userdash'>
        Login
       </Link>
      </button>
    </form>
  );
}
