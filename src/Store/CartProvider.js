import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [items,updateItems]=useState([])    
    const [quantity,setQuantity]=useState(0)
    console.log("cart provider",items)
    
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
    removeItem:removeItemFromHandler
    }
  
    return (
    <CartContext.Provider value={cartContext}>        
         {props.children}
    </CartContext.Provider>
    
  )
}

export default CartProvider