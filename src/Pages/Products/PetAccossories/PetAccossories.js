import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cart from '../../Shared/Cart/Cart';

const PetAccossories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <h2>Accossories</h2>
            {

                <Row xs={1} md={3} className="g-4">
                    {
                        products.type === 'accessories' && (
                            products.map(product =>
                                <Cart
                                    key={product.id}
                                    product={product}
                                ></Cart>

                            )

                        )


                    }

                </Row>

            }

        </div>
    );
};

export default PetAccossories;