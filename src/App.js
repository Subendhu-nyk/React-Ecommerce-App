import { Fragment } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import CarouselSlider from './Component/Carousel/Carousel';
import AvailableProducts from './Component/Products/AvailableProducts';
import Footer from './Component/Layout/Footer';
import FooterCartButton from './Component/Layout/FooterCartButton';

function App() {
  return (
    <Fragment>
      <Header/> 
      <CarouselSlider/>
      <AvailableProducts/> 
      <FooterCartButton/>
      <Footer/>
    </Fragment>    
    );
}

export default App;
