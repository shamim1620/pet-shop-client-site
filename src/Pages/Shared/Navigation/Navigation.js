import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">PET SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        {
                            user.email ? <Form className="d-flex">
                                <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                                <Button onClick={logOut} variant="outline-success">Logout</Button>
                            </Form>
                                :
                                <Form className="d-flex">
                                    <Nav.Link as={NavLink} to="/login"><Button variant="outline-success">Login</Button></Nav.Link>

                                </Form>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;