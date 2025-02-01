import React, { useEffect } from 'react'
import { useState } from 'react'
import { data, Link } from 'react-router-dom'

const Productlisting = () => {

  const [products, setProducts] = useState([])
  console.log(products)

    useEffect(() => {
      fetch("https://dummyjson.com/products").then((response) => response.json()).then
      ((data)=>setProducts(data.products))
    }, [])
  
  return (
    <div>
      <h2>Product Listing</h2>
      <div className='product-grid'>
        {products?.map((product) => (
          <div key={product.id} className='product-card'>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{ product.title}</h3>
            </Link>
            </div>
        ))}
      </div>
    </div>
  )


}
export default Productlisting
