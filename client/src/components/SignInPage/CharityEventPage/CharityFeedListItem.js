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
        Lorem ipsum dolor amet subway tile direct trade mlkshk scenester vinyl meditation skateboard irure la croix cold-pressed eiusmod sint microdosing enim. Pop-up est in selfies tousled everyday carry williamsburg palo santo taiyaki. Aute edison bulb poutine, vaporware la croix commodo culpa four loko eiusmod mumblecore cloud bread fam swag chicharrones etsy. Messenger bag portland before they sold out excepteur cardigan.
        </p>
        <p className="charityProfile">
        Bitters kickstarter selfies farm-to-table mustache drinking vinegar duis shaman hexagon cardigan mlkshk id glossier williamsburg. Ea four loko mumblecore ennui yr consectetur cupidatat actually viral leggings distillery exercitation migas iceland. Aliquip exercitation shabby chic poke, thundercats consequat semiotics 90's beard four dollar toast non cold-pressed deserunt swag leggings. Photo booth vice single-origin coffee tilde waistcoat direct trade green juice distillery velit excepteur occaecat etsy marfa copper mug.
        </p>
    </div>
);

export default CharityFeedListItem;