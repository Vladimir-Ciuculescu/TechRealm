import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Header from './Header'
import Main from './Main'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
