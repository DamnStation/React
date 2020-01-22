import React from "react";

class StatePractice extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return {
        isLoggedIn: !this.state.isLoggedIn
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1 className="p-3 my-3 border box-shadow d-flex">
            You are currently logged In
          </h1>
        ) : (
          <h1 className="p-3 my-3 border box-shadow d-flex">
            You must log to see content on this page
          </h1>
        )}

        <button
          className=" p-3 my-3 border box-shadow d-flex "
          onClick={this.handleClick}
        >
          {this.state.isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    );
  }
}

export default StatePractice;
