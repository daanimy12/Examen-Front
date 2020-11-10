import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductsId } from '../Services'
const Details = () => {

  const { id } = useParams();
  const [product, setProducts] = useState({})

  useEffect(() => {

    async function loadProducts() {
      const response = await getProductsId(id);
      if (response.status === 200) {
        const data = response.data.order;
        setProducts(data)
      }
      return response;
    }
    loadProducts()
  }, [id])


  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container">
        <article className="message is-warning">
          <div className="message-header">
            <p>{product.name}</p>
          </div>
          <div className="message-body">
            <p>id: {product.id}</p>
          </div>
        </article>
        <Link to="/">
          <button className="button is-rounded">Go home</button>
        </Link>
      </div>
    </div>

  )
}

export default Details;