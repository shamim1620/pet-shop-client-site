import React from 'react';
import Products from '../../Products/Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Bannar></Bannar>
            <Products></Products>

        </div>
    );
};

export default Home;