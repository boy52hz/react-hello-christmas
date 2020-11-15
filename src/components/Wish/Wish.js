import React from 'react'
import './Wish.scss';

import Sock from '../../static/img/sock.png';

import Button from '../Button/Button';

class Wish extends React.Component {
  render() {
    return (
      <section id="Wish" className="Wish">
        <div className="Wish__container">
          <div className="header">
            <h1>May Santa Claus bring everything you wished for.</h1>
            <p>What do you wish for ? We will send your request to Santa Claus ourselves.</p>
          </div>

					<div className="Wish__main">
						<img src={ Sock } alt="christmas sock"/>
					</div>

          <div className="Wish__btn-group">
            <Button type="submit">Submit</Button>
          </div>
				</div>
      </section>
    )
  }
}


export default Wish;