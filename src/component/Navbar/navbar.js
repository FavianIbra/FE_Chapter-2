import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../js/script';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <a href="#home">Duar</a>
            </div>
            <ul className="menu">
              <li>
                <Link to={"/"} className="active">Home</Link>
              </li>
              <li>
                <Link to={"/#about"} className="">About</Link>
              </li>
              <li>
                <Link to={"/#team"} className="">Team</Link>
              </li>
              <li>
                <Link to={"/product"} className="">product</Link>
              </li>
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
