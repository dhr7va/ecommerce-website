import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ onCartClick }) => (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
            <Navbar.Brand href="#home">The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#store">Store</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link
                        onClick={onCartClick}
                        className="d-flex align-items-center"
                        style={{ cursor: 'pointer' }}
                    >
                        <FaShoppingCart size={20} />
                        {/* Hardcode a cart item count for now */}
                        <Badge bg="danger" className="ms-1" style={{ fontSize: '0.75em' }}>
                            3
                        </Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
