import React from "react";

export default function Register() {
  return (
    <form className="register-container">
      <h1>It's nice to meet you</h1>
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        className="form-control"
        name="email"
        placeholder="Email Address"
      />
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
    </form>
  );
}
