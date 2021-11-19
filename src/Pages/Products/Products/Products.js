import React from 'react';
import PetAccossories from '../PetAccossories/PetAccossories';
import PetFood from '../PetFood/PetFood';


const Products = () => {

    return (
        <div className="container m-5">
            <PetFood></PetFood>
            <PetAccossories></PetAccossories>

        </div>
    );
};

export default Products;