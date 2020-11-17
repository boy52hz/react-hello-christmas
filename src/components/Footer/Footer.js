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
							<a href="https://www.instagram.com/sugarfree_y/?igshid=10ibp6rkc7rx9"><img src={ Yok } alt="Yok"/></a>
							<div className="info">
								<p class="name">YOK</p>
								<p class="work">Web Design</p>
							</div>
						</li>
						<li>
							<a href="https://instagram.com/sspprew_?igshid=1m0c2zp86vur4"><img src={ Prew } alt="Prew"/></a>
							<div className="info">
								<p class="name">PREW</p>
								<p class="work">Web Design</p>
							</div>
						</li>
						<li>
							<a href="https://instagram.com/s.sudjaab_?igshid=1n32pjtcjy8oi"><img src={ Spy } alt="Spy"/></a>
							<div className="info">
								<p class="name">SPY</p>
								<p class="work">Front End</p>
							</div>
						</li>
						<li>
							<a href="https://instagram.com/boy52hz?igshid=1u1za3xk341h6"><img src={ Poi } alt="Poi"/></a>
							<div className="info">
								<p class="name">POI</p>
								<p class="work">Front End</p>
							</div>
						</li>
						<li>
							<a href="https://instagram.com/bxnovert?igshid=1cuw16vmivm5c"><img src={ Ben } alt="Ben"/></a>
							<div className="info">
								<p class="name">BEN</p>
								<p class="work">Front End</p>
							</div>
						</li>
						<li>
							<a href="https://instagram.com/jj_ngl?igshid=6r1vbdr6szj6"><img src={ J } alt="J"/></a>
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