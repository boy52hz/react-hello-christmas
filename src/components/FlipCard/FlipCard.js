import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './FlipCard.scss';

class FlipCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		this.setState(oldState => ({ isFlipped: !oldState.isFlipped }));
	}
	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <img src={ this.props.imgFront } alt="Front img" onClick={ this.handleClick } style={ this.state.isFlipped ? { visibility: "hidden" }: null }/>
				<img src={ this.props.imgBack } alt="Back img" onClick={ this.handleClick } style={ !this.state.isFlipped ? { visibility: "hidden" }: null }/>
      </ReactCardFlip>
		)
	}
}

export default FlipCard;