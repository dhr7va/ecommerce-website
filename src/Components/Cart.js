import React, { useContext } from 'react';
import { Offcanvas, ListGroup, Button, Image } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const Cart = ({ cartVisible, onClose }) => {
    const { cartState } = useContext(CartContext);
    const { cartItems } = cartState;

    return (
        <Offcanvas show={cartVisible} onHide={onClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.length > 0 ? (
                    <ListGroup variant="flush">
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex align-items-center">
                                <Image src={item.imageUrl} rounded style={{ width: '50px', height: '50px' }} />
                                <div className="ms-3">
                                    <h5>{item.title}</h5>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;
