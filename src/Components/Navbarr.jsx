import React from 'react'
import { Navbar , Container , Nav  } from 'react-bootstrap' ;

export default function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Shoppy</Navbar.Brand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Shop</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}




