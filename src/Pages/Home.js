import Header from '../Component/Layout/Header/Header';
import Footer from '../Component/Layout/Footer/Footer';
import CartProvider from '../Store/CartProvider';
import HomeBody from '../Component/Layout/HomeBody/HomeBody';
import { Fragment } from 'react';

function Home(props) {  

  return (
      
      <Fragment>
      <HomeBody/>            
      <Footer/>
      </Fragment>
    );
}

export default Home;
