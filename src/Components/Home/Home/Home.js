import React from 'react';
import Banner from '../Banner/Banner';
import Mobiles from '../Mobiles/Mobiles';
import Reviews from '../Reviews/Reviews';
import Videos from '../Videos/Videos';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mobiles></Mobiles>
            <Videos></Videos>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;