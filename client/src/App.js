import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpHero from './components/SignInPage/SignUpHero/SignUpHero';
import CharitySignUpHero from './components/SignInPage/CharitySignUpHero/CharitySignUpHero';
import CharityMissionHero from './components/SignInPage/CharityMissionHero/CharityMissionHero';
import SignInHero from './components/SignInPage/SignInHero/SignInHero';
import FullScreenHero from './components/FullScreenHero';
import EventFeedPage from './components/Feed';
import CharityEvent from './components/SignInPage/CharityEventPage';
import InterestSelectionHero from './components/SignInPage/SignUpHero/InterestSelectionHero';
import NoMatch from './components/Nav/NoMatch';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userData:""
    }
    
  }

  onUpdate = (val) => {
    this.setState({
      userData: val
    })
  };

  render () {

    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={FullScreenHero} />
            <Route exact path="/signin" render={(props) => <SignInHero {...props} onUpdate={this.onUpdate}/>} />
            <Route exact path="/signup" component={SignUpHero} />
            <Route exact path="/charitysignup" component={CharitySignUpHero} />
            {/* <Route exact path="/charitymissionform" component={CharityMissionHero} /> */}
            <Route  exact path="/eventfeed" component={EventFeedPage} />
            <Route  exact path="/charityevent" component={CharityEvent} />
            {/* <Route  exact path="/interests" component={InterestSelectionHero} /> */}
            <Route component={NoMatch} />


          </Switch>

        </div>

      </Router>

)};

};

export default App;
