import React from 'react';
import StarRatings from 'react-star-ratings';


const Review = (props) => {
    const { name, profession, reviews, rating } = props?.review;

    return (
        <div className="bg-gray-400 rounded text-center p-3 m-4">
            <h1 className="text-mi">{name}</h1>
            <h6>{profession}</h6>
            <p>{reviews}</p>
            <p>{reviews}</p>
            <StarRatings
                rating={parseFloat(rating)}
                starDimension="20px"
                starSpacing="5px"
            />


        </div>
    );
};

export default Review;