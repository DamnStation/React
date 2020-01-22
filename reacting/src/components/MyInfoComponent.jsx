import React, { Component } from "react";

class MyInfoComponent extends Component {
  constructor() {
    super();
    this.state = {
      showHide: false
    };
  }
  showHide() {
    this.setState({
      showHide: !this.state.showHide
    });
  }
  render() {
    return (
      <React.Fragment>
        <hr />
        <div className="container p-3 my-3 bg-dark text-white box-shadow d-flex justify-content-center">
          <h1>My Info Component</h1>
        </div>
        <div className="container p-3 my-3 border box-shadow d-flex justify-content-center">
          <h2>WinG</h2>
        </div>
        <div className="container p-3 my-3 bg-primary text-white box-shadow d-flex justify-content-center">
          <p>Hello I am a PRO player at:</p>
        </div>
        <div className="container p-3 my-3 bg-primary text-white box-shadow d-flex justify-content-center">
          <ul>
            <li>LoL</li>
            <li>Fortnite</li>
            <li>CS</li>
          </ul>
        </div>
        <div className="form box-shadow d-flex justify-content-center">
          <i>Some Extra ;)</i>
        </div>
        <div className="box-shadow d-flex justify-content-center">
          <button
            className="btn btn-outline-info"
            onClick={() => this.showHide()}
          >
            Press Me
          </button>
        </div>
        <div className="box-shadow d-flex justify-content-center">
          {this.state.showHide ? <h1>"Lammster is bot"</h1> : null}
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default MyInfoComponent;
