import React from 'react';

const Review = (props) => {
    const { name, profession, reviews, rating } = props?.review;
    return (
        <div className="bg-gray-400 rounded text-center p-3 m-4">
            <h1 className="text-mi">{name}</h1>
            <h6>{profession}</h6>
            <p>{reviews}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Review;