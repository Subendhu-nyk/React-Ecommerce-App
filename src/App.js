import { Fragment,useState } from 'react';
import './App.css';
import Header from './Component/Layout/Header/Header';
import CarouselSlider from './Component/Carousel/Carousel';
import AvailableProducts from './Component/Products/AvailableProducts';
import Footer from './Component/Layout/Footer/Footer';
import FooterCartButton from './Component/Layout/Footer/FooterCartButton';
import Cart from './Component/Cart/Cart';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/> 
      <CarouselSlider/>
      <AvailableProducts/> 
      <FooterCartButton onShowCart={showCartHandler}/>
      <Footer/>
    </Fragment>    
    );
}

export default App;
