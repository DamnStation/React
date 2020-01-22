import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import FirstLesson from "./components/FirstLesson";
import MyInfoComponent from "./components/MyInfoComponent";
import LessonThree from "./components/LessonThree";
import JokeLesson from "./components/JokeLesson";
import Products from "./components/Products";
import StatePractice from "./components/StatePractice";
import TravelForm from "./components/TravelForm";
ReactDOM.render(<FirstLesson />, document.getElementById("firstLessonId"));
ReactDOM.render(
  <MyInfoComponent />,
  document.getElementById("myInfoComponentId")
);
ReactDOM.render(<LessonThree />, document.getElementById("lessonThreeId"));
ReactDOM.render(<Products />, document.getElementById("ProductsId"));
ReactDOM.render(<JokeLesson />, document.getElementById("jokeLessonId"));
ReactDOM.render(<StatePractice />, document.getElementById("StatePracticeId"));
ReactDOM.render(<TravelForm />, document.getElementById("TravelFormId"));
