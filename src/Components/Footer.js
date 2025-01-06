import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <footer className="bg-dark text-white text-center py-3">
        <Container>
            <Row>
                <Col>
                    <p>&copy; 2025 E-Commerce. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
