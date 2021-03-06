import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const Allorders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    //get all order
    useEffect(() => {
        fetch("https://thawing-meadow-71532.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);
    //delete order
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

    // UPDATE status
    const handleUpdateStatus = (id) => {
        const updated = { status: 'Shipped' }
        //update order status
        fetch(`https://thawing-meadow-71532.herokuapp.com/updateOrder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order approved');
                    window.location.reload()

                }
            });

    };
    return (
        <Container>
            <Row>
                <h1 className="text-mi text-center">All Orders: {orders?.length}</h1>
                <Table className="text-mi " striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody className="text-mi">
                            <tr>
                                <td>{index}</td>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.date}</td>
                                <td>{order?.status}</td>
                                <td>
                                    <button
                                        onClick={() => handleUpdateStatus(order?._id)}
                                        className="btn btn-outline-danger  p-2"
                                    >
                                        Approved
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(order?._id)}
                                        className="btn btn-outline-danger  p-2"
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

export default Allorders;