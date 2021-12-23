import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cartwidget from './Cartwidget';



function NavbarBs() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">OrdeNati</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#productos">Productos</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
      
        </Nav>
        <a href="  "><Cartwidget/></a>
    
    
    </Container>
       
  
  </Navbar>
        </div>
    )
}

export default NavbarBs
