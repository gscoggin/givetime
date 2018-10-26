import React from 'react';



import icon_calendar from '../../resources/images/icons/calendar.png';

import Zoom from 'react-reveal/Zoom';
import '../../resources/styles.css';

const MyEvent = () => {
  return (
    <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">

          <Zoom duration={500}>
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
                    Event Name<br/>Date and Time
                  </div>
                  <div className="vn_desc">
                    Event Info and Location
                  
                  </div>
                </div>
              </div>
            </div>
            </Zoom>
          
            
            <Zoom duration={500} delay={500}>

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
                    Event Name<br/>Date and Time
                  </div>
                  <div className="vn_desc">
                    Event Info and Location
                  
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={1000}>

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
                    Event Name<br/>Date and Time
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
  );
};

export default MyEvent;