import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai'

const NavBar = () => {
  return (
    <Navbar className="py-3" bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">TechRealm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <AiOutlineShoppingCart size={25} />
              <span>Cart</span>
            </Nav.Link>

            <Nav.Link href="/signin">
              <AiOutlineLogin size={25} />
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
