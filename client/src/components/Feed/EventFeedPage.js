import React, {Component} from "react";
import NavSideBar from "../Nav"
import FeedListItem from "./FeedListItem.js";
import "./EventFeedPage.css";
import MyEvent from '../MyEvents/MyEvent';
import Footer from '../Nav/Footer';



class EventFeedPage extends Component {
    state = {
        show: true
        
    }

    showToggle =() => {
        if(this.state.show) {
            this.setState({show:false})
        } else {
            this.setState({show:true})
        }
        
    
    }
    render () {
        return (
            
            <div className="row">

        <div className="small-12 medium-12 columns">
        <NavSideBar 
            toggle={this.showToggle}/>
        </div>

        <div className = "content col md-10">
            <div className= "blank "></div>
            <h2>Event Feed</h2>
            <FeedListItem />
        </div>
        <div>
         <MyEvent
            state={this.state.show}
            
            />
        </div>
        <Footer /> 
    </div>

        );
    }

}
    


export default EventFeedPage;