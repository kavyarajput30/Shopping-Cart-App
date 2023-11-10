import { createContext, useState } from "react"
import Products from "../Products";
export const ShopContext = createContext(null);

const getDefaultCart =() =>{
    let cart = {}
    for(let i =1; i<Products.length+1; i++){
        cart[i] = 0
    }
    return cart;
}
export const ShopContextProvider = (props) =>{
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}));
    };
    const removeFromCart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}));
     };

    const updateCartItemCount =(newAmount,itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:newAmount}));
    };

const getTotalCartAmount =()  =>{
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item] >0){
            let itemInfo = Products.find((product)=> product.id   === Number(item));
       totalAmount += cartItems[item] * itemInfo.price
       
       
        }
    }
    return totalAmount;
}

     const contextValue = {cartItems, addToCart, removeFromCart,updateCartItemCount,getTotalCartAmount};
     console.log(cartItems);
    return (
       <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}