import React from "react";
import CardItem from "./ProductItem/ProductItem";
import HeaderCard from "../UI/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


  const RenderProductList = ({ products }) => {  
    
    return (
      <>
        {products.map(product => (
          
          <Col key={product.id} md={3} className="d-flex justify-content-center my-3">
           <Link to={{
                pathname: `/products/${product.id}`,
                state: { product }
              }}  style={{ textDecoration: 'none' }}>
            <CardItem id={product.id} title={product.title} imageUrl={product.imageUrl} price={product.price} />
            </Link>
          </Col>
          
        ))}
      </>
    );
  };
  
  const AvailableProducts = (props) => {  
    const mensProducts = props.DUMMY_PRODUCTS.filter(product => product.category === "Mens");
    const womensProducts = props.DUMMY_PRODUCTS.filter(product => product.category === "Womens");
    
    return (
      <section>
        <HeaderCard>
          {mensProducts.length > 0 && (
            <>
              <h2 className="text-center my-4">Men's Collections:</h2>
              <RenderProductList products={mensProducts} />
            </>
          )}
          {womensProducts.length > 0 && (
            <>
              <h2 className="text-center my-5">Women's Collections:</h2>
              <RenderProductList products={womensProducts} />
            </>
          )}
        </HeaderCard>
      </section>
    );
  }
  
  export default AvailableProducts;