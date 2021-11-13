import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    //get myorder data
    useEffect(() => {
        fetch(`https://thawing-meadow-71532.herokuapp.com/myorder?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [user.email, token]);

    const handleDelete = (id) => {
        fetch(`https://thawing-meadow-71532.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    if (window.confirm('Are You Sure to Delete Order?')) {
                        setControl(!control);
                    }
                } else {
                    setControl(false);
                }
            });
    };

    return (
        <Container>
            <Row>
                <h1 className="text-mi text-center">My Orders: {orders?.length}</h1>
                <Table className="text-mi shadow rounded" striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((myorder, index) => (
                        <tbody className="text-mi">
                            <tr>
                                <td>{index}</td>
                                <td>{myorder?.name}</td>
                                <td>{myorder?.email}</td>
                                <td>{myorder?.date}</td>
                                <td>{myorder?.status}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(myorder?._id)}
                                        className="btn btn-outline-warnig  p-2"
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Row>
        </Container>
    );
};

export default MyOrders;