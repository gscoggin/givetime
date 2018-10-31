import React from "react";
import "./CharityEventFeedPage.css";
import "../../Button/Button-2.css";

const CharityFeedListItem = props => (
    <div className = "callout clearfix horizontal-center">
        <h2>
            Charity Profile
            
        </h2>
        

        <div className="charityImage">
        <img src="https://www.fillmurray.com/640/360" className="charityImages" alt="this is a picture of our charity" title="Picture of Charity"/>
        </div>

        <p className="charityProfile">
        Lorem ipsum dolor amet subway tile direct trade mlkshk scenester vinyl meditation skateboard irure la croix cold-pressed eiusmod sint microdosing enim. 
        </p>
        <p className="charityProfile">
        Bitters kickstarter selfies farm-to-table mustache drinking vinegar duis shaman hexagon cardigan mlkshk id glossier williamsburg.  
        </p>
    </div>
);

export default CharityFeedListItem;