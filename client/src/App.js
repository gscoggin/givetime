import React, { Component } from 'react';
import Foundation from 'react-foundation';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
      <EventFeedPage />
      </div>
    );
  }
}

export default App;
