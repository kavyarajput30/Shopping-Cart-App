import "./Cart.css";
import Products from "../../Products";
import CartItem from "./CartItem";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div id="cart">
      <h1>Your cart Items</h1>
      <div>
        {Products.map((prop) => {
          if (cartItems[prop.id] !== 0) {
            return <CartItem data={prop} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div id="checkout">
          <p>Subtotal:{totalAmount}</p>
          <div>
            <button
              className="btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
            <button className="btn">Checkout</button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
      ;
    </div>
  );
};

export default Cart;
