import React,{useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Component/Layout/Footer/Footer';
import Product from './Product';
import CartContext from '../Store/CartContext';



const ProductDetail = (props) => {
  const cartCtx=useContext(CartContext)
  const [cartIsShown,setCartIsShown]=useState(false)  

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  const params=useParams();  
  
  return (
    <section> 
        
        {/* {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/> */}
        <Product onShowCart={showCartHandler}/>
        <Footer/>       
      
    </section>
  )
}

export default ProductDetail