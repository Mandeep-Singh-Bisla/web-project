interface Props {
  cartItems: string[];
  onClear: () => void;
}
const cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      {cartItems.map((item) => (
        <li>{item}</li>
      ))}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default cart;
