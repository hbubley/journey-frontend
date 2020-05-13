import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import StepContext from '../context/user-steps/stepContext';

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const stepContext = useContext(StepContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearSteps } = stepContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    // clearSteps();
  };

  const authLinks = (
    <>
        <a className="item" onClick={onLogout} href='/'>
          <span className='logout-span'>Logout</span>
        </a>
        <Link className="item" to='/userdash'>Dashboard</Link>
    </>
  );

  const guestLinks = (
    <>
      {/* <li>
        <Link to='/'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li> */}
    </>
  );

  return (
    <div className='nav-container'>
      {/* <h1>
        <Link to='/'>
          {title}
        </Link>
      </h1> */}
      <nav className='nav-list'>{isAuthenticated ? authLinks : guestLinks}</nav>
    </div>
  );
};

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired
// };

// Navbar.defaultProps = {
//   title: 'The Jouney'
// };

export default Navbar;