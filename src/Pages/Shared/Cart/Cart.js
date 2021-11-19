import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Cart = (props) => {
    const { title, description, price, image_url } = props.product;
    return (
        <div>
            <Col>

                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p className="text-danger"> {description}</p>
                            <p className="text-danger" >{price}</p>
                        </Card.Text>
                        <button className="btn btn-warning">Add Cart</button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Cart;