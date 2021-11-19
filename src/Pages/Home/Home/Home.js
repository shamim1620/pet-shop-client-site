import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';

import Bannar from '../Bannar/Bannar';
import Blogs from '../Blogs/Blogs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Products></Products>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;