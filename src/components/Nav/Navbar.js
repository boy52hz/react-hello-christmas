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
          <NavItem name="Content 2" to="#content2"/>
          <NavItem name="Content 3" to="#content3"/>
        </ul>
      </nav>
    );
  }
}

export default Navbar;