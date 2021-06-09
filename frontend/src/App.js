import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen/ProductScreen.jsx';

function App() {
  return (
    <Router>
      
         
        <Header className = "py-3" />
        <main>
          <Container> 
            <Route exact path="/" component={HomeScreen} />
            <Route path = "/product/:id" component = {ProductScreen} />
          </Container>
        </main>
        <Footer />
      
    </Router>
  );
} 

export default App;
