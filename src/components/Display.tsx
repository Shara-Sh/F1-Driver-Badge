import { useState } from "react";
type Display = {
  number?: number;
  name?: string;
  style?: React.CSSProperties;
  color?: string;
};

function Display(props: Display) {
  const [number, setNumber] = useState(44);
  const [name, setName] = useState("HAM");
  const [color, setColor] = useState("#27f4d2");
  const [isColorVisible, setIsColorVisible] = useState(false);

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

  const onMouseEnter = () => {
    setIsColorVisible(isColorVisible ? false : true);
  };

  const onMouseLeave = () => {
    setIsColorVisible(isColorVisible ? false : true);
  };
  return (
    <div
      style={{ backgroundColor: props.color || color }}
      className="display d-flex justify-content-between position-relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <input
        className="display-number text-center"
        type="number"
        value={number}
        onChange={onNumberChange}
      />
      <input
        style={{ color: props.color || color }}
        className="display-name text-center"
        type="text"
        value={name}
        onChange={onNameChange}
      />
      <input
        style={{ visibility: isColorVisible ? "visible" : "hidden" }}
        className="position-absolute colorpicker"
        type="color"
        value={color}
        onChange={onColorChange}
      />
    </div>
  );
}

export default Display;
