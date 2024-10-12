import "./App.css";
import { useState } from "react";

function App() {
  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [input, setInput] = useState("");
  const [meaning, setmeaning] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const HandleClick = (e) => {
    e.preventDefault();
    const text = input.toLowerCase();
    setInput(text);

    const match = dict.find((obj) => obj.word.toLowerCase() === text);

    if (match) {
      setmeaning(match.meaning);
    } else {
      setmeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={HandleClick}>
        <input type="text" value={input} onChange={handleChange} />{" "}
        <button type="submit">Search</button>
      </form>
      <h2>Definition:</h2>
      {meaning && <p> {meaning}</p>}
    </div>
  );
}

export default App;
