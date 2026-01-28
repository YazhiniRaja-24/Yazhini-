import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error))
  }, [])
  console.log(product)
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
export default ProductDetails
