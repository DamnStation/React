import React from "react";
import NavBarComponent from "./LessonThreeComponents/NavBarComponent";
import MainContentComponent from "./LessonThreeComponents/MainContentComponent";
import FooterComponent from "./LessonThreeComponents/FooterComponent";

function LessonThree() {
  return (
    <React.Fragment>
      <h1 className="container p-3 my-3 bg-dark text-white box-shadow d-flex justify-content-center">
        Lesson Thtee
      </h1>
      <div className="container p-3 my-3 border box-shadow d-flex">
        <NavBarComponent />
      </div>
      <div className="container p-3 my-3 bg-primary text-white box-shadow d-flex justify-content-center">
        <MainContentComponent />
      </div>
      <div className="jumbotron d-flex flex-row-reverse bd-highlight">
        <FooterComponent />
      </div>
    </React.Fragment>
  );
}

export default LessonThree;
