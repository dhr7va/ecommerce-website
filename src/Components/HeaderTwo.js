import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderTwo() {
    return (
        <>
            <Navbar
                className="mx-auto"
                style={{
                    backgroundColor: '#6c757d',
                    color: '#ffffff',
                    padding: '10px 0',
                    textAlign: 'center'
                }}
            >
                <Container>
                    <Navbar.Brand
                        style={{
                            color: '#ffffff',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        THE GENERICS
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderTwo;
