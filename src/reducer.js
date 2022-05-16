import { CLEAR_CART, DECREASE, INCREASE } from './actions'
import cartItems from './cart-items'

export const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
}

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        total: 0,
        amount: 0,
      }
    default:
      return state
  }
}

export default reducer
