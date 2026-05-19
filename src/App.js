
import React, { useState } from "react";
import "./style.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>

      <div className="number-box">
        {randomNumber === null ? (
          <p>No number generated yet</p>
        ) : (
          <h2>{randomNumber}</h2>
        )}
      </div>

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;