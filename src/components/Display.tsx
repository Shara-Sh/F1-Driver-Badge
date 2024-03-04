type Display = {
  number: number;
  name: string;
  style?: React.CSSProperties;
  color: string;
};

function Display(props: Display) {
  return (
    <div style={{ backgroundColor: props.color }} className="display d-flex">
      <p className="display-number flex-fill text-center">{props.number}</p>
      <div>
        <p style={{ color: props.color }} className="display-name">
          {props.name}
        </p>
      </div>
    </div>
  );
}

export default Display;
