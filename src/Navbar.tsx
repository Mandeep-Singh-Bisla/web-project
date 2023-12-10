interface Props {
  cartItemsCount: number;
}
const Navbar = ({ cartItemsCount }: Props) => {
  return <div>Cart Items Count {cartItemsCount}</div>;
};

export default Navbar;
