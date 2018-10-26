

import React from "react";
import { Link } from 'react-router-dom';
import Button from './../Button'
import "./FullScreenHero.css"

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const FullScreenHero = ({ size, children }) => (
  


<div className="hero-full-screen">

  <div className="top-content-section">
    <div className="top-bar">
      <div className="top-bar-right">
        <ul className="menu">
          <li><Link to = "/signin">Sign in</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="middle-content-section">
    <h1>I am a ...</h1>
    <Button />
    {/* <button className="btn btn-lg">Button</button> */}
  </div>

  <div className="bottom-content-section" data-magellan data-threshold="0">
    <Link to ="/eventfeed" href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></Link>
  </div>

</div>

);



export default FullScreenHero;