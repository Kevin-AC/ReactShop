import { useState } from 'react'

const initialState = {
  cart: []
}
const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addTocart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }
  const removeFronCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    })
  }

  return {
    state,
    addTocart,
    removeFronCart
  }
}
export default useInitialState
