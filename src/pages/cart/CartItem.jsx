import "./Cart.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems ,addToCart,removeFromCart,updateCartItemCount } = useContext(ShopContext);



  

  return (
    <div id="each-selectee-item">
      <img src={productImage} alt="" />
      <div>
        {" "}
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <div className="counter">
          <button onClick={()=>{removeFromCart(id)}}>-</button>
          <input value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
          <button onClick={()=>{addToCart(id)}}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
