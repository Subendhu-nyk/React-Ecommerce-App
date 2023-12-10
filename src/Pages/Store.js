import { Fragment, useState } from 'react';
import CarouselSlider from '../Component/Carousel/Carousel';
import AvailableProducts from '../Component/Products/AvailableProducts';
import Footer from '../Component/Layout/Footer/Footer';
import FooterCartButton from '../Component/Layout/Footer/FooterCartButton';



function Store(props) {
  console.log("Store props",props)
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
      <Fragment>
      {/* {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>  */}
      <CarouselSlider/>
      <AvailableProducts DUMMY_PRODUCTS={props.DUMMY_PRODUCTS}/> 
      <FooterCartButton onShowCart={showCartHandler}/>
      <Footer/>
      </Fragment>
       
    );
}

export default Store;
