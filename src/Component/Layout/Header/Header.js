import React, { Fragment } from 'react'
import HeaderCard from '../../UI/Card'
import { Navbar, NavbarBrand,Nav,Col} from 'react-bootstrap'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import MenuBar from './MenuBar'
import { useLocation } from 'react-router-dom';



const Header = (props) => {
  const location = useLocation();
  const isStorePage = location.pathname === '/Store';

   return (
    <Fragment>
    <Navbar bg="primary" variant='dark' >
        <HeaderCard className="d-block">
          <Col  md={3} className='mx-5'>
            <NavbarBrand href="#" className={classes.logo}>BestBuy</NavbarBrand>
          </Col>
          <Col md={8}>
            <Nav className="mt-2 fs-5"> 
            <HeaderCard>
              <Col md={8} className='d-flex justify-content-end'>
              <MenuBar/>
              </Col>
              <Col md={4} className='d-flex justify-content-center'>
              {isStorePage && (
                  <Col md={4} className='d-flex justify-content-center'>
                    <HeaderCartButton onClick={props.onShowCart} />
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