import React from "react";
import HeaderCard from "../UI/Card";
import CartButton from "../UI/Button";
import classes from './CartModal.module.css'
import { Col } from "react-bootstrap";

const Cart=props=>{
  

  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: '1', title: 'Jeans', quantity: 1, price: 2000 }].map((item) => (
        <li>{item.title}</li>
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
        <div className={classes.total}>
        {cartItems}
        <span>Total Amount</span>
        <span>35.62</span>
        </div>
        </Col>
        <footer className={classes.actions}>
        <CartButton onClick={props.onClose} variant="outline-warning" className="me-2">Close</CartButton>
         <CartButton onClick={props.onConfirm} variant="outline-success" className="me-4">Purchase</CartButton>
        </footer>
    </HeaderCard>
    </div>
)
}

export default Cart;