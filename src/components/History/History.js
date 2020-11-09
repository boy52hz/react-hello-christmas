import React from 'react';
import './History.css';

class HistorySection extends React.Component {
  render() {
    return (
      <section id="History" className="History">
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
            <img src="https://source.unsplash.com/random/250x250" alt="Christmas 1"/>
            <img src="https://source.unsplash.com/random/250x250" alt="Christmas 1"/>
            <img src="https://source.unsplash.com/random/250x250" alt="Christmas 1"/>
            <img src="https://source.unsplash.com/random/250x250" alt="Christmas 1"/>
          </div>
        </div>
      </section>
    );
  }
}

export default HistorySection;