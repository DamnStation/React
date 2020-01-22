import React, { Component } from "react";

class TravelForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      destination: "",
      isVegan: false,
      isLactoseFree: false,
      proteinMeal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const { name, value, type, radio, checkbox } = event.target;
    type === radio || type === checkbox
      ? this.setState({ [name]: radio || checkbox})
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <form className="jumbotron p-5 my-3 border box-shadow d-flex justify-content-center">
          <h3>Enter your details.</h3>
          <hr />
         <p><label>
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
          </p> 
           <br />
           <p>
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
           </p>
          <br />
          <p>
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
          </p>
          <br />
          <p>
          <label>
            Destination:
            {/*TODO: Display Destination on card
            https://youtu.be/DLX62G4lc44?t=14169 */}
            <br />
            <select 
            name="destination"
            value={this.state.destination}
            onChange={this.handleClick}>
              
              <option 
              value="Sofia"
              >
                Sofia
              </option>
              <option 
              value="Plovdiv"
              >
                Plovdiv
              </option>
              <option 
              value="Varna"
              >
                Varna
              </option>
              <option
              value="Burgas"
              >
                Burgas
              </option>
            </select>
            </label>
          </p>
            <br/>
            <div>
             <p>Menu:</p>
             <p>
               <label> Vegan Menu:{" "} 
              <input type="checkbox" name="isVegan" onChange={this.handleClick} />
              </label>
              </p> 
              <br/>
              <p>
                <label> Lactose Free Menu:{" "} 
                <input type="checkbox" name="isLactoseFree" onChange={this.handleClick} />
                </label>
              </p>
              <br/>
              <p>
                <label> Steak Menu:{" "}
                <input type="checkbox" name="proteinMeal" onChange={this.handleClick} />
                </label>
              </p>
            </div>
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
            <b> {this.state.dateOfBirth}</b>
            <br />
            and you will go to 
            <b> {this.state.destination} </b>
          </h3>
          <p>Your meal options are: 
          <p>{this.state.isVegan ? "Vegan Menu":"Non Vegan Menu"}</p>
          <p>{this.state.isLactoseFree ? "Lactose Free Menu":"Non Lactose Free Menu"}</p>
          <p>{this.state.proteinMeal ? "Protein Menu":"Non Protein Menu"}</p>
           </p>
        </div>
      </div>
    );
  }
}

export default TravelForm;
