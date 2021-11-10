import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Container fluid className="ft-bg mt-5 footer-top">
                <Row className="py-5 align-items-center">
                    <Col md={3}>
                        <div className="ft-first-sec ">
                            <h5>LET'S STAY IN TOUCH</h5>
                            <p>Get updates on sales specials and more</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="ft-first-sec ">
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-danger" id="button-addon2">
                                Button
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col md={3                      }>
                        <div className="ft-first-sec ">
                            <h5>FOLLOW MI</h5>
                            <p>We want to hear from you!</p>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className="ft-first-sec ">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;