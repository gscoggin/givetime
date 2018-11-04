import React, {Component} from "react";
import NavSideBar from "../Nav"
import FeedListItem from "./FeedListItem.js";
import FeedList from "./FeedList.js";
import "./EventFeedPage.css";
import MyEvent from '../MyEvents/MyEvent';
import Footer from '../Nav/Footer';
import API from "../../utils/API";



class EventFeedPage extends Component {
    state = {
        show: false,
        profile: {},
        events:[]
    }

    componentDidMount() {
        API.getEvents().then(event =>{
            this.setState({ events: event.data });
        });

        API.getUserData()
            .then(profile =>{
                this.setState({ profile: profile.data });
            }).catch(err => console.log(err));
    }

    showToggle =() => {
        if(this.state.show) {
            this.setState({show:false})
        } else {
            this.setState({show:true})
        }    
    
    }
    prettyEventDate = date => {
        new Intl.DateTimeFormat('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: '2-digit',
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit'
        }).format(date);
    }
    render () {
        return (
            
            <div>

        <div>
        <NavSideBar 
            toggle={this.showToggle}/>
        </div>
        <div>
        <div className = "content">
            <div className= "blank "></div>
            <h2>Event Feed</h2>
            <FeedList>
            {this.state.events.map( event => {
                const eventDate = new Date(event.date);
                const prettyEventDate = new Intl.DateTimeFormat('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit',
                }).format(eventDate);
                    return (
                      <FeedListItem
                        key={event.name}
                        name={event.name}
                        synopsis={event.synopsis}
                        date={prettyEventDate}
                      />
                     
                    );
                  })}
            </FeedList>
        </div>
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