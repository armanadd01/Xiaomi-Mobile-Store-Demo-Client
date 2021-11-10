import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="bnr-mt-5" style={{
            zIndex: "0"
        }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="bnr-size-5">
                    <img
                    className="d-block h-auto w-100"
                    src="https://i.ibb.co/68ffjC4/overview-01.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="start-0 end-50 cs-bottom-5">
                    <h3>Redmi Note 10 Pro Max</h3>
                    <p>The Performance Beast</p>
                    <p>6GB + 128GB at ৳ 28,999</p>
                    <p>8GB+128GB at ৳ 30,999</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="bnr-size-5">
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/m5rb1qN/redmi-10.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption className="start-0 end-50 cs-bottom-5">
                    <h3>Redmi 10</h3>
                    <h4>Level Up!</h4>
                    <p>50MP AI quad camera | 90Hz FHD+ display</p>
                    <p>4GB+64GB at ৳ 18,999</p>
                    <p>4GB+128GB at ৳  19,999</p> 
                    <p>6GB+128GB at ৳ 20,999</p> 
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item className="bnr-size-5">
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/2kDLdJm/mi11x.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className="start-0 end-50 cs-bottom-5">
                    <h3>Mi 11X</h3>
                    <h4>Cut Above The Best</h4>
                    <p>120Hz E4 AMOLED Display Qualcomm® Snapdragon™ 870 Dolby Atmos® Dual Speakers</p>
                    <p>6GB + 128GB @ ৳ 39,999</p>
                    <p>8GB + 128GB @ ৳ 42,999</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;