import React, { useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        const value = e.target.value;
        console.log("🚀 ~ file: MakeAdmin.js ~ line 12 ~ MakeAdmin ~ value", value)

        setEmail(value);

    }


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://thawing-meadow-71532.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <>
            <Container>
                <Row>
                    <Card className="bg-mi text-center">
                        <Card.Header>
                            <Card.Title className="text-light ">Create A New Admin</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <form className="p-2" onSubmit={handleAdminSubmit}>
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter Your Name"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                />

                                <Button
                                    type="submit"
                                    variant="info"
                                    className="me-3"
                                >Create Admin</Button>

                            </form>
                            {success && <Alert variant="success">Admin Created successfully!</Alert>}

                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default MakeAdmin;