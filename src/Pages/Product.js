import React, { Fragment,useContext } from 'react'
import HeaderCard from '../Component/UI/Card'
import { Col,Button } from 'react-bootstrap'
import classes from './Product.module.css'
import { useParams,useLocation} from 'react-router-dom'
import FooterCartButton from '../Component/Layout/Footer/FooterCartButton'
import CartContext from '../Store/CartContext'




const Product = (props) => {  
  const cartCtx=useContext(CartContext)
    const params=useParams(); 
    const location = useLocation(); 
    const product = location.state?.product;


    const addItemToCart=(event)=>{
      event.preventDefault()  
     
      const itemExists = cartCtx.items.some(item => item.title === product.title);
  
      if (!itemExists) {
        // Item not in cart, add the item
        cartCtx.addItem(product);
      } else {
        // Item already in cart, show alert message
        alert('This item is already added to the cart');
      }
    }



  return (
    <Fragment>            
        <HeaderCard>
        <Col md={2}></Col>
        <Col md={5} className={classes.boxzoom}>
            <div className={`${classes.productimages} d-flex align-items-center `}>
              <div className={`${classes.picZoomer} d-flex justify-content-center`}>
                 <img className="my_img" src={`${product.imageUrl}`} width='100%' alt=""/>
              </div>
           </div>
        </Col>
        <Col md={4}>
        <div className="px-2 my-4">
               <div className="text-info text-uppercase fs-5 fw-bold">
                   Category: {product.category}
               </div>
               <div className="text-bold my-3 fw-bold fs-1" id="productname">
                 {product.title} 
               </div>
               <div><h5>(Sunrise Beige) </h5></div>


               <div className="my-4">
                   {/* <p className="mb-1"><del>₹26,999</del> <span class="old-price-discount text-danger">(7% off)</span></p> */}
                   <p className="fw-bold mb-1" id="productprice">₹{product.price}</p>
                   <p className="text-secondary py-1 fs-5">+ ₹59 Secured Packaging Fee</p>
               </div>


               <div className="d-flex">
                <div className="m-0">            
                   <FooterCartButton onShowCart={props.onShowCart}/>                 
                 </div>
                   <div className="">
                   <Button variant="warning" onClick={addItemToCart}>Add to Cart</Button>
                   </div>
                   <div className="">
                    <div className="">
                      <div className=""></div>
                      <i className="fas fa-shopping-cart cartIcon"></i>
                    </div>
                   </div>

                   {/* <!-- <div className="">
                       <input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity"/>
                   </div> --> */}
               </div>

           </div>
        </Col>        
        </HeaderCard>   
    </Fragment>
  )
}

export default Product