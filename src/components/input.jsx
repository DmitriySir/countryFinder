export const Input = (props) => {
  return (
    <input
      placeholder="введите значение"
      onChange={props.onChange}
      value={props.value}
    />
  );
};
