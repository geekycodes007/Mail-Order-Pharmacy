import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Navbar as NavBar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("access");
        localStorage.setItem("isLoggedIn", false);
        navigate("/");
    };

    return (
        <>
            <NavBar bg="white" expand="lg" className="shadow p-3 mb-5">
                <Container>
                    <NavBar.Brand as={Link} to="/home" className="text-dark h1"><span>MAIL ORDER </span>PHARMACY</NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="text-dark">Home</Nav.Link>
                            
                                <>
                                    <a className="btn text-white"
                        style={{backgroundColor:"#1e40af"}} onClick={handleClick}>Logout</a>
                                </>
                            
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>

        </>
    );
}

export default Header