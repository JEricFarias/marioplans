import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import M from 'materialize-css';

class Navbar extends React.Component {
  componentDidMount() {
    this.initializeSidenav();
  }

  componentWillUpdate() {
    if (this.$sidenav)
      this.$sidenav[0].removeEventListener('click', this.clickHandler);
  }

  componentDidUpdate() {
    this.initializeSidenav();
  }

  initializeSidenav() {
    this.$sidenav = document.querySelectorAll('.sidenav');
    this.sidenavInstance = M.Sidenav.init(this.$sidenav)[0];
    this.clickHandler = () => {
      this.sidenavInstance.close();
    };
    this.$sidenav[0].addEventListener('click', this.clickHandler);
  }

  render() {
    const { auth } = this.props;
    const links = auth.uid ? (
      <SignedInLinks profile={this.props.profile} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <nav className="nav-wrapper grey darken-3">
        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <div className="container">
          <Link to="/" className="brand-logo center hide-on-large-only">
            MarioPlan
          </Link>
          <Link to="/" className="brand-logo show-on-large">
            MarioPlan
          </Link>
          {links}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
