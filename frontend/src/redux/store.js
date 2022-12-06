import { createSlice, configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productsReducer } from './products/productsReducer'

const reducer = combineReducers({
  productList: productsReducer,
})

const middleWare = [thunk]

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
)

export default store
