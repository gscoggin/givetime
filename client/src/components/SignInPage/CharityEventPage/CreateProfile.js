import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';


import icon_calendar from '../../../resources/images/icons/calendar.png';

import Zoom from 'react-reveal/Zoom';
import '../../../resources/styles.css';

class CreateProfile extends Component {
  
  render() {
    return (
      this.props.state ? <div/> : <LeftSlide/>
      
    
    )
  }

}
const LeftSlide = () => 
  
  
     
  <Slide left delay={1000}>

  <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">

 
    
          
          <Zoom duration={1500}>
          <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}   
                  ></div>
                  <div className="vn_title">
                    Create Profile!<br/>Date and Time
                  </div>
                  <div className="vn_desc">
                    Event Info and Location
                  
                  </div>
                </div>
              </div>
            </div>
            </Zoom>
          
           

            


          </div>
        
        </div>

      
    </div>
    </Slide>


   
  


export default CreateProfile;