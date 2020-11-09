import React from 'react';
import NavItem from './NavItem';
import './Nav.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <h2 id="logo">Logo</h2>
        <ul>
          <NavItem name="Home" to="#Hero"/>
          <NavItem name="History" to="#History"/>
          <NavItem name="Countdown" to="#Countdown"/>
          <NavItem name="Make a wish!" to="#Wish"/>
        </ul>
      </nav>
    );
  }
}

export default Navbar;