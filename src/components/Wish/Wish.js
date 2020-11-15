import React from 'react'
import './Wish.scss';

import { Modal } from 'react-bootstrap';

import Socks from '../../static/img/socks.png';

import Button from '../Button/Button';

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
          <div className="header">
            <h1>May Santa Claus bring everything you wished for.</h1>
            <p>What do you wish for ? We will send your request to Santa Claus ourselves.</p>
          </div>

					<div className="Wish__main">
						<img src={ Socks } alt="christmas sock"/>
					</div>

          <div className="Wish__btn-group">
            <Button type="submit" onClick={this.handleShow}>Let's make a wish!</Button>
          </div>
				</div>

        <Modal show={modal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    )
  }
}


export default Wish;