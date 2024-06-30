export const Button = (props) => {
  const { name, event, style } = props;
  return (
    <button onClick={event} style={style}>
      {name}
    </button>
  );
};
