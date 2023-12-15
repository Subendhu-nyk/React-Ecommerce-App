import React, { useState,useEffect } from 'react'
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
    
    const postCartData = (updatedItems) => {
      fetch('http://localhost:5000/user/add-product', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token
          },
          body: JSON.stringify({ items: updatedItems })
      })
      .then(response => response.json())
      .then(data => console.log('Cart updated:', data))
      .catch(error => console.error('Error updating cart:', error));
  };

  useEffect(() => {
    fetch('http://localhost:5000/user/get-product', {
        headers: {
            'Authorization': token
        }
    })
    .then(response => response.json())
    .then(data => {
      console.log("fetch get request",data.allProduct)
        updateItems(data.allProduct);        
        setQuantity(data.allProduct.length);
    })
    .catch(error => console.error('Error fetching cart data:', error));
}, [token]);

    
    const addItemToCartHandler=item=>{
        updateItems([...items,item])  
        setQuantity(quantity+1)      
        postCartData(item);
    }
   

    const removeItemFromHandler=id=>{
      // alert(id)
      const updatedItems=items.filter((item)=>item.id!==id)
      updateItems(updatedItems)
      setQuantity(quantity-1) 
      removeItem(id)
    }

    const removeItem = (id) => {
      fetch(`http://localhost:5000/user/delete-product/${id}`, {
          method: 'DELETE',
          headers: {
              'Authorization': token
          }
      })
      .then(response => response.json())
      .then(data => console.log('Item removed:', data))
      .catch(error => console.error('Error removing item:', error));
  };


  

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