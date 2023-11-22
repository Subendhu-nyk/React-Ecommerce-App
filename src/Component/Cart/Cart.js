import React, { useContext, useEffect, useState } from "react";
import HeaderCard from "../UI/Card";
import CartButton from "../UI/Button";
import classes from './CartModal.module.css'
import { Col } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart=props=>{  
  const cartCtx=useContext(CartContext)

  const purchaseChartHandler=()=>{
    (cartCtx.items.length===0)?alert("You have Nothing in Cart , Add some products to purchase !"):alert('Thanks for the purchase')
  }
  
  const [total,setTotal]=useState(0)
  useEffect(() => {
    const newTotal = cartCtx.items.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cartCtx.items]);


  console.log("cart ctx",cartCtx)
  const cartItems = (
    <ul className={`${classes['cart-items']} ${classes['cart-items-scrollable']}`}>
        {cartCtx.items.map((item)=>(
       <CartItem key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl} price={item.price}  />
      //  onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item.id)}
    ))}    
    </ul>
  );
    

    




return(
    <div>
        <div className={classes.backdrop} onClick={props.onClose}></div>
        
    <HeaderCard className={`${classes.modal} bg-white rounded-2 px-0`} >
            <Col md={12} variant='primary' className="bg-primary text-center py-2 text-white">
            <h2>Cart Summary</h2>
            </Col>
            
        <Col className={classes.content}>
        {cartItems}
        <div className={classes.total}>        
        <span>Total Amount</span>
        <span>{total}</span>
        </div>
        </Col>
        <footer className={classes.actions}>
        <CartButton onClick={props.onClose} variant="outline-warning" className="me-2">Close</CartButton>
         <CartButton onClick={purchaseChartHandler} variant="outline-success" className="me-4">Purchase</CartButton>
        </footer>
    </HeaderCard>
    </div>
)
}

export default Cart;