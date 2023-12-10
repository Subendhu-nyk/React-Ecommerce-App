import React from 'react'
import HeaderCard from '../../UI/Card'
import CartButton from '../../UI/Button'
import { Col } from 'react-bootstrap'

const FooterCartButton = (props) => {
  return (
    <HeaderCard>
        <Col md={12} className='d-flex justify-content-center'>
        <CartButton variant="warning" className='rounded-4' onClick={props.onShowCart}>See The Cart</CartButton>
        </Col>
    </HeaderCard>
  )
}

export default FooterCartButton