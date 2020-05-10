import React from "react";

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
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Login
      </button>
    </form>
  );
}