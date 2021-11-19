import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { _id, title, description, price, image_url } = props.product;
    return (
        <div>
            <Col>

                <Card>
                    <Card.Img variant="top" height="220px" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p className="text-primary"> {description}</p>
                            <p className="text-danger" >${price}</p>
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning">Add Cart</button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Cart;