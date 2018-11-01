import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import API from './../../../utils/API';
import Zoom from 'react-reveal/Zoom';
import '../../../resources/styles.css';

class CreateEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      date: "",
      summary: ""

    }
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.title) {
      alert("Enter a title please!")
    } else if (!this.state.date) {
      alert(
        'Please provide a date.'
      );
    } else if (!this.state.summary) {
      alert(
        'Please provide a summary for your event.'
      );
    } else {
      API.newEvent({
        title: this.state.title,
        date: this.state.date,
        summary: this.state.summary
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    };
  };

  render() {
    return (

      <Slide left delay={1000}>

        <div className="bck_black">
          <div className="center_wrapper">
            <div className="event_vn_wrapper">

              <Zoom duration={1500}>
                <div className="event_vn_item">
                  <div className="event_vn_outer">
                    <div className="event_vn_inner">
                      <div className="event_vn_title">Create an Event</div>

                      <div>
                        <form action="http://localhost:3001/api/event" method="POST">

                          <div className="inputs">
                            <input
                              //  onChange={props.handleInputChange}
                              //  value="username"
                              value={this.state.title}
                              name="title"
                              onChange={this.handleInputChange}
                              type="text"
                              className="form-control"
                              placeholder="Event Title"
                              id="title" />

                            <input
                              //  onChange={props.handleInputChange}
                              //  value="username"
                              value={this.state.date}
                              name="date"
                              onChange={this.handleInputChange}
                              type="text"
                              className="form-control"
                              placeholder="Event Date"
                              id="date" />

                            <label className="event_sm_title">Please Describe the Event</label>
                            <textarea
                              value={this.state.summary}
                              onChange={this.handleInputChange}
                              className="form-control"
                              name="summary"
                              id="summary"
                              cols="30"
                              rows="4">
                            </textarea>

                          </div>

                          <div className="text-center">
                            <button className="button radius signupBtn" onClick={this.handleFormSubmit}>Sumbit</button>
                          </div>

                        </form>

                      </div>

                    </div>
                  </div>
                </div>

              </Zoom>

            </div>

          </div>

        </div>
      </Slide>

    )

  }

};


export default CreateEvent;