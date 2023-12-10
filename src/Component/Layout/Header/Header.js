import React, { Fragment, useContext } from 'react'
import HeaderCard from '../../UI/Card'
import { Navbar, NavbarBrand,Nav,Col} from 'react-bootstrap'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import MenuBar from './MenuBar'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import CartContext from '../../../Store/CartContext'



const Header = (props) => {
  const cartCTX=useContext(CartContext) 
  const params=useParams();   

  const location = useLocation();
  const isStorePage = location.pathname === '/Store';
  const isProductPage = location.pathname.startsWith('/products/');

   return (
    <Fragment>
           
    <Navbar bg="primary" variant='dark' >
        <HeaderCard className="d-block">
          <Col  md={3} className='mx-5'>
            <NavbarBrand href="#" className={classes.logo} style={{ color:'yellow', fontFamily: "'Playfair Display', serif"}}>BestBuy</NavbarBrand>
          </Col>
          <Col md={8}>
            <Nav className="mt-2 fs-5"> 
            <HeaderCard>
              <Col md={8} className='d-flex justify-content-end'>
              <MenuBar/>
              </Col>
              <Col md={4} className='d-flex justify-content-center'>
              {(isProductPage||isStorePage) && (
                  <Col md={4} className='d-flex justify-content-center'>
                    <HeaderCartButton  onClick={props.onShowCart} />
                  </Col>
                )}
              </Col>              
            </HeaderCard>             
            </Nav>           
          </Col>
        </HeaderCard>
    </Navbar>  
   </Fragment>
  )
}

export default Header;