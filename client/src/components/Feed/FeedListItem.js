import React from "react";
import "./Feed.css";
import "../Button/Button-2.css";

const FeedListItem = props => (
    <div className = "callout clearfix horizontal-center">
        <h5>
            Example Opportunity
            <a href='#' className="button radius float-right eventBtn">See Event</a>
        </h5>

        <p className="feed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
    </div>
);

export default FeedListItem;