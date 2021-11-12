import React, { useState } from 'react';
import { Alert, Button, Card, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="mi-banner-reg p-5">
            <Container className="p-5">
                <Row>
                    <Card className="bg-mi-light shadow text-center">
                        <Card.Header>
                            <Card.Title className="text-light ">Register</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {!isLoading && <form className="p-2" onSubmit={handleLoginSubmit}>
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                />
                                <Button
                                    type="submit"
                                    variant="outline-light"
                                    className="mx-3"
                                >Register</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button
                                        className="mx-3"
                                        variant="outline-light"
                                    >
                                        Already Registered? Please Login
                                    </Button>
                                </NavLink>
                            </form>}
                            {isLoading && <Spinner animation="border" variant="primary" />}
                            {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                            {authError && <Alert variant="danger">{authError}</Alert>}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default Register;