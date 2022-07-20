import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import { logoutUser } from "../actions/auth";
import dp from '../helpers/img-1.png'

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
  };
  render() {
    const { auth } = this.props;
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://th.bing.com/th/id/OIP.tkezL3Y1TkpZM3IxjGfpkwHaHa?pid=ImgDet&w=1596&h=1596&rs=1"
              alt="logo"
              width="50px"
              height="50px"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>Udgam</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>Udgam</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          {true && (
            <div className="user">
              <Link to="/settings">
                <img
                  src={dp}
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}
          <div className="nav-links">
            <ul>
              {!auth.isLoggedin && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}
              {auth.isLoggedin && <li onClick={this.logOut}>Log out</li>}
              {!auth.isLoggedin && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
