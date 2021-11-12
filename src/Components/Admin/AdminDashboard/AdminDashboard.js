
import { faAngleDoubleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Container, ListGroup, Offcanvas } from 'react-bootstrap';
import Mobiles from '../../Home/Mobiles/Mobiles';
import AddMobiles from '../AddMobiles/AddMobiles';
import Allorders from '../AllOrders/Allorders';
import MyOrders from '../Myorders/MyOrders';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [control, setControl] = useState("allorders");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>


            <Offcanvas className="bg-mi-light" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className=" fw-bold text-light">Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ul" className="">
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-2 my-2" as="li" onClick={() => setControl("allorders")} >
                            All Orders
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-2 my-2" as="li" onClick={() => setControl("allmobiles")}>
                            All Mobiles
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-2 my-2" as="li" onClick={() => setControl("myorder")}>
                            My Orders
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-2 my-2" as="li" onClick={() => setControl("addusers")} >
                            Add Users
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-2 my-2" as="li" onClick={() => setControl("manageuser")}>
                            Manage User
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-2 my-2" as="li" onClick={() => setControl("addmobiles")} >
                            Add Mobiles
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="w-100 bg-mi py-3">
                <Button className="ms-5" variant="outline-dark" onClick={handleShow}>
                    Open Admin Menu <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>

                </Button>
            </div>
            <Container>

                {/* 
                
                {control === "addusers" && <AddUser></AddUser>}
                {control === "manageuser" && <DeleteUsers></DeleteUsers>} */}
                {control === "allorders" && <Allorders></Allorders>}
                {control === "myorder" && <MyOrders></MyOrders>}
                {control === "allmobiles" && <Mobiles></Mobiles>}
                {control === "addmobiles" && <AddMobiles></AddMobiles>}
            </Container>
        </div>
    );
};

export default AdminDashboard;