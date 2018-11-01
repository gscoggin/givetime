import React from "react";
import "../Feed/Feed.css";

const LatestFeedList = props => (
  <ul className="feedList absolute-center">{props.children}</ul>
);

export default LatestFeedList;