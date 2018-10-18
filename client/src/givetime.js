import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Foundation from 'react-foundation';
import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';
import InterestSelectionHero from './components/SignInPage/SignInHero/InterestSelectionHero';


class GiveTime extends Component {
  render() {
    return (
      <div>
      <FullScreenHero>
        <Link to="/"></Link>
      </FullScreenHero>

      <EventFeedPage>
        <Link to="/eventfeed"></Link>
      </EventFeedPage>

      <SignInHero>
        <Link to="/signin"></Link>
      </SignInHero>

      <InterestSelectionHero>
          <Link to="/interests"></Link>
      </InterestSelectionHero>


      </div>
      



      
      
      
    );
  }
}

export default GiveTime;
