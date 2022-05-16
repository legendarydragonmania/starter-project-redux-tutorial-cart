import {
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE,
  TOGGLE_AMOUNT,
  GET_TOTALS,
} from './actions'
import cartItems from './cart-items'

export const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
}

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
      total: 0,
      amount: 0,
    }
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    }
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 }
      }
      return item
    })

    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === DECREASE) {
    let tempCart = []
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id)
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 }
        }
        return item
      })
    }
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        cartTotal.amount += amount
        cartTotal.total += price * amount
        return cartTotal
      },
      { total: 0, amount: 0 }
    )
    return {
      ...state,
      total,
      amount,
    }
  }
  return state
}

export default reducer
