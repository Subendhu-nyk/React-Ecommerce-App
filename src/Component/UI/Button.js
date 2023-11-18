import React from "react";
import { Button } from "react-bootstrap";

const CartButton=(props)=>{
return <Button variant={props.variant} className={props.className} type={props.type || 'button'} onClick={props.onClick}>{props.children}</Button>
}

export default CartButton;