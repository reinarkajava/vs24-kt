import React, { createContext, useReducer, useEffect } from "react";
 
 const CartContext = createContext();
 
 const cartReducer = (state, action) => {
   switch (action.type) {
     case "ADD_ITEM":
       return [...state, action.item];
     case "REMOVE_ITEM":
       return state.filter((item) => item.id !== action.id);
    case "RESET CART":
        return [];
     default:
       return state;
   }
 };
 
 export const CartProvider = ({ children }) => {
   const [cart, dispatch] = useReducer(cartReducer, []);
 
   useEffect(() => {
     console.log("Cart items:", cart);
   }, [cart]);
 
   return (
     <CartContext.Provider value={{ cart, dispatch }}>
       {children}
     </CartContext.Provider>
   );
 };
 
 export default CartContext;