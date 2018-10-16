import React, { Component } from 'react';
import Foundation from 'react-foundation';


import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FullScreenHero />
       {/* <SignInHero /> */}
       
      </div>
    );
  }
}

export default App;
