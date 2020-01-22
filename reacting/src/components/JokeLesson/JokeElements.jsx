import React from "react";

function JokeElements(props) {
  return (
    <div>
      <h3 style={{ display: props.joke.jokeTitle ? "block" : "none" }}>
        {props.joke.jokeTitle}
      </h3>
      <p style={{ display: props.joke.jokeContent ? "block" : "none" }}>
        {props.joke.jokeContent}
      </p>
    </div>
  );
}

export default JokeElements;
