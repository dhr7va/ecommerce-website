import React, { useState } from 'react';
import { Offcanvas, ListGroup, Button, Image } from 'react-bootstrap';

const Cart = ({ cartVisible, onClose }) => {
    const [cart, setCart] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        },
    ]);

    const handleRemoveFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <Offcanvas show={cartVisible} onHide={onClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.length > 0 ? (
                    <ListGroup variant="flush">
                        {cart.map((item, index) => (
                            <ListGroup.Item key={index} className="d-flex align-items-center">
                                <Image src={item.imageUrl} rounded style={{ width: '50px', height: '50px' }} />
                                <div className="ms-3">
                                    <h5>{item.title}</h5>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <Button
                                    variant="danger"
                                    className="ms-auto"
                                    onClick={() => handleRemoveFromCart(index)}
                                >
                                    Remove
                                </Button>
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
