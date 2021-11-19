import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Row>
                <Col xs="6" lg="3">
                    <h1>PetShop</h1>
                    <br />
                    <div className="d-flex align-items-center">All Rights Reserved © petshop.com 2021
                        Address : BA-2/3/A (1st Floor), South Badda (Near Sahaba Mosque via Police Plaza Bypass Road), Hatir Jheel, Dhaka – 1212, Bangladesh.
                        Phone / Whatsapp : +88 01782 123456</div>
                </Col>
                <Col xs="6" lg="3">
                    <h2>Contact Us</h2>
                    <br />
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h3 className="p-3"><i class="fas fa-phone-alt"></i></h3>
                        </div>
                        <div>
                            <p>+8801795485747</p>
                            <p>+8801786009537</p>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h3 className="p-3"><i class="fas fa-envelope-open-text"></i></h3>
                        </div>
                        <div>
                            <a>info@petshop.com</a>
                            <br />
                            <a>petshome@petshop.com</a>
                        </div>
                    </div>
                </Col>
                <Col xs="6" lg="3">
                    <h2>Suppoort</h2>
                    <br />
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Our Blog </p>
                    <p>Offer</p>
                </Col>
                <Col xs="6" lg="3">
                    <h2>We Accepts:</h2>
                    <br />
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3">
                            <h1><i class="fab fa-cc-visa"></i></h1>
                            <h1><i class="fab fa-cc-mastercard"></i></h1>
                        </div>
                        <div>
                            <h1><i class="fab fa-cc-paypal"></i></h1>
                            <h1><i class="far fa-money-bill-alt"></i></h1>
                        </div>
                    </div>
                </Col>
                <hr></hr>
            </Row>

        </div>
    );
};

export default Footer;