import Header from '../Component/Layout/Header/Header';
import Footer from '../Component/Layout/Footer/Footer';
import CartProvider from '../Store/CartProvider';
import HeaderCard from '../Component/UI/Card';
import { Col } from 'react-bootstrap';
import img1 from '../Assets/cart.jpg'

function About() {  
  return (
    <CartProvider>      
      <Header/> 
    <HeaderCard>
        <Col md={12} className='text-center my-3'><h1>About us</h1></Col>
        <Col md={5}>
        <img src={img1} alt='cart' className='px-3 py-2' style={{width:'100%'}}/>
        </Col>
        <Col md={7}>
        <p style={{fontSize:'16px'}}>

<b>BestBuy Group: Revolutionizing Fashion Retail with a Digital Touch </b> <br/>

BestBuy Group stands as a prominent figure in the global digital retail landscape, encompassing a family of brands including BestBuy, StylePlus, BestBuy Wholesale, BestBuy FashionTech, and TrendJourney. The Group also holds a significant stake in PayFashion, a leading digital payment solution in the fashion industry.<br/>

Founded in 2022, BestBuy has been at the forefront of the fashion retail revolution, bringing together a diverse range of consumers, designers, artisans, and small businesses into the fold of digital commerce. With a customer base exceeding 300 million globally, BestBuy offers an extensive array of clothing accessories and fashion products, featuring over 100 million items across more than 50 specialized categories. Our mission to democratize fashion retail globally drives our efforts to enhance accessibility, affordability, and customer satisfaction, while creating thousands of jobs and empowering a new generation of fashion entrepreneurs and small-scale enterprises.<br/>

BestBuy is renowned for introducing groundbreaking services like Virtual Try-On, Fashion Forward Financing, and Hassle-Free Returns. These customer-focused innovations have not only made fashion more accessible but have also redefined the shopping experience for millions worldwide. Alongside its group companies, BestBuy is dedicated to transforming the fashion retail industry through cutting-edge technology.<br/>

Introducing "FashionFusion," BestBuy's latest initiative, designed to provide comprehensive support to emerging fashion brands. This program extends beyond mere financial assistance, offering marketing expertise, creative services, and strategies to minimize acquisition costs, thereby enabling new brands to rapidly advance to their next growth stage.<br/>

For more information on BestBuy's advertising opportunities, please contact us at fashionfusion@bestbuy.com.<br/>

Discover more about our advertising experiences at brands.bestbuy.com.<br/></p>
        </Col>
    </HeaderCard>            
      <Footer/>
    </CartProvider>    
    );
}

export default About;
