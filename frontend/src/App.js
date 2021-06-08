import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx';

function App() {
  return (
    <div>
      
        
        <Header className = "py-3" />
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      
    </div>
  );
} 

export default App;
