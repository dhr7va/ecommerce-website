import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const products = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
];

const ProductList = () => {
    const { cartDispatch } = useContext(CartContext);

    const addToCart = (product) => {
        cartDispatch({ type: 'ADD_TO_CART', payload: { product } });
    };

    return (
        <Row className="mt-4">
            {products.map((product, index) => (
                <Col key={index} md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={product.imageUrl} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>Price: ${product.price}</Card.Text>
                            <Button variant="primary" onClick={() => addToCart(product)}>
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
