import React from 'react';
import './Footer.scss';
import Yok from '../../static/img/about-us/yok.png';
import Prew from '../../static/img/about-us/prew.png';
import Spy from '../../static/img/about-us/spy.png';
import Poi from '../../static/img/about-us/poi.png';
import J from '../../static/img/about-us/j.png';
import Ben from '../../static/img/about-us/ben.png';
import Bell from '../../static/img/about-us/cutbell.png';
import Tree from '../../static/img/about-us/tree.png';
import Logo from '../../static/img/about-us/logo.png';





class Footer extends React.Component {
	render() {
		return (
			<section id="Footer">
				<img class="big-bell" src={ Bell } alt="big bell"/>	
				<ul>
					<li><img src={ Yok } alt="Yok"/><p>YOK</p></li>
					<li><img src={ Prew } alt="Prew"/><p>PREW</p></li>
					<li><img src={ Spy } alt="Spy"/><p>SPY</p></li>
					<li><img src={ Poi } alt="Poi"/><p>POI</p></li>
					<li><img src={ Ben } alt="Ben"/><p>BEN</p></li>
					<li><img src={ J } alt="J"/><p>J</p></li>
				</ul>
				<img class="big-tree" src={ Tree } alt="big tree"/>
				<img src={ Logo } alt="logo"/>
			</section>
		);
	}
}

export default Footer;