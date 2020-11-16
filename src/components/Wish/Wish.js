import React from 'react'
import './Wish.scss';

import { Modal } from 'react-bootstrap';

import Socks from '../../static/img/socks.png';

import { Button } from 'react-bootstrap';

class Wish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow() {
    this.setState({ modal: true });
  }
  handleClose() {
    this.setState({ modal: false });
  }
  render() {
    const { modal } = this.state;
    return (
      <section id="Wish" className="Wish">
        <div className="Wish__container">
          <div className="Wish__header">
            <h1>May Santa Claus bring everything you wished for.</h1>
            <p>What do you wish for ? We will send your request to Santa Claus ourselves.</p>
          </div>
					<img src={ Socks } alt="christmas sock"/>
          <div class="Wish__button" onClick={this.handleShow}></div>
				</div>

        <Modal show={modal} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Let us know your wishes!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea id="wish-area" placeholder="Text your wishes here!" rows="12"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">Send my wish</Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }
}


export default Wish;