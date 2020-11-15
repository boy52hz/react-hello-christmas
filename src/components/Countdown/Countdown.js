import React from 'react';
import './Countdown.scss';

import CandyCane from '../../static/img/candycane.png';
import LigthWire from '../../static/img/lightwire.png';

class Countdown extends React.Component {
	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}
  componentDidMount() {
    this.tick = setInterval(() => {
		const xmas = new Date(2020, 11, 25).getTime();
		const now = new Date().getTime();
		const distance = xmas - now;
		const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
  		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
  		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
  		const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.tick) {
      clearInterval(this.tick);
    }
  }

  render() {
		const state = this.state;
    return (
      <section id="Countdown">
        <div className="Countdown__container">
					<h1>Countdown</h1>
          <div className="Countdown__box">
						<img id="candycane" src={ CandyCane } alt="Candy Cane"/>
						<img id="lightwire" src={ LigthWire } alt="Light Wire"/>
						<div className="Countdown__item">
							<div className="title">Days</div>
							<div className="timer">{ state.days }</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Hours</div>
							<div className="timer">{ state.hours }</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Minutes</div>
							<div className="timer">{ state.minutes }</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Seconds</div>
							<div className="timer">{ state.seconds }</div>
						</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;