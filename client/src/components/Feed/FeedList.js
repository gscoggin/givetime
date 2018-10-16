import React from "react";
import "./Feed.css";

const FeedList = props => (
  <ul className="feedList absolute-center">{props.children}</ul>
);

export default FeedList;