import { useState } from 'react';

import Header from '../Component/Layout/Header/Header';
import CarouselSlider from '../Component/Carousel/Carousel';
import AvailableProducts from '../Component/Products/AvailableProducts';
import Footer from '../Component/Layout/Footer/Footer';
import CartProvider from '../Store/CartProvider';

function Home() {  

  return (
    <CartProvider>      
      <Header/> 
      <CarouselSlider/>
      <AvailableProducts/>       
      <Footer/>
    </CartProvider>    
    );
}

export default Home;
