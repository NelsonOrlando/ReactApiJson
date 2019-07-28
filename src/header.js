import React from 'react';

import Container from 'react-bootstrap/Container';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css';

function Header() {
    return (
        <>
            <header>
                <Container>
                    <div className="header">
                        <div className="d-flex align-items-center">
                            <div className="logo">
                                Logo
                            </div>
                            <div className="btn-header"> Accommodations </div>
                            <div className="btn-header"> Transportation </div>
                            <div className="btn-header"> Tings To Do </div>
                            <div className="btn-header"> Tours info </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center p-header">
                                <div className="square"></div>
                                <p>Get Offerts</p>
                            </div>
                            <div className="d-flex align-items-center p-header">
                                <div className="square"></div>
                                <p>Social Media</p>
                            </div>
                            <div className="d-flex align-items-center p-header">
                                <div className="square"></div>
                                <p>Contact</p>
                            </div>
                            <FontAwesomeIcon className="nav-icon" icon={faBars} />
                        </div>
                    </div>
                </Container>
            </header>
            <div className="border-b"></div>
        </>
    );
}

export default Header;