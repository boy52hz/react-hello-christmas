import React from 'react';
import './Countdown.scss';

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
					<h1>Countdown before our Christmas!</h1>
          <div className="Countdown__box">
						<div className="Countdown__item">
							<div className="timer">{ state.days }</div>
							<div className="title">Days</div>
						</div>
						<div className="Countdown__item">
							<div className="timer">{ state.hours }</div>
							<div className="title">Hours</div>
						</div>
						<div className="Countdown__item">
							<div className="timer">{ state.minutes }</div>
							<div className="title">Minutes</div>
						</div>
						<div className="Countdown__item">
							<div className="timer">{ state.seconds }</div>
							<div className="title">Seconds</div>
						</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;