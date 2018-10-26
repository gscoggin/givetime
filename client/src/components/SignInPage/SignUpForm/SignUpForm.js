import React, { Component } from "react";
import FormBack from "./../FormBack";
import "./SignUpForm.css";
import "../../Button/Button-2.css";
import API from "../../../utils/API";

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
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
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!")
    } else if (this.state.password.length < 6) {
      alert(
        `Please choose a more secure password ${this.state.firstName}.`
      );
  
    } else if (!this.state.email) {
      alert(
        'Please provide your email.'
      );
    } else if (!this.state.phoneNumber) {
      alert(
        'Please provide your phone number.'
      );
    } else if (!this.state.username) {
      alert(
        'Please select a username.'
      );
    } else {
      API.newVolunteer({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        username: this.state.username
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }

    // this.setState({
    //   username: "",
    //   password: "",
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   phonenumber: ""
    // });
  };

  render() {

    return (

      <FormBack>
        <form action="http://localhost:3001/api/signup" method="POST">
        
        <div className="inputs">
        <input
          //  onChange={props.handleInputChange}
          //  value="username"
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Username" 
          id="username" />
        
        <input
          //  onChange={props.handleInputChange}
          //  value="username"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            className="form-control"
            placeholder="Password" 
            id="password" />
        
        <input
          //  onChange={props.handleInputChange}
          //  value={"firstname"}
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="First Name" 
          id="firstName" />
      
        <input
          //  onChange={props.handleInputChange}
          //  value={props.value}
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Last Name" 
          id="lastName" />
      
        <input
          //  onChange={props.handleInputChange}
          //  value={props.value}
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Email" 
          id="email" />
      
        <input
          //  onChange={props.handleInputChange}
          //  value={props.value}
          value={this.state.phoneNumber}
          name="phoneNumber"
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Phone Number" 
          id="phoneNumber" />

        </div>
        
        <div className= "text-center">
          <button className ="button radius signupBtn" onClick={this.handleFormSubmit}>Next</button>
        </div>
        
      </form>
      
    </FormBack>

    )

  }

};

export default SignUpForm;