import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';


import icon_calendar from '../../resources/images/icons/calendar.png';

import Zoom from 'react-reveal/Zoom';
import '../../resources/styles.css';

class MyEvent extends Component {
  
  render() {
    return (
      this.props.state ? <div/> : <LeftSlide/>
      
    
    )
  }

}
const LeftSlide = () => 
  
  
     
  <Slide left delay={1000}>
  <div className="grid-x">
  <div className="bck_black cell small-7 large-10">
        <div className="center_wrapper">
          <div className="vn_wrapper">

  </div>
    
          
          <Zoom duration={1500}>
          <div className="vn_item cell-small-12 large-4">
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
          
            
            <Zoom duration={1500} delay={1500}>

            <div className="vn_item cell-small-12 large-4">
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
          <Zoom duration={1500} delay={2000}>

            <div className="vn_item cell-small-12 large-4">
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
    </Slide>


    // const RightSlide = () => 
  
  
    
    // <Slide right delay={1000}>
    //   <div className="bck_black">
    //       <div className="center_wrapper">
    //         <div className="vn_wrapper">
            
    //         <Zoom duration={1500}>
    //         <div className="vn_item">
    //             <div className="vn_outer">
    //               <div className="vn_inner">
    //                 <div className="vn_icon_square bck_red"></div>
    //                 <div
    //                   className="vn_icon"
    //                   style={{
    //                     background: `url(${icon_calendar})`
    //                   }}   
    //                 ></div>
    //                 <div className="vn_title">
    //                   Event Name<br/>Date and Time
    //                 </div>
    //                 <div className="vn_desc">
    //                   Event Info and Location
                    
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           </Zoom>
            
              
    //           <Zoom duration={1500} delay={1500}>
  
    //           <div className="vn_item">
    //             <div className="vn_outer">
    //               <div className="vn_inner">
    //                 <div className="vn_icon_square bck_red"></div>
    //                 <div
    //                   className="vn_icon"
    //                   style={{
    //                     background: `url(${icon_calendar})`
    //                   }}   
    //                 ></div>
    //                 <div className="vn_title">
    //                   Event Name<br/>Date and Time
    //                 </div>
    //                 <div className="vn_desc">
    //                   Event Info and Location
                    
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </Zoom>
    //         <Zoom duration={1500} delay={2000}>
  
    //           <div className="vn_item">
    //             <div className="vn_outer">
    //               <div className="vn_inner">
    //                 <div className="vn_icon_square bck_red"></div>
    //                 <div
    //                   className="vn_icon"
    //                   style={{
    //                     background: `url(${icon_calendar})`
    //                   }}   
    //                 ></div>
    //                 <div className="vn_title">
    //                   Event Name<br/>Date and Time
    //                 </div>
    //                 <div className="vn_desc">
    //                   Event Info and Location
                    
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </Zoom>
            
  
              
  
  
    //         </div>
          
    //       </div>
  
        
    //   </div>
    //   </Slide>
  


export default MyEvent;