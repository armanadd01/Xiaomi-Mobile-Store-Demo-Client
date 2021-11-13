import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button, Container, ListGroup, Offcanvas } from 'react-bootstrap';
import Mobiles from '../../Home/Mobiles/Mobiles';
import AddMobiles from '../AddMobiles/AddMobiles';
import Allorders from '../AllOrders/Allorders';
import MyOrders from '../Myorders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PrivateRoute from '../../Shared/Login/PrivateRoute/PrivateRoute';
import AddReviews from '../AddReviews/AddReviews';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Shared/Login/AdminRoute/AdminRoute';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const { user, logout, isLoading } = useAuth();
    let { path, url } = useRouteMatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>


            <Offcanvas className="bg-mi-light" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title className=" fw-bold text-light">Menu</Offcanvas.Title> */}
                    {user?.displayName ?
                        <Offcanvas.Title className=" fw-bold text-light">
                            <h6 className="text-light">Name: {user?.displayName}</h6>
                            <h6 className="text-light">Email: {user?.email}</h6>
                        </Offcanvas.Title>
                        :
                        ''
                    }
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ul" className="">
                        <Link to="/">
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Home
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Mobiles
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/myorder/${user?.email}`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    My Orders
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/allorders`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    All Orders
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/addreviews`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Add Reviews
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/addmobiles`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Add Mobiles
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/makeadmin`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Make Admin
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                            <Button onClick={logout} className="text-light fw-bold fs-5" variant="transparent" >Log Out</Button>
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





                <Switch>
                    <Route exact path={path}>
                        <Mobiles></Mobiles>
                    </Route>
                    <Route path={`${path}/allorders`}>
                        <Allorders></Allorders>
                    </Route>
                    <PrivateRoute path={`${path}/myorder/:email`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreviews`}>
                        <AddReviews></AddReviews>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addmobiles`}>
                        <AddMobiles></AddMobiles>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Container>
        </div >
    );
};

export default AdminDashboard;