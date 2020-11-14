import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<section id="Footer"> 
				<div class="header">About Us</div>
				<div className="d-flex justify-content-between">
					<div className="Footer__box">
						<div className="title">Contact</div>
					</div>
					<div className="Footer__box">
						<div className="title">Source</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;