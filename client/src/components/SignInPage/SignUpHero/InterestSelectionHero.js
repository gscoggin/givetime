import React from "react";
import InterestSelectionForm from "./../InterestSelectionForm";

import "./SignUpHero.css"


// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const InterestSelectionHero = ({ size, children }) => (
  


<div className="sign-up-hero-full-screen">


   <InterestSelectionForm />
  
  
  

</div>

);



export default InterestSelectionHero;