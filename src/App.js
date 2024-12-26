import "./style.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";


function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculator = () => {
    if (input.trim ()=== "") {
      setResult("Error: Incomplete expression");
    } else {
      try {
        setResult(evaluate(input));
      } catch (error) {
        setResult("error");
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="inputbox">
        <input type="text" value={input} readOnly/>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (item === "=") {
                handleCalculator();
              } else if (item === "C") {
                handleClear();
              } else {
                handleClick(item);
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
