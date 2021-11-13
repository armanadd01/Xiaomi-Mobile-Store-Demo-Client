import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllMobile from '../Allmobile/AllMobile';

const AllMobiles = () => {
    const [mobiles, setMobile] = useState([]);

    //get all plans
    useEffect(() => {
        fetch('https://thawing-meadow-71532.herokuapp.com/mobiles/')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [setMobile]);
    return (
        <div className="py-5 text-center text-mi">
            <Container>
                <Row>
                    <Col>
                        <h1>See Our All Mobiles</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    {
                        // map  data
                        mobiles.map(mobile => <AllMobile
                            key={mobile._id}
                            mobile={mobile}
                        ></AllMobile>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllMobiles;