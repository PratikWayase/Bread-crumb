import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

const productdetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`).then((Response) => Response.json()).then
    ((data)=>setProduct(data))
  }, [id])
  
  return (
    <div>
      <h2>Product Details Page</h2>
      {product ? (
        <div>
          <img src={product.thumbnail} alt='product' />
          <h3>{product.title}</h3>
          <h3>${product.price}</h3>
          <p>{ product.description}</p>
          </div>
      ) : (
          <p>Loading...</p>
      )}
    </div>
  )
}

export default productdetails;
