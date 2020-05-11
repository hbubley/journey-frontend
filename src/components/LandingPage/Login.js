import React, {useState} from "react";
import {Link} from 'react-router-dom'
export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChange = event => setUser({...user, [event.target.name]: event.target.value})

  const onSubmit = event => {
    event.preventdefault();
    console.log('Login submit')
  }

  const {email, password} = user;


  return (
    <form className="login-container">
      <h1>It's nice to see you again</h1>
      <input
        type="text"
        className="form-control"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email Address"
      />
      <input
        type="text"
        className="form-control"
        name="password"
        value={password}
        onChange={onChange}
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
