import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import './scss/style.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'

import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
)

reportWebVitals()
