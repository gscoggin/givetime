
import React from "react";
import Foundation from 'react-foundation';
import FormBack from "./../FormBack";
import SignInButton from "./../SignInButton";
import "./InterestSelectionForm.css"

const InterestSelectionForm = ({ size, children }) => (

<FormBack>
<form action="form-control">
<div className="row">
  <div className="column1">
  <input type="checkbox" name="" value=""/> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  </div>
  <div className="column2">
  <input type="checkbox" name="" value=""/> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  <input type="checkbox" name="" value="" /> Default<br />
  </div>
</div>
 
{/* </form> */}


  {/* </div> */}
  
  <SignInButton />
  
</form>
  
</FormBack>



);

export default InterestSelectionForm;