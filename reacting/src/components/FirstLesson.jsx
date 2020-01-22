import React, { Component } from "react";

class FirstLesson extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container p-3 my-3 bg-dark text-white box-shadow d-flex justify-content-center">
          <h1>First Lesson</h1>
        </div>
        <div className="container p-3 my-3 bg-primary text-white box-shadow d-flex justify-content-center">
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default FirstLesson;
