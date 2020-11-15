import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import './History.scss';

import C1 from '../../static/img/cards/c1_frontreal-01.jpg';
import C2 from '../../static/img/cards/c2_frontreal-01.jpg';
import C3 from '../../static/img/cards/c3_frontreal-01.jpg';
import C4 from '../../static/img/cards/c4_frontreal-01.jpg';

import C1Back from '../../static/img/cards/c1_backreal.jpg';
import C2Back from '../../static/img/cards/c2_backreal.jpg';
import C3Back from '../../static/img/cards/c3_backreal.jpg';
import C4Back from '../../static/img/cards/c4_backreal.jpg';

class HistorySection extends React.Component {
  render() {
    return (
      <section id="History">
        <div className="History__container">
          <h1>History of Christmas</h1>
          <div className="History__description">
            <p>Veniam proident ullamco commodo dolore deserunt 
            deserunt mollit exercitation culpa amet irure officia 
            magna. Culpa consequat fugiat pariatur qui dolor commodo 
            nostrud non sunt. Enim velit amet do in sint officia ex. 
            Id amet ullamco fugiat laborum irure adipisicing consequat ipsum proident.
            </p>
            <p>Veniam proident ullamco commodo dolore deserunt 
            deserunt mollit exercitation culpa amet irure officia 
            magna. Culpa consequat fugiat pariatur qui dolor commodo 
            nostrud non sunt. Enim velit amet do in sint officia ex. 
            Id amet ullamco fugiat laborum irure adipisicing consequat ipsum proident.
            </p>
          </div>
          <div className="History__gallery">
            <FlipCard imgFront={ C1 } imgBack={ C1Back }/>
            <FlipCard imgFront={ C2 } imgBack={ C2Back }/>
            <FlipCard imgFront={ C3 } imgBack={ C3Back }/>
            <FlipCard imgFront={ C4 } imgBack={ C4Back }/>
          </div>
        </div>
      </section>
    );
  }
}

export default HistorySection;