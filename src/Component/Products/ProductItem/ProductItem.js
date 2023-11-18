import React, { Fragment } from "react";
import { Card,Button } from "react-bootstrap";
import CardImage from "../../UI/Image";

const CardItem=(props)=> {
    return (
      <Fragment>     
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center pb-2">{props.title}</Card.Title>          
          <CardImage src={props.imageUrl} alt={props.title}/>
          <div className="d-flex justify-content-around pt-3">        
          <Card.Link className="text-decoration-none text-dark">₹{props.price}</Card.Link>
          <Button variant="warning">Add to Cart</Button>
          </div>  
        </Card.Body>
      </Card>
      </Fragment>
    );
  }
  
  export default CardItem;