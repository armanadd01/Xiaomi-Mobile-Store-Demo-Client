import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';


const ManageMobiles = () => {
    const [mobiles, setMobile] = useState([]);
    const [control, setControl] = useState(false);

    //get all product
    useEffect(() => {
        fetch("https://thawing-meadow-71532.herokuapp.com/mobiles")
            .then((res) => res.json())
            .then((data) => setMobile(data));
    }, [control]);
    //delete product
    const handleDelete = (id) => {
        fetch(`https://thawing-meadow-71532.herokuapp.com/mobiles/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    if (window.confirm('Are You Sure to Delete Mobiles?')) {
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
                <h1 className="text-mi text-center">All Products: {mobiles?.length}</h1>
                <Table className="text-mi " striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Model</th>
                            <th>Ram</th>
                            <th>Storage</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {mobiles?.map((mobile, index) => (
                        <tbody className="text-mi">
                            <tr>
                                <td>{index}</td>
                                <td>{mobile?.name}</td>
                                <td>{mobile?.ram}</td>
                                <td>{mobile?.rom}</td>
                                <td>{mobile?.Price}</td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(mobile?._id)}
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

export default ManageMobiles;