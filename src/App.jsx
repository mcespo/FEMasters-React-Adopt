const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
