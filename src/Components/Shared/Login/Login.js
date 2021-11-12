import React, { useState } from 'react';
import { Alert, Button, Card, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log("🚀 ~ file: Login.js ~ line 18 ~ Login ~ newLoginData", newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="mi-banner-login p-5">
            <Container className="p-5">
                <Row className="p-5">
                    <Card className="bg-mi-light shadow text-center">
                        <Card.Header>
                            <Card.Title className="text-light ">Log In </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <form className="p-2" onSubmit={handleLoginSubmit}>
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Name"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Name"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                />
                                <Button
                                    type="submit"
                                    variant="outline-light"
                                    className="mx-2"
                                >Log In</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button variant="outline-light" className="mx-2">New User? Please Register</Button>
                                </NavLink>
                                {isLoading && <Spinner animation="border" variant="primary" />}
                                {
                                    user?.email && <Alert variant="success"> log In Succesfully</Alert>
                                }
                                {user?.email && <Alert variant="success">Login successfully!</Alert>}
                                {authError && <Alert variant="danger">{authError}</Alert>}
                                <hr />
                                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default Login;