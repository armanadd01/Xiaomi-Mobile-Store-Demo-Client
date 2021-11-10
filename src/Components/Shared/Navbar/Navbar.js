import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../Images/logoimg.png';


const Navbar = () => {
    return (
        <>
            {/* Navber */}
            <div className="w-100 bg-transparent" style={{
                zIndex: "999"
            }}>
                <Container className="container-fluid " style={{
                    zIndex: "100"
                }}>
                    {/* Site logo */}

                    <div className="navbar navbar-expand-md navbar-warning w-100 m-0 p-0" style={{
                        zIndex: "99"
                    }}>
                        <div className="col-md-2 col-sm-4 m-0 p-0 ">
                            <div className="navbar-brand m-0 p-0 site-logo me-sm-5" >
                                <NavLink activeClassName=" text-mi" className="nav-link fs-6" to="/home">
                                    <img className="w-50" src={logoImg} alt="" />
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-sm-8 d-md-none">
                            <button
                                className="navbar-toggler ms-5 mt-4 align-sm-middle text-sm-end"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-md-10 col-sm-12 ">
                            {/* Navigation bar */}

                            <nav
                                className="collapse navbar-collapse p-md-0 p-3 text-center"
                                id="navbarNav"
                            >
                                <div className="col-md-10">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom  fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/plans">Plans</NavLink>
                                        </li>
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/allorders">All Orders</NavLink>
                                        </li>
                                        {/* { user?.displayName? */}
                                        <li className="nav-item p-2">
                                            {/* <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi" className="nav-link fs-6 border-5 border-transparent fw-bold" to={`/myorder/${user?.email}`} > */}
                                            {/* My orders */}
                                            {/* </NavLink> */}
                                        </li>
                                        {/* : */}
                                        {/* '' */}
                                        {/* } */}
                                        {/* { user?.displayName? */}
                                        <li className="nav-item p-2">
                                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/admindashboard">Admin Dashboard</NavLink>
                                        </li>
                                        {/* : */}
                                        {/* '' */}
                                        {/* } */}
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <ul className="navbar-nav ">

                                        <li className="nav-item p-2">
                                            {/* { user?.displayName? */}
                                            {/* <NavLink to="/login">
                                                                <button onClick={logOut} className="btn btn-outline-warning me-2" ><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> </button>
                                                            </NavLink> */}
                                            {/* :  */}
                                            <NavLink to="/login">
                                                <button className="btn btn-outline-warning me-2" ><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></button>
                                            </NavLink>
                                            {/* }  */}

                                        </li>
                                        {/* { user?.displayName?  */}
                                        {/* <li className="nav-item p-2">
                                                            <h4>{user?.displayName}</h4> 
                                                        </li> */}
                                        {/* : */}
                                        {/* '' */}
                                        {/* }  */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>

                </Container>
            </div>
        </>

    );
};

export default Navbar;