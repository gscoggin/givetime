import React, { Component } from 'react';
import Foundation from 'react-foundation';
import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">

      {/*<EventFeedPage />*/}
      
       <FullScreenHero />
       {/* <SignInHero /> */}
       
      </div>
    );
  }
}

export default App;
