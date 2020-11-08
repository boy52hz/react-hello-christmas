import React from 'react';
import './App.css';

import Navbar from './components/Nav/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import HistorySection from './components/HistorySection/HistorySection';

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar/>
        <HeroSection/>
        <HistorySection/>
      </div>
    );
  }
}

export default App;