import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Mobile from '../Mobile/Mobile';

const Mobiles = () => {
    const [mobiles, setMobile] = useState([]);

    //get all plans
    useEffect(() => {
        fetch('http://localhost:5000/mobiles')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [setMobile]);
    console.log("🚀 ~ file: Mobiles.js ~ line 14 ~ Mobiles ~ mobiles", mobiles)

    return (
        <div className="py-5 text-center">
            <Container>
                <Row>
                    <Col>
                        <h1>hi</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        // map  data
                        mobiles.map(mobile => <Mobile
                            key={mobile._id}
                            mobile={mobile}
                        ></Mobile>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Mobiles;