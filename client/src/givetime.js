import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SignUpHero from './components/SignInPage/SignUpHero/SignUpHero';
import CharitySignUpHero from './components/SignInPage/CharitySignUpHero/CharitySignUpHero';
import CharityMissionHero from './components/SignInPage/CharityMissionHero/CharityMissionHero';
import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';
import InterestSelectionHero from './components/SignInPage/SignInHero/InterestSelectionHero';
import CharityEvent from './components/SignInPage/CharityEventPage';


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

      <CharityEvent>
        <Link to="/charityevent"></Link>
      </CharityEvent>

      <SignInHero>
        <Link to="/signin"></Link>
      </SignInHero>

      
      <SignUpHero>
        <Link to="/signup"></Link>
      </SignUpHero>

      <CharitySignUpHero>
        <Link to="/charitysignup"></Link>
      </CharitySignUpHero>

      
      {/* <CharityMissionHero>
        <Link to="/charitymissionform"></Link>
      </CharityMissionHero>

      <InterestSelectionHero>
          <Link to="/interests"></Link>
      </InterestSelectionHero> */}
     

      </div>
     
      



      
      
      
    );
  }
}

export default GiveTime;
