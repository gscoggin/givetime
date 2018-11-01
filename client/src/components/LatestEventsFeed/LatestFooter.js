import React from 'react';
import Fade from 'react-reveal/Fade';

import './LatestEventsFeed.css'


const LatestFooter = () => {
  return (
    <footer className="latest_footer_bck_black">
      <Fade delay={500}>
        <div className="font_righteous footer_logo">
          Give Time
        </div> 
        <div className="footer_copyright">
          Give Time 2018. All rights reserved.
        </div>
     
    </Fade>
    </footer>
  );
};

export default LatestFooter;