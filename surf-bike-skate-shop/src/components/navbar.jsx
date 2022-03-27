import React, { Component } from 'react';
import logo from '../logo_transparent.png';
import './navbar.css';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" height="80px" />
        <ul className="nav-links">
          <li className="nav-link shop-link">
            <a className="link" href="">
              Shop
            </a>
          </li>
          <li className="nav-link about-link">
            <a className="link" href="">
              About
            </a>
          </li>
          <li className="nav-link contact-link">
            <a className="link" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
