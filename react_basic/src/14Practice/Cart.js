import { useContext } from "react";
import CartContext from "./Store/cart-context";
import CartItem from "./Cartitem";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, val) => acc + val.price, 0);

  return (
    <div>
      <h2>장바구니</h2>
      {cart.map((value) => {
        return <CartItem key={value.id} value={value} />;
      })}
      {totalPrice}
    </div>
  );
}
