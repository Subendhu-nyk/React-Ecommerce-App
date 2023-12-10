import React, { Fragment, useContext} from 'react'
import {Badge } from 'react-bootstrap'
import CartButton from '../../UI/Button'
import CartContext from '../../../Store/CartContext'
import CartProvider from '../../../Store/CartProvider'

const HeaderCartButton = (props) => { 
  const cartCtx=useContext(CartContext)  
  // let quantity=0;
  // cartCtx.items.forEach(item=>{
  //   quantity=quantity+Number(item.quantity)
  // })

  return (
    <Fragment>
   
    <CartButton variant="outline-warning" className='rounded-4' onClick={props.onClick}> Cart <Badge bg="success" className='text-white'>{cartCtx.quantity}</Badge>
              <span className="visually-hidden">unread messages</span></CartButton>
     
    </Fragment>
  )
}

export default HeaderCartButton