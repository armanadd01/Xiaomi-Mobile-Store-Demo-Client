import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../Images/logoimg.png';
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
                    <Col md={4}>
                        <div className="ft-first-sec ">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-danger" id="button-addon2">
                                    News letter
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="ft-first-sec ">
                            <h5>FOLLOW MI</h5>
                            <p>We want to hear from you!</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="ft-first-sec ">
                            <FontAwesomeIcon className="text-mi" size="2x" icon={faFacebook} ></FontAwesomeIcon>
                            <FontAwesomeIcon className="text-mi" size="2x" icon={faTwitter} ></FontAwesomeIcon>
                            <FontAwesomeIcon className="text-mi" size="2x" icon={faInstagram} ></FontAwesomeIcon>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-secondary">
                <Row className="row px-5">
                    <Col md={4} sm={12} className=" mt-md-0 mt-3 pt-5">
                        <img className="w-25 py-1" src={logoImg} alt="" />
                        <h5 className="text-uppercase">Xiaomi Inc</h5>
                        <p>Largest Mobile Store In the Country.</p>
                    </Col>


                    <Col md={4} sm={12} className=" mb-md-0 mb-3 pt-3">
                        <h5 className="text-uppercase pt-5">Menu</h5>
                        <ul className="navbar-nav ">
                            <li className="nav-item p-1">
                                <NavLink activeClassName="text-danger" className="  nav-link fs-6 border-5 border-transparent fw-bold" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item p-1">
                                <NavLink activeClassName="text-danger" className="  nav-link fs-6 border-5 border-transparent fw-bold" to="/mobiles">mobiles</NavLink>
                            </li>


                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-dark">
                <div className=" text-center py-3 text-light">
                    <h3 className="text-light">
                        © 2021 Copyright Reserve To Xiaomi Mobile Store
                    </h3>
                </div>
            </Container>
        </>
    );
};

export default Footer;