
import React from "react";
import FormBack from "./../FormBack";
import SignInButton from "./../SignInButton";
import "./InterestSelectionForm.css"

const InterestSelectionForm = ({ size, children }) => (

<FormBack>
<form action="form-control">
<div className="row">
  <div className="column1">
  <input type="checkbox" className="interests" value=""/> Animals<br />
  <input type="checkbox" className="interests" value="" /> Arts & Culture<br />
  <input type="checkbox" className="interests" value="" /> Community<br />
  <input type="checkbox" className="interests" value="" /> Computers & Technology<br />
  <input type="checkbox" className="interests" value="" /> Education & Literacy<br />
  </div>
  <div className="column2">
  <input type="checkbox" className="interests" value=""/> Seniors<br />
  <input type="checkbox" className="interests" value="" /> Crisis Support<br />
  <input type="checkbox" className="interests" value="" /> Politics<br />
  <input type="checkbox" className="interests" value="" /> Sports & Recreation<br />
  <input type="checkbox" className="interests" value="" /> Environment<br />
  </div>
</div>


 
{/* </form> */}


  {/* </div> */}
  
  <SignInButton />
  
</form>
  
</FormBack>



);

export default InterestSelectionForm;