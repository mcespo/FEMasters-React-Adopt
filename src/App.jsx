import React from "react";
import {
  render
} from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    [
      React.createElement(Pet, {
        name: "Meli",
        animal: "Dog",
        breed: "Golden Retriever"
      }),
      React.createElement(Pet, {
        name: "Hutch",
        animal: "Bunny",
        breed: "Hotot Dwarf"
      }),
      React.createElement(Pet, {
        name: "Baldur",
        animal: "Rock",
        breed: "Common Pebble"
      })
    ]
  ]);
};

render(React.createElement(App), document.getElementById("root"));
