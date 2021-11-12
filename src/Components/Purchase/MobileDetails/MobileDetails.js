import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import AddOrder from '../OrderMobile/AddOrder';

const MobileDetails = () => {
    const { user } = useAuth();
    const { mobileId } = useParams();
    const [mobiles, setMobile] = useState([]);
    //get mobiles 
    useEffect(() => {
        fetch(`http://localhost:5000/buymobile/${mobileId}`)
            .then(res => res.json())
            .then(data => setMobile(data))
    }, []);
    return (
        <>
            <Container fluid className=" my-5 ">

                <Row className=" align-items-center ">
                    <Col md={7} sm={12} className="mb-5">
                        <Card className="text-mi" style={{ width: '100%' }}>
                            <Card.Img variant="top" src={mobiles.img} style={{ height: "30rem" }} />
                            <Card.Body>
                                <Card.Title>Mobile Name: <span className="text-mi">{mobiles.name}</span> </Card.Title>

                                <Table striped bordered hover>
                                    <tbody className="text-mi">
                                        <tr>
                                            <td>Color</td>
                                            <td>{mobiles.colors}</td>
                                        </tr>
                                        <tr>
                                            <td>Resolution</td>
                                            <td>{mobiles.resolution}</td>
                                        </tr>
                                        <tr>
                                            <td>size</td>
                                            <td>{mobiles.size}</td>
                                        </tr>
                                        <tr>
                                            <td>Rear Camera</td>
                                            <td>{mobiles.rearcamera}</td>
                                        </tr>
                                        <tr>
                                            <td>Front Camera</td>
                                            <td>{mobiles.frontcamera}</td>
                                        </tr>
                                        <tr>
                                            <td>OS</td>
                                            <td>{mobiles.os}</td>
                                        </tr>
                                        <tr>
                                            <td>SOC</td>
                                            <td>{mobiles.soc}</td>
                                        </tr>
                                        <tr>
                                            <td>GPU</td>
                                            <td>{mobiles.gpu}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>৳{mobiles.Price} BDT</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12} className=" rounded shadow p-3 mb-5">
                        <AddOrder
                            key={mobiles._id}
                            mobiles={mobiles}
                        ></AddOrder>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MobileDetails;