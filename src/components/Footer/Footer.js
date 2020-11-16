import React from 'react';
import './Footer.scss';
import Yok from '../../static/img/about-us/yok.png';
import Prew from '../../static/img/about-us/prew.png';
import Spy from '../../static/img/about-us/spy.png';
import Poi from '../../static/img/about-us/poi.png';
import J from '../../static/img/about-us/j.png';
import Ben from '../../static/img/about-us/ben.png';
import Bell from '../../static/img/about-us/cutbell.png';
import BigTree from '../../static/img/about-us/tree+light.gif';
import SmallTree from '../../static/img/about-us/tree+Light+2.gif';
import SmallTreeRight from '../../static/img/about-us/treeright.png';
import SmallTreeCenterRight from '../../static/img/about-us/tree-centerright.png';
import SmallTreeCut from '../../static/img/about-us/small-tree-cut-left.png';
import SmallTreeRightCut from '../../static/img/about-us/tree-right-cut.png';
import SmallBellLeft from '../../static/img/about-us/bellleft.png';
import SmallBellRight from '../../static/img/about-us/bellright.png';
import SmallBellRightCut from '../../static/img/about-us/bellrightcut.png';


import Logo from '../../static/img/about-us/logo.png';

class Footer extends React.Component {
	render() {
		return (
			<section id="Footer">
				<img class="big-bell" src={ Bell } alt="big bell"/>	
				<div className="Footer__container">
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
				</div>
				{/* <img class="big-tree" src={ BigTree } alt="big tree"/>
				<img class="small-tree" src={ SmallTree } alt="small tree"/>
				<img class="small-tree-right" src={ SmallTreeRight } alt="small tree right"/>
				<img class="small-tree-centerright" src={ SmallTreeCenterRight } alt="small tree center right"/>
				<img class="small-tree-cut" src={ SmallTreeCut } alt="small tree left"/>
				<img class="small-tree-right-cut" src={ SmallTreeRightCut } alt="small tree right cut"/>
				<img class="small-bell-left" src={ SmallBellLeft } alt="small bell left"/>
				<img class="small-bell-right" src={ SmallBellRight } alt="small bell right"/>
				<img class="small-bell-left2" src={ SmallBellLeft } alt="small bell left2"/>
				<img class="small-bell-right-cut" src={ SmallBellRightCut } alt="small bell right cut"/>
				<img class="logo-hello"src={ Logo } alt="logo"/> */}
			</section>
		);
	}
}

export default Footer;