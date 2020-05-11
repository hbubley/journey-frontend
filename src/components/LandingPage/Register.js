import React , {useState, useContext} from "react";
import AuthContext from '../../context/auth/authContext'
import {useHistory} from 'react-router-dom'
import { SET_ALERT } from "../../context/types";

export default function Register({toggleIsLoggingIn}) {
  const authContext = useContext(AuthContext);
  const {register} = authContext
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onChange = e => setUser({...user, [e.target.name]: e.target.value})
  console.log(user)

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === ''){
    }
    else{
      register({
        name,
        email,
        password
      })
    
      toggleIsLoggingIn();
    }
  }

  const {name, email, password} = user;
  return (
    <form className="register-container" onSubmit={onSubmit}>
      <h1>It's nice to meet you</h1>
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
     <input type='submit' />
    </form>
  );
}
