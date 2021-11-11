import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mobile = (props) => {
    const { _id, Price, name, img } = props?.mobile;
    console.log("🚀 ~ file: Mobile.js ~ line 9 ~ Mobile ~ props?.mobile", props?.mobile)
    // console.log("🚀 ~ file: Mobile.js ~ line 9 ~ Mobile ~ mobile", mobile?.img)



    return (
        <Col md={4} className="my-4">
            <Card style={{ width: '100%' }}>
                <Card.Img style={{ height: '13rem' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-danger"> <h2 className="fw-bold">{name}</h2></Card.Title>
                    <Card.Text className="fs-5">
                        <h6 className="text-primary fs-5 fw-bold">price: <span className="text-danger fs-6">BDT {Price}</span></h6>
                        <hr />
                    </Card.Text>
                    <Card.Text>

                    </Card.Text>
                    <Link to={`/buymobile/${_id}`}>
                        <Button variant="outline-danger" size="sm">Add Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Mobile;