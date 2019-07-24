import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  const menuLinks = (
    <div>
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.logout}>Log Out</a>
      </li>
    </div>
  );
  return (
    <div>
      <div className="right">
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.abbreviation}
        </NavLink>
      </div>
      
      <ul className="right hide-on-med-and-down">{menuLinks}</ul>

      <ul className="sidenav" id="mobile-menu">
        {menuLinks}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
