import React from "react";
import "./CharityEvent.css";

const CharityFeedList = props => (
  <ul className="feedList absolute-center">{props.children}</ul>
);

export default CharityFeedList;