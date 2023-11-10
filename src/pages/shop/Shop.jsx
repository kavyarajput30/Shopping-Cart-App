import "./Shop.css";
import Products from "../../Products";
import Product from "./Product";

const Shop = () => {
  return (
    <div id="shop">
      <div className="shop-title">
        <h1>Kavya Shop</h1>
      </div>

      <div className="prod">
        {Products.map((prop) => {

         return <Product info={prop} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
