import React, { useState } from "react";
import Display from "./components/Display";
// import Input from "./components/Input";

function App() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("F1");
  const [color, setColor] = useState("#e8002d");

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = parseInt(e.target.value);
    const clampedValue = Math.max(0, Math.min(99, numberValue));
    setNumber(clampedValue);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue = e.target.value.toUpperCase().slice(0, 3);
    setName(nameValue);
  };

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <Display number={number} name={name} color={color} />
      <div className="d-flex align-items-center">
        <input
          className="number-input text-center"
          type="number"
          value={number}
          onChange={onNumberChange}
        />
        <input
          className="name-input text-center"
          type="text"
          value={name}
          onChange={onNameChange}
        />
        <input type="color" value={color} onChange={onColorChange} />
      </div>
    </div>
  );
}

export default App;
