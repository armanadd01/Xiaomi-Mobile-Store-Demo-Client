import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    //get all plans
    useEffect(() => {
        fetch('https://thawing-meadow-71532.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="m-3 p-3 text-center">
            <h2 className="text-mi">Customer Reviews</h2>
            <Slider {...settings}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>
                    )
                }
            </Slider>
        </div>
    );
};

export default Reviews;