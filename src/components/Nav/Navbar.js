import React from 'react';
import NavItem from './NavItem';
import './Nav.css';

class Navbar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let scrollY = window.scrollY;
    if (scrollY > 200) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false })
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.scrolled !== this.state.scrolled) {
      this.handleScroll()
    }
  }

  render() {
    let navClass = ['Navbar'];
    if (this.state.scrolled) {
      navClass.push('scrolled');
    }
    return (
      <nav className={ navClass.join(" ") }>
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