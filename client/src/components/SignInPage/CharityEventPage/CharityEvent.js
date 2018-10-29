import React, { Component } from 'react';

import CharityNavSideBar from "./CharityNavSideBar"
import CharityFeedListItem from "./CharityFeedListItem.js";
import "./CharityEvent.css";
import MyEvent from '../../MyEvents/MyEvent';
import Footer from '../../Nav/Footer';
import CreateEvent from './CreatEvent';
import CreateProfile from './CreateProfile';


class CharityEvent extends Component {
    state = {
        eventshow: true,
        createshow: true,
        createProfile: true
        
    }

    eventshowToggle =() => {
        if(this.state.eventshow) {
            this.setState({eventshow:false})
        } else {
            this.setState({eventshow:true})
        }
        
    
    }
    createshowToggle =() => {
      if(this.state.createshow) {
          this.setState({createshow:false})
      } else {
          this.setState({createshow:true})
      }
      
  
  }
  createProfileToggle =() => {
    if(this.state.createProfile) {
        this.setState({createProfile:false})
    } else {
        this.setState({createProfile:true})
    }
    

}
    render () {
        return (
            
            <div>

        <div>
        <CharityNavSideBar 
            toggle={this.eventshowToggle}
            createtoggle={this.createshowToggle}
            createProfiletoggle={this.createProfileToggle}
            />
        </div>
        <div>
        <div className = "content">
            <div className= "blank "></div>
            <h2>Event Feed</h2>
            <CharityFeedListItem />
        </div>
        </div>
        
        <div>
         <MyEvent
            state={this.state.eventshow}
            
            />
        </div>

        <div>
         <CreateEvent
            state={this.state.createshow}
            
            />
        </div>
        <div>
         <CreateProfile
            state={this.state.createProfile}
            
            />
        </div>
        
        <Footer /> 
    </div>

        );
    }

}
    


export default CharityEvent;