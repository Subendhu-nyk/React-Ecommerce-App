import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [items,updateItems]=useState([])    
    const [quantity,setQuantity]=useState(0)
    const initialToken=localStorage.getItem('ecomAuthToken')
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
      setToken(token);
      localStorage.setItem('ecomAuthToken',token)
    };
  
    const logoutHandler = () => {
      setToken(null);
      localStorage.removeItem('ecomAuthToken')
    };
    
    
    const addItemToCartHandler=item=>{
        updateItems([...items,item])  
        setQuantity(quantity+1)      
    }

    

    const removeItemFromHandler=id=>{
      // alert(id)
      const updatedItems=items.filter((item)=>item.id!==id)
      updateItems(updatedItems)
      setQuantity(quantity-1) 
    }

  

    const cartContext={
    items:items,
    totalAmount:0,
    quantity:quantity,  
    addItem:addItemToCartHandler,
    removeItem:removeItemFromHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    }
  
    return (
    <CartContext.Provider value={cartContext}>        
         {props.children}
    </CartContext.Provider>
    
  )
}

export default CartProvider