import React from "react";
import {Link} from "react-router-dom"

function Navbar(props) {
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
        <div className="user">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
          <span>Udgam</span>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/logout">Log out</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
