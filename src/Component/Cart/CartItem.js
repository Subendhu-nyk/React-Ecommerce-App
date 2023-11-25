import classes from './CartItem.module.css';
import CartButton from '../UI/Button';
import CartContext from '../../Store/CartContext';
import { useContext } from 'react';
import HeaderCard from '../UI/Card';
import { Col } from 'react-bootstrap';


const CartItem = (props) => {
 const cartCtx=useContext(CartContext)  
    
    

  const onRemoveHandler=()=>{    
    cartCtx.removeItem(props.id)
  }

  // ₹
  return (
    <li className={classes['cart-item']} >
      <HeaderCard>      
        <Col md={10} className='my-2'>
          <HeaderCard>
          <Col md={4}>
          <img src={props.imageUrl} alt='dress' style={{ width: '150px', height: '100px' }}/>
          </Col>
          <Col md={4}>
          <h5>{props.title}</h5>
          </Col>
          <Col md={2}>
          <span className={`${classes.price}`}>{`₹${props.price}`}</span>
          </Col>
          <Col md={2}>
          <span className={`${classes.amount} p-2`}>x 1</span>
          </Col>         
          </HeaderCard>        
        </Col>
        <Col md={2}>        
      <CartButton onClick={onRemoveHandler} variant="outline-danger" type='submit' className="me-4">Remove</CartButton>
        </Col>
      </HeaderCard>
      
    </li>
  );
};

export default CartItem;