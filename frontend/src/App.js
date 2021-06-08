import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      
        
        <Header className = "py-3" />
        <main>
          <Container>
                        <h1>Hello to TechRealm</h1>
          </Container>
        </main>
        <Footer />
      
    </>
  );
} 

export default App;
