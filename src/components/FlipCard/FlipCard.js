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
		this.setState(oldState => ({ isFlipped: !oldState.isFlipped }));
	}
	render() {
		const { isFlipped } = this.state;
		const { imgFront, imgBack } = this.props;
		return (
			<div id="FlipCard" >
				<ReactCardFlip isFlipped={ isFlipped } flipDirection="horizontal">
        			<img src={ imgFront } alt="Front img" onClick={ this.handleClick } style={ isFlipped ? { visibility: "hidden" }: null }/>
					<img src={ imgBack } alt="Back img" onClick={ this.handleClick } style={ !isFlipped ? { visibility: "hidden" }: null }/>
      			</ReactCardFlip>
			</div>
		)
	}
}

export default FlipCard;