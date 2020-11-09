import React from 'react'
import './Wish.css';

import Button from '../Button/Button';

class Wish extends React.Component {
  render() {
    return (
      <section id="Wish" class="Wish">
        <div className="Wish__container">
					<h1>Wish</h1>
					<div class="Wish__main">
						<img src="https://source.unsplash.com/random/500x400" alt="christmas sock"/>
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