import React from "react";
import CardItem from "./ProductItem/ProductItem";
import HeaderCard from "../UI/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


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

  const mensProducts = DUMMY_PRODUCTS.filter(product => product.category === "Mens");
  const womensProducts = DUMMY_PRODUCTS.filter(product => product.category === "Womens");
  
  const RenderProductList = ({ products }) => {
    return (
      <>
        {products.map(product => (
          
          <Col key={product.id} md={3} className="d-flex justify-content-center my-3">
           <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
            <CardItem id={product.id} title={product.title} imageUrl={product.imageUrl} price={product.price} />
            </Link>
          </Col>
          
        ))}
      </>
    );
  };
  
  const AvailableProducts = (props) => {   
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
              <h2 className="text-center my-4">Women's Collections:</h2>
              <RenderProductList products={womensProducts} />
            </>
          )}
        </HeaderCard>
      </section>
    );
  }
  
  export default AvailableProducts;