import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import cat from '../../../images/cat.jpg';
import dog from '../../../images/dog.jpg';
import bird from '../../../images/bird.jpg';
import './Bannar.css';


const Bannar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-img">
                    <img
                        className="d-block w-100"
                        src={cat}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-img">
                    <img
                        className="d-block w-100"
                        src={dog}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-img">
                    <img
                        className="d-block w-100"
                        src={bird}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Bannar;