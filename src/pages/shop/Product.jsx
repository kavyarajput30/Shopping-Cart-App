import './Product.css';
import { ShopContext} from "../../context/ShopContext";
import { useContext } from 'react';
const Product = (props) =>{
    
    const {id , productName,price,productImage} = props.info;
    const {addToCart,cartItems} = useContext(ShopContext);
   const cartItemsAmout = cartItems[id];
   
   
   
    return(
        <div id="product-card">
      
      <img src={productImage} alt="" />
      <h3 id="product-name">{productName}</h3>
      <h3 id="product-price">{price}</h3>
      <button className='btn' onClick={() =>addToCart(id)}>
        Add to Cart {cartItemsAmout > 0 && <> ({cartItemsAmout}) </>}</button>
        </div>
    )
}

export default Product;