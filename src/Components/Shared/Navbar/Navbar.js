import { faBars, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logoImg from '../../../Images/logoimg.png';


const Navbar = () => {
    const { user, logout, isLoading } = useAuth();
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

                    <div className="navbar navbar-expand-md flex-nowrap m-0 p-0" style={{
                        zIndex: "99"
                    }}>
                        <div className="col-md-2 col-sm-2  m-0 p-0 ">
                            <div className="navbar-brand m-0 p-0 site-logo me-sm-5" >
                                <NavLink activeClassName=" text-mi" className="nav-link fs-6" to="/home">
                                    <img className="w-25" src={logoImg} alt="" />
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-sm-7 d-md-none">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
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
                                            <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom  fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/mobiles">Mobiles</NavLink>
                                        </li>


                                        {user?.displayName ?
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="border-bottom border-mi border-5 rounded-bottom text-mi fw-bold" className="nav-link fs-6 border-5 border-transparent text-mi" to="/admindashboard">Admin Dashboard</NavLink>
                                            </li>
                                            :
                                            ''
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="navbar-nav ">

                                        <li className="nav-item p-2">
                                            {user?.displayName ?
                                                <NavLink to="/login">
                                                    <button onClick={logout} className="btn btn-outline-danger me-2" ><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> </button>
                                                </NavLink>
                                                :
                                                <NavLink to="/login">
                                                    <button className="btn btn-outline-danger me-2" ><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></button>
                                                </NavLink>
                                            }

                                        </li>
                                        {user?.displayName ?
                                            <li className="nav-item p-2">
                                                <h5 className="text-light">{user?.displayName}</h5>
                                            </li>
                                            :
                                            ''
                                        }
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