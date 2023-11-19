import React, { Fragment} from 'react'
import {Badge } from 'react-bootstrap'
import CartButton from '../../UI/Button'


const HeaderCartButton = (props) => { 

  return (
    <Fragment>
      
    <CartButton variant="outline-warning" className='rounded-4' onClick={props.onClick}> Cart <Badge bg="success" className='text-white'>{0}</Badge>
              <span className="visually-hidden">unread messages</span></CartButton>
    {/* <Button variant="outline-warning" className='rounded-4'>        
              Cart <Badge bg="success" className='text-white'>9</Badge>
              <span className="visually-hidden">unread messages</span>
    </Button> */}
    </Fragment>
  )
}

export default HeaderCartButton