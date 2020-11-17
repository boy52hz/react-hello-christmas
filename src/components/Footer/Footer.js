import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Footer.scss';
import Yok from '../../static/img/about-us/yok.png';
import Prew from '../../static/img/about-us/prew.png';
import Spy from '../../static/img/about-us/spy.png';
import Poi from '../../static/img/about-us/poi.png';
import J from '../../static/img/about-us/j.png';
import Ben from '../../static/img/about-us/ben.png';

import Bell from '../../static/img/about-us/bell.png';
import Tree from '../../static/img/about-us/tree.png';

class Footer extends React.Component {
	render() {
		return (
			<section id="Footer">	
				<div className="Footer__container">
				<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
					<ul>
						<li>
							<img src={ Yok } alt="Yok"/>
							<div className="info">
								<p class="name">YOK</p>
								<p class="work">Web Design</p>
							</div>
						</li>
						<li>
							<img src={ Prew } alt="Prew"/>
							<div className="info">
								<p class="name">PREW</p>
								<p class="work">Web Design</p>
							</div>
						</li>
						<li>
							<img src={ Spy } alt="Spy"/>
							<div className="info">
								<p class="name">SPY</p>
								<p class="work">Front End</p>
							</div>
						</li>
						<li>
							<img src={ Poi } alt="Poi"/>
							<div className="info">
								<p class="name">POI</p>
								<p class="work">Front End</p>
							</div>
						</li>
						<li>
							<img src={ Ben } alt="Ben"/>
							<div className="info">
								<p class="name">BEN</p>
								<p class="work">Front End</p>
							</div>
						</li>
						<li>
							<img src={ J } alt="J"/>
							<div className="info">
								<p class="name">J</p>
								<p class="work">Infrastructure</p>
							</div>
						</li>
					</ul>
				</ScrollAnimation>
				</div>
				<img className="big-bell" src={ Bell } alt="big bell"/>
				<img className="bell" src={ Bell } alt="bell"/>
				<img className="bell2" src={ Bell } alt="bell"/>
				<img className="tree" src={ Tree } alt="tree"/>
			</section>
		);
	}
}

export default Footer;