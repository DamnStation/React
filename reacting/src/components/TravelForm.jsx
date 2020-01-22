import React, { Component } from "react";

class TravelForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      destination: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const { name, value, type, radio, option } = event.target;
    type === radio
      ? this.setState({ [name]: radio }) && this.setState({ [name]: option })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <form className="jumbotron p-5 my-3 border box-shadow d-flex justify-content-center">
          <h3>Enter your details.</h3>
          <hr />
          <label>
            First Name:
            <br />
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleClick}
              placeholder="First Name"
            ></input>
          </label>
          <br />
          <label>
            Last Name:
            <br />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleClick}
              placeholder="Last Name"
            ></input>
          </label>
          <br />
          <label>
            Date of birth:
            <br />
            <input
              type="date"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleClick}
            ></input>
          </label>
          <br />
          <label>
            Gender:
            <br />
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleClick}
            />
            <br />
            Female
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleClick}
            />
          </label>
          <br />
          <label>
            Destination:
            {/*TODO: Display Destination on card
            https://youtu.be/DLX62G4lc44?t=14169 */}
            <br />
            <select>
              <option
                type="option"
                name="destination"
                value="Sofia"
                onChange={this.handleClick}
              >
                Sofia
              </option>
              <option
                type="option"
                name="destination"
                value="Plovdiv"
                onChange={this.handleClick}
              >
                Plovdiv
              </option>
              <option
                type="option"
                name="destination"
                value="Varna"
                onChange={this.handleClick}
              >
                Varna
              </option>
              <option
                type="option"
                name="destination"
                value="Burgas"
                onChange={this.handleClick}
              >
                Burgas
              </option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
        <div className="jumbotron">
          <h1>Hello,</h1>
          <br />
          <b>
            <i>
              <h2>
                {this.state.firstName} {this.state.lastName}
              </h2>
            </i>
          </b>
          <br />
          <h3>
            you are <b>{this.state.gender}</b> born on
            <b>{this.state.dateOfBirth}</b>
            <br />
            and you will go to
            <b>{this.state.destination}</b>
          </h3>
        </div>
      </div>
    );
  }
}

export default TravelForm;
