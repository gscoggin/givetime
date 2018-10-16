import React from "react";
import NavSideBar from "../Nav"
import FeedList from "./FeedList.js";
import FeedListItem from "./FeedListItem.js";
import "./EventFeedPage.css";

const EventFeedPage = ({ size, children }) => (
    <div>
        <div>
        <NavSideBar />
        </div>

        <div className = "content">
            <div className= "blank "></div>
            <h2>Event Feed</h2>
            <FeedListItem />
        </div>
    </div>
);

export default EventFeedPage;