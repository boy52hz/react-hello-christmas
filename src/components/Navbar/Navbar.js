import React from 'react'
import Scrollspy from 'react-scrollspy';
import HamburgerMenu from 'react-hamburger-menu';
import './Navbar.scss';

import Logo from '../../static/img/LOGO.png';

class Navbar extends React.Component {
  state = {
    open: false,
    scrolled: false
  }

  handleClick() {
    let open = this.state.open;
    this.setState({ open: !open })
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
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentDidUpdate() {
    let scrolled = this.state.scrolled
    if (this.state.scrolled !== scrolled) {
      this.handleScroll()
    }
  }

  render() {
    return (
      <nav className={`Navbar ${ this.state.scrolled ? 'scrolled' : '' }`}>
        <div className="Navbar__logo">
          <img src={ Logo } alt="Web logo"/>
          <div className="label"><p className="chrismas">ChristmaS</p><p><em>- F e s t i v a l -</em></p></div>
        </div>
        <HamburgerMenu
          className="hamburger"
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={30}
          height={20}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
        <Scrollspy 
          className={ this.state.open ? 'Navbar__menu' : 'Navbar__menu hide' }
          items={ ['Hero', 'History', 'Countdown', 'Wish'] } 
          currentClassName="is-current"
        >
          <li className="Navbar__item"><a href="#Hero">Home</a></li>
          <li className="Navbar__item"><a href="#History">History</a></li>
          <li className="Navbar__item"><a href="#Countdown">Countdown</a></li>
          <li className="Navbar__item"><a href="#Wish">Wish</a></li>
          <li className="Navbar__item"><a href="#About">About us</a></li>
        </Scrollspy>
      </nav>
    );
  }
}

export default Navbar;
