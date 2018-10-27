import React, { Component } from "react";
import CharityFormBack from "./CharityFormBack";
import "../../Button/Button-2.css";
import "./CharitySignUpForm.css";
import API from "../../../utils/API";

class CharitySignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      charityName: "",
      category: "",
      email: "",
      phoneNumber: "",
      regulated: false,
      mission: "",
    }
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.charityName && this.state.category && this.state.email && this.state.phoneNumber && this.state.regulated) {
      API.newCharity({
        username: this.state.username,
        name: this.state.charityName,
        password: "placeholder",
        category: this.state.category,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        irsStatus: this.state.regulated,
        mission: this.state.mission
      })
    } else {
      alert(
        'Please complete all fields.'
      )
    }
    }
  

  render() {

    return (

      <CharityFormBack>
      <form action="charity-form-control">
      
      <div className="inputs">
      <input
        onChange={this.handleInputChange}
        value={this.state.username}
        name="username"
        type="text"
        className="form-control"
        placeholder="Username" 
        id="username" />
      
      <input
        onChange={this.handleInputChange}
        value={this.state.charityName}
        name="charityName"
        type="text"
        className="form-control"
        placeholder="Charity Name" 
        id="charityName" />
      
      <label>Charity Category
        <select 
          className="form-control"
          onChange={this.handleInputChange}
          value={this.state.category}
          name="category"
          id="category">
          <option value="placeholder" disabled selected hidden>Please select an option</option>
          <option value="animals">Animals</option>
          <option value="children">Children</option>
          <option value="education">Education</option>
          <option value="community building">Community Building</option>
        </select>
      </label>
          
    
      <input
        onChange={this.handleInputChange}
        value={this.state.email}
        name="email"
        type="text"
        className="form-control"
        placeholder="Email" 
        id="email" />
    
      <input
        onChange={this.handleInputChange}
        value={this.state.phoneNumber}
        name="phoneNumber"
        type="text"
        className="form-control"
        placeholder="Phone Number" 
        id="phoneNumber" />

      <label>Are you a 501(c)(3) charity?
        <select required 
          className="form-control"
          onChange={this.handleInputChange}
          value={this.state.regulated}
          name="regulated"
          id="regulated">
          <option value="placeholder" hidden>Please select from dropdown</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>

      </div>

      <label>Mission Statement</label>
      <textarea 
        className = "form-control"
        onChange={this.handleInputChange}
        value={this.state.mission}
        name="mission"
        id="mission"/>

      <div className= "text-center">
        <button className ="button radius signupBtn" onClick={this.handleFormSubmit}>Next</button>
      </div>
      
    </form>
      
    </CharityFormBack>

    )

  }
};

export default CharitySignUpForm;