type InputProps = {
  number: number;
};

function Input(props: InputProps) {
  return (
    <div>
      <input
        className="number-input text-center"
        type="number"
        value={props.number}
      />
    </div>
  );
}

export default Input;
