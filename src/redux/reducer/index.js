import {combineReducers} from 'redux'

import items from './menu'
// import items from './items'
import restaurants from './restaurant'
import carts from './cart'
import login from './login'
import register from './register'
import categories from './categories'
import reviews from './review'
const appReducer = combineReducers({
  items,
  restaurants,
  carts,
  login,
  register,
  categories,
  reviews
})

export default appReducer
