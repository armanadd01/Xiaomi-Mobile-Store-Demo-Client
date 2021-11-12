import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setConrol] = useState(false);
    //get myorder data
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [user?.email]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        console.log(id);
    };

    console.log(orders)
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