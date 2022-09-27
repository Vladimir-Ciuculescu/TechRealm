import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Navbar className="py-3" bg="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>TechRealm</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <AiOutlineShoppingCart size={25} />
                <span>Cart</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>
                <AiOutlineLogin size={25} />
                Sign in
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
