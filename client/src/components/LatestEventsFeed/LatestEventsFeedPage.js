import React, {Component} from "react";
import { Link } from 'react-router-dom';
import LatestFeedListItem from "./LatestFeedListItem.js";
import "./LatestEventsFeed.css";
import LatestFeedList from './LatestFeedList';
import LatestFooter from './LatestFooter';
import API from "../../utils/API";



class LatestEventsFeedPage extends Component {
    state = {
        show: false,
        areaEvents: {}   
    }

    componentDidMount() {
        API.getUserData()
            .then(areaEvents =>{
                console.log(areaEvents.data);
                this.setState({ areaEvents: areaEvents.data });
            }).catch(err => console.log(err));
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
            
        <div>
            <div className="top-content-section">
    <div className="top-bar"
     style={{backgroundColor: 'white'}}>
      <div className="top-bar-right">
        <ul className="menu">
          <li><Link to = "/signin">Sign in</Link></li>
        </ul>
      </div>
    </div>
  </div>

        <div className="blk-bttn">
            <div className="bottom-content-section-button" data-magellan data-threshold="0">
             <Link to ="/" href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></Link>
            </div>
        </div>
        <div>
        
        <div className = "content">
        <LatestFeedList />
            <div className= "blank "></div>
            <h2>Latest Events</h2>
            <LatestFeedListItem />
        </div>
            
        </div>
        
        
        
        <LatestFooter /> 
    </div>

        );
    }

}
    


export default LatestEventsFeedPage;