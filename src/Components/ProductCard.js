import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, description, imageUrl }) => (
    <Card style={{ width: '18rem' }} className="mx-auto my-5">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
);

export default ProductCard;
