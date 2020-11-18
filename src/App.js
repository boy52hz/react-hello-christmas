import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
import Countdown from './components/Countdown/Countdown';
import Wish from './components/Wish/Wish';
import Footer from './components/Footer/Footer';
import SnowStorm from 'react-snowstorm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SnowStorm 
          flakesMaxActive={128} 
          followMouse={false} 
          flakeLeftOffset={100} 
          flakeWidth={30} 
          flakeHeight={20}
        />
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