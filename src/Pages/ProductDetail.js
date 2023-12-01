import React from 'react'
import { useParams,Route } from 'react-router-dom'

const ProductDetail = (props) => {
  const params=useParams();  
  console.log(params.productId)
  return (
    <section> 
        <h1>Product Detail</h1>
        <p>{params.productId}</p>
        <Route path='/products/:productId/new-user'>
        <h2>shirts</h2>
        </Route>
    </section>
  )
}

export default ProductDetail