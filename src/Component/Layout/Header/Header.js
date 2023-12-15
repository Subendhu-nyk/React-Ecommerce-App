import React, { Fragment, useContext } from 'react'
import HeaderCard from '../../UI/Card'
import { Navbar, NavbarBrand,Nav,Col, Button} from 'react-bootstrap'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import MenuBar from './MenuBar'
import { useLocation,useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import CartContext from '../../../Store/CartContext'




const Header = (props) => {  
  const params=useParams();   
  const history=useHistory();
  const authCtx=useContext(CartContext)  
  const isLoggedIn=authCtx.isLoggedIn;

  const location = useLocation();
  const isStorePage = location.pathname === '/Store';
  const isProductPage = location.pathname.startsWith('/products/');

  const logoutHandler=()=>{
    authCtx.logout();
    history.replace('/Login')

  }

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
              <Col md={7} className='d-flex justify-content-end'>
              <MenuBar/>
              </Col>
              <Col md={5} className='d-flex justify-content-center'>
              {isLoggedIn && (<Button onClick={logoutHandler} variant='warning'>Logout</Button>)}
              {(isProductPage||isStorePage) && isLoggedIn &&  (
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