import React, { Fragment, useContext } from "react";
import { Card,Button } from "react-bootstrap";
import CardImage from "../../UI/Image";
import CartContext from "../../../Store/CartContext";



const CardItem=(props)=> { 
  const cartCtx=useContext(CartContext)
  
 

  const addItemToCart=(event)=>{
    event.preventDefault()  
  
    const itemExists = cartCtx.items.some(item => item.title === props.title);

    if (!itemExists) {
      // Item not in cart, add the item
      
      cartCtx.addItem(props);
    } else {
      // Item already in cart, show alert message
      alert('This item is already added to the cart');
    }
  }
  
  const price=`₹${props.price.toFixed(2)}`
    return (
      <Fragment> 
            
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center pb-2">{props.title}</Card.Title>          
          <CardImage src={props.imageUrl} alt={props.title}/>
          <div className="d-flex justify-content-around pt-3">        
          <span className="text-decoration-none text-dark">{price}</span>
          <Button variant="warning" className='rounded-4' onClick={addItemToCart}>Add to Cart</Button>
          </div>  
        </Card.Body>
      </Card>
      
      </Fragment>
    );
  }
  
  export default CardItem;