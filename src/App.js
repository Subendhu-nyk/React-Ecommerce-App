import { Route,Switch} from "react-router-dom";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import { Fragment, useContext, useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import ProductDetail from "./Pages/ProductDetail";
import Header from "./Component/Layout/Header/Header";
import Cart from "./Component/Cart/Cart";
import CartContext from "./Store/CartContext";
import Auth from "./Pages/Auth";

const DUMMY_PRODUCTS = [
  {  
        "id": 1,
        "title": "Jeans Allen Solly",
        "category": "Mens",
        "category_id": 1,
        "price": 2000,
        "Size": "XX",
        imageUrl: "https://i.ibb.co/zRKT2yV/download-1.jpg",
        "Color": "Blue",
        "Brand": "Allen Solly"
    },
    {
        "id": 2,
        "title": "Men's Shirt Tomy Hilfiger",
        "category": "Mens",
        "category_id": 1,
        "price": 1200,
        "Size": "M",
        "imageUrl": "https://i.ibb.co/7bJHyHy/sm4.jpg" ,
        "Color": "Fern",
        "Brand": "Tomy Hilfiger"
    },
    {
        "id": 3,
        "title": "Men's Shirt Levi's",
        "category": "Mens",
        "category_id": 1,
        "price": 1300,
        "Size": "M",
        "imageUrl": "https://i.ibb.co/KDWj1HQ/sm5.jpg" ,
        "Color": "BLue-White",
        "Brand": "Levi's"
    },
    {
        "id": 4,
        "title": "Jeans Levi's",
        "category": "Mens",
        "category_id": 1,
        "price": 3000,
        "Size": "X",
        imageUrl: "https://i.ibb.co/Z6m393Y/download-2.jpg",
        "Color": "Black",
        "Brand": "Levi's"
    },
    {
        "id": 5,
        "title": "Women's Jeans(Lee)",
      "category": "Womens",
      "category_id": 1,
       "price": 1000,
      "Size": "M",
      "imageUrl":"https://i.ibb.co/k0mKWfx/wj7.jpg" ,
      "Color": "BLue",
      "Brand": "Lee"
    },
    {
        "id": 6,
        "title": "Women's Jeans(Levi's)",
        "category": "Womens",
        "category_id": 1,
       "price": 1600,
       "Size": "S",
       "imageUrl": "https://i.ibb.co/bF0JH6S/w9.jpg" ,
       "Color": "BLack",
       "Brand": "Levi's"
    },
    {
        "id": 7,
        "title": "Women's Shirt(Peter England)",
      "category": "Womens",
      "category_id": 1,
      "price": 1500,
      "Size": "M",
      "imageUrl": "https://i.ibb.co/sj3c7kG/sw6.jpg",
      "Color": "Arctic",
      "Brand": "Peter England"
    },
    {
        "id": 8,
        "title": "Women's Shirt(Wills)",
      "category": "Womens",
      "category_id": 1,
      "price": 2000,
      "Size": "S",
      "imageUrl": "https://i.ibb.co/TgtGYr9/sw7.jpg",
      "Color": "Periwinkle",
      "Brand": "Wills Lifestyle"
    },
      
];

function App() { 
  const cartCtx=useContext(CartContext)
  console.log("in App cartctx",cartCtx)
  const [cartIsShown,setCartIsShown]=useState(false)
  
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  
  return (
   
     
      <Fragment>   
         
       {cartIsShown && <Cart DUMMY_PRODUCTS={DUMMY_PRODUCTS} onClose={hideCartHandler}/>}
      <Header DUMMY_PRODUCTS={DUMMY_PRODUCTS} onShowCart={showCartHandler}/> 
      <Switch>
       <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/Store">
      <Store DUMMY_PRODUCTS={DUMMY_PRODUCTS} />
      </Route>
      <Route path="/About">
      <About/>
      </Route>
      <Route path="/Login">
      <Auth/>
      </Route>
      <Route path="/Contact">
      <Contact/>
      </Route>
      <Route path='/products/:productId'>
      <ProductDetail DUMMY_PRODUCTS={DUMMY_PRODUCTS}/>
      </Route>     
      </Switch>
      </Fragment>
        
    
    );
}

export default App;
