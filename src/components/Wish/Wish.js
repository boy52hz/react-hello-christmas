import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import delay from 'delay';
import './Wish.scss';

import { Modal } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

import Socks from '../../static/img/socks.png';
import WishesWhale from '../../static/img/wishes-whale.png';

import { Button } from 'react-bootstrap';

class Wish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      whaleAppeal: false,
      sectionShow: true
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleShow() {
    this.setState({ modal: true });
  }
  handleClose() {
    this.setState({ modal: false });
  }

  async handleClick() {
    this.handleClose()

    this.setState({ whaleAppeal: true, sectionShow: false });
    await delay(8000);
    this.setState({ whaleAppeal: false });
    await delay(1000);
    this.setState({ sectionShow: true })
  }

  render() {
    const { modal, whaleAppeal, sectionShow } = this.state;
    return (
      <section id="Wish" className="Wish">
        <Animated 
          className="wishes-whale" 
          animationIn="slideInRight" 
          animationOut="slideOutLeft" 
          animationInDuration={3000} 
          animationOutDuration={3000} 
          isVisible={ whaleAppeal }
          animateOnMount={false}
        >
          <img src={ WishesWhale } alt="Wishes Whale"/>
        </Animated>

        <Animated
          className="Wish__container"
          animationInDuration={1000} 
          animationOutDuration={1000}
          isVisible={ sectionShow }
          animateOnMount={false}
        >
          <ScrollAnimation animateIn="zoomInDown" animateOnce={true} duration={1.2}>
            <div className="Wish__header">
              <h1>May Santa Claus bring everything you wished for.</h1>
              <p>What do you wish for ? We will send your request to Santa Claus ourselves.</p>
            </div>
            <img src={ Socks } alt="christmas sock"/>
            <div class="Wish__button" onClick={this.handleShow}></div>
          </ScrollAnimation>
        </Animated>

        <Modal show={modal} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Let us know your wishes!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea id="wish-area" placeholder="Text your wishes here!" rows="12"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.handleClick}>Send my wish</Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }
}


export default Wish;