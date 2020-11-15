import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
import Countdown from './components/Countdown/Countdown';
import Wish from './components/Wish/Wish';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    showSlogan: true  
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSlogan: false });
    }, 2000)
  }

  render() {
    return (
      <div className="App">               
        <div style={ this.state.showSlogan ? { display: 'block' } : { display: 'none' } }>KUYY</div>                             
        <Navbar/>
        <Hero/>
        <History/>
        <Countdown/>
        <Wish/>
        <Footer/>
      </div>
    );
  }
}

export default App;