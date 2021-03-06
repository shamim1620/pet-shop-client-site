import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/reviews`)
            .then(res => {
                const gotProduct = res.data;
                setReviews(gotProduct);
            })
    }, [])

    return (
        <>

            <Container>
                <h1 className="border bg-info">Customer Review</h1>
                <Row>

                    {
                        reviews.slice(-6).map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)


                    }
                </Row>

            </Container>


        </>
    );
};



const Review = ({ review }) => {
    const { description, rating, name } = review;
    const rate = parseInt(rating)
    return (
        <Col md={4} className="border mx-5 my-3">

            <Card.Title>Review by {name}</Card.Title>
            <Card.Body >
                <Card.Text>
                    {description}
                </Card.Text>

                <Card.Text>
                    Rated by {name}
                    <br />
                    <Rating
                        initialRating={rate}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                </Card.Text>
            </Card.Body>

        </Col>

    );
};

export default Reviews;