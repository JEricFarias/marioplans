import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  const menuLinks = (
    <div>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </div>
  );
  return (
    <div>
      <ul className="right hide-on-med-and-down">{menuLinks}</ul>

      <ul className="sidenav" id="mobile-menu">
        {menuLinks}
      </ul>
    </div>
  );
};

export default SignedOutLinks;
