import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Videos = () => {
    return (
        <div className="bg-gray-400 text-center py-5">
            <h1>See Our Mobile Videos</h1>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col className="p-3 m-3">
                        <div className="videos w-100 h-100 vd-bg-1 p-5 rounded">
                            <div className="icons">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faPlay} size="2x" className="text-light"></FontAwesomeIcon>
                                </Link>

                            </div>
                            <div className="content mt-2 text-light">
                                <p>Redmi Note 10 Pro Max</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-3 m-3">
                        <div className="videos w-100 h-100 vd-bg-2 p-5 rounded">
                            <div className="icons">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faPlay} size="2x" className="text-light"></FontAwesomeIcon>
                                </Link>

                            </div>
                            <div className="content mt-2 text-light">
                                <p>Redmi Note 10 Pro</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-3 m-3">
                        <div className="videos w-100 h-100 vd-bg-3 p-5 rounded">
                            <div className="icons">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faPlay} size="2x" className="text-light"></FontAwesomeIcon>
                                </Link>


                            </div>
                            <div className="content mt-2 text-light">
                                <p>Redmi Note 10</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Videos;