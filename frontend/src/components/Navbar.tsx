import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Navbar
      className="py-3 navbar_container"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Tech Realm</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer className="navlink-container" to="/cart">
              <Nav.Link className="d-flex align-items-center">
                <AiOutlineShoppingCart size={25} />
                <span>Cart</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className="navlink-container" to="/signin">
              <Nav.Link className="d-flex align-items-center">
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
