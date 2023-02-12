import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'

const middleWare = [thunk]

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(...middleWare)),
)

export const persistor = persistStore(store)

export default { store, persistStore }
