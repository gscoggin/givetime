import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../resources/styles.css';


const Footer = () => {
  return (
    <footer className="footer_bck_black">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          Give Time
        </div>
        <div className="footer_copyright">
          Give Time 2018. All rights reserved.
        </div>
     
    </Fade>
    </footer>
  );
};

export default Footer;