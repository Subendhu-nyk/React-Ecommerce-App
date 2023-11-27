import React, { Fragment } from 'react'
import HeaderCard from '../../UI/Card'
import { Navbar, NavbarBrand,Nav,Col} from 'react-bootstrap'
import classes from '../Header/Header.module.css'
// import HeaderCartButton from './HeaderCartButton'
// import MenuBar from './MenuBar'



const Footer = (props) => {
  return (
    <Fragment>
    <Navbar className='py-5' bg="primary" variant='dark' >
        <HeaderCard className=" d-block">
          <Col  md={8} className='mx-5'>
            <NavbarBrand href="#" className={classes.logo}>BestBuy</NavbarBrand>
          </Col>
          <Col md={4}>
            <Nav className="mt-2 fs-5 justify-content-between">          
              {/* <MenuBar/>              */}
            </Nav>           
          </Col>
        </HeaderCard>
    </Navbar>
   </Fragment>
  )
}

export default Footer;