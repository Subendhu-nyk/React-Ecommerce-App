import { useState } from 'react';

import Header from '../Component/Layout/Header/Header';
import CarouselSlider from '../Component/Carousel/Carousel';
import AvailableProducts from '../Component/Products/AvailableProducts';
import Footer from '../Component/Layout/Footer/Footer';
import FooterCartButton from '../Component/Layout/Footer/FooterCartButton';
import Cart from '../Component/Cart/Cart';
import CartProvider from '../Store/CartProvider';

function Store() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/> 
      <CarouselSlider/>
      <AvailableProducts/> 
      <FooterCartButton onShowCart={showCartHandler}/>
      <Footer/>
    </CartProvider>    
    );
}

export default Store;
