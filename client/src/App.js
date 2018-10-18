import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Foundation from 'react-foundation';
import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';
import InterestSelectionHero from './components/SignInPage/SignInHero/InterestSelectionHero';


const App = () => (

<Router>
  <div>
    <Switch>
      <Route exact path="/" component={FullScreenHero} />
      <Route exact path="/signin" component={SignInHero} />
      <Route  exact path="/eventfeed" component={EventFeedPage} />
      <Route  exact path="/interests" component={InterestSelectionHero} />


    </Switch>

  </div>

</Router>

);

export default App;
