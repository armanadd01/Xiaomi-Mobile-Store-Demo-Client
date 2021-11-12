import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import AddOrder from '../OrderMobile/AddOrder';

const MobileDetails = () => {
    const { user } = useAuth();
    const { mobileId } = useParams();
    const [mobiles, setMobile] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //get mobiles 
    useEffect(() => {
        fetch(`http://localhost:5000/buymobile/${mobileId}`)
            .then(res => res.json())
            .then(data => setMobile(data))
    }, []);


    //from handler
    const {
        register,
        handleSubmit,
        reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        data.email = user?.email;
        axios.post('http://localhost:5000/addorder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Added Successfully');
                    reset();
                }

            })
    };
    return (
        <>
            <Container fluid className=" my-5 ">

                <Row className=" align-items-center justify-content-center ">
                    <Col md={6} sm={12} className="mb-5">
                        <Card className="text-mi shadow" style={{ width: '100%' }}>
                            <Card.Img variant="top" src={mobiles.img} style={{ height: "30rem" }} />
                            <Card.Body>
                                <Card.Title>Mobile Name: <span className="text-mi">{mobiles.name}</span> </Card.Title>

                                <Table striped bordered hover>
                                    <tbody className="text-mi">
                                        <tr>
                                            <td>Color</td>
                                            <td>{mobiles.colors}</td>
                                        </tr>
                                        <tr>
                                            <td>Resolution</td>
                                            <td>{mobiles.resolution}</td>
                                        </tr>
                                        <tr>
                                            <td>size</td>
                                            <td>{mobiles.size}</td>
                                        </tr>
                                        <tr>
                                            <td>Rear Camera</td>
                                            <td>{mobiles.rearcamera}</td>
                                        </tr>
                                        <tr>
                                            <td>Front Camera</td>
                                            <td>{mobiles.frontcamera}</td>
                                        </tr>
                                        <tr>
                                            <td>OS</td>
                                            <td>{mobiles.os}</td>
                                        </tr>
                                        <tr>
                                            <td>SOC</td>
                                            <td>{mobiles.soc}</td>
                                        </tr>
                                        <tr>
                                            <td>GPU</td>
                                            <td>{mobiles.gpu}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>৳{mobiles.Price} BDT</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Button variant="outline-danger" className="w-100" onClick={handleShow}>
                                    Purchase Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header className="bg-mi text-light" closeButton>
                        <Modal.Title>Purchase your Mobile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-mi text-light">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control my-2" placeholder="Enter Id" type="hidden"  {...register("id", { required: true })} defaultValue={mobiles._id} />
                            <input className="form-control my-2" placeholder="Enter Price" type="hidden"  {...register("price", { required: true })} defaultValue={mobiles.Price} />
                            <input className="form-control my-2 bg-transparent text-light" placeholder="Enter Plans Name" type="text"  {...register("name", { required: true, maxLength: 100 })} defaultValue={mobiles.name} />
                            <input className="form-control my-2 bg-transparent text-light" placeholder="Enter User Name" type="text"  {...register("username")} defaultValue={user?.displayName} />
                            <input className="form-control  my-2 bg-transparent text-light" placeholder="Enter Email" type="text"  {...register("email")} defaultValue={user?.email} />
                            <label for="label" className="form-label text-start ps-3">Enter Your Delivery Date</label>
                            <input className="form-control my-2 bg-transparent text-light" id="label" placeholder="Enter Date" type="datetime-local" defaultValue={new Date()}  {...register("date")} />

                            <input className="form-control my-2" placeholder="Status" type="hidden" defaultValue="Pending"  {...register("status")} />
                            <input value="Confirm" className="btn btn-outline-light" type="submit" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="bg-mi">
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
};

export default MobileDetails;