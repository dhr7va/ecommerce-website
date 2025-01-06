import React, { useContext } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Header = ({ onCartClick }) => {
    const { cartState } = useContext(CartContext);
    const { totalQuantity } = cartState;

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">The Generics</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/store">
                            Store
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={onCartClick} style={{ cursor: 'pointer' }}>
                            <FaShoppingCart size={20} />
                            {totalQuantity > 0 && (
                                <Badge bg="danger" className="ms-1" style={{ fontSize: '0.75em' }}>
                                    {totalQuantity}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
