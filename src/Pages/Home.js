import Header from '../Component/Layout/Header/Header';
import Footer from '../Component/Layout/Footer/Footer';
import CartProvider from '../Store/CartProvider';
import HomeBody from '../Component/Layout/HomeBody/HomeBody';

function Home() {  

  return (
    <CartProvider>      
      <Header/> 
      <HomeBody/>            
      <Footer/>
    </CartProvider>    
    );
}

export default Home;
