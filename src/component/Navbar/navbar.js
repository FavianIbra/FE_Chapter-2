import React, { Component } from 'react';
import { MenuItem } from './itemmenu';
import './style.css'

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
              {MenuItem.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
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
