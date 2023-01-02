import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer'

const middleWare = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare)),
)

export const persistor = persistStore(store)

export default { store, persistStore }
