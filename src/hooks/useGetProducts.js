import { useEffect, useState } from 'react'
import axios from 'axios'
function useGetProducts (API) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios(API)
    setProducts(response.data)
  }
  return products
}
export default useGetProducts
