import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
import Countdown from './components/Countdown/Countdown';
import Wish from './components/Wish/Wish';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        {/* Triangle Seperator */}
        <div className="App__triangle-sep"></div>
        <History/>
        <Countdown/>
        <Wish/>
      </div>
    );
  }
}

export default App;