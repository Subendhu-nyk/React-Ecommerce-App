import React from 'react'
import HeaderCard from '../UI/Card'
import CartButton from '../UI/Button'
import { Col } from 'react-bootstrap'

const FooterCartButton = () => {
  return (
    <HeaderCard>
        <Col md={12} className='d-flex justify-content-center my-4'>
        <CartButton variant="warning" className='rounded-4'>See The Cart</CartButton>
        </Col>
    </HeaderCard>
  )
}

export default FooterCartButton