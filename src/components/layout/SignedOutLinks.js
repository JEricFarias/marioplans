import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/singup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/singin">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
