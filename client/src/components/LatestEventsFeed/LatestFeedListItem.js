import React from "react";
import './LatestEventsFeed.css';
import "../Button/Button-2.css";

const LatestFeedListItem = props => (
    <div className = "callout clearfix horizontal-center">
        <h5>
            {props.name}
            <a href='#' className="button radius float-right eventBtn">See Event</a>
        </h5>

        <p className="feed">
            {props.synopsis}
        </p>
    </div>
);

export default LatestFeedListItem;