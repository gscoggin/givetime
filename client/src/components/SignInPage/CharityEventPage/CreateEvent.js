import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';




import Zoom from 'react-reveal/Zoom';
import '../../../resources/styles.css';

class CreateEvent extends Component {
  
  render() {
    return (
      !this.props.state ? <div/> : <LeftSlide/>
      
    
    )
  }

}
const LeftSlide = () => 
  
  
     
  <Slide left delay={1000}>

  <div className="bck_black">
        <div className="center_wrapper">
          <div className="event_vn_wrapper">

 
    
          
          <Zoom duration={1500}>
          <div className="event_vn_item">
              <div className="event_vn_outer">
                <div className="event_vn_inner">
                <div className="event_vn_title">Create an Event</div>
                  
                  <form className="event_vn_title">
                  <div>
                  <input
        // onChange={this.handleInputChange}
        // value={this.state.eventTitle}
        name="charityEventTitle"
        type="text"
        className="form-control"
        placeholder="Event Title" 
        id="eventTitle" />
        <input
        // onChange={this.handleInputChange}
        // value={this.state.eventDate}
        name="charityEventDate"
        type="text"
        className="form-control"
        placeholder="Event Date" 
        id="eventDate" />
        <label className="event_sm_title">Please Describe the Event</label>
        <textarea
        className="event_form-control"
        name="eventTextArea" 
        id="eventText" 
        cols="30" 
        rows="4">
        </textarea>
                  </div>
                 
                 
                  
                  </form>
                  
                </div>
              </div>
              </div>
            
            </Zoom>
          
           

            


          </div>
        
        </div>

      
    </div>
    </Slide>


   
  


export default CreateEvent;