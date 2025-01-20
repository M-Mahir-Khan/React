import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams();
  // console.log(params);

 const mutation =  useMutation({
    mutationFn:(newProduct)=>{
      return axios.put(`https://dummyjson.com/products/${params.productId}`,newProduct)
    }
  })

  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
    const data = await response.json()
    return data
  }

  const { isLoading, error, data: product } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProduct,
    staleTime: 10000,
  })


  if (isLoading) {
    return <h1>Loading....</h1>
  }

  if (error) {
    return <h3>Error: {error.message}</h3>
  }


  return (
    <>
      <div>Product : {product.title}</div>
      <button
      onClick={()=>{
        mutation.mutate({title:"Updated product"})
      }}>
        Create product
      </button>
    </>
  )
}

export default Product