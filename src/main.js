import React from 'react';

import Cards from './Cards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css';

function Main() {
    return (
        <>
        <main>
            <Container>
                <div className="bg-color">
                    <div className="d-flex justify-content-between">
                        <div className="search-section">
                            <h1>The Best Accommodations</h1>
                            <div className="d-flex align-items-center input-search">
                                <input type="search" placeholder="Search for a destination in GUATEMALA"></input>
                                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-end price-section">
                                <h1>$</h1>
                                <div className="bar-select">
                                    <div className="bar"></div>
                                </div>
                                <h1>Q</h1>
                            </div>
                            <div className="d-flex">
                                <div className="btn-main"> Date </div>
                                <div className="btn-main"> Gest </div>
                                <div className="btn-main"> Price</div>
                                <div className="btn-main"> More Filters </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Row>
                    <Cards />
                </Row>
            </Container>
        </main>
        </>
    );
}

export default Main;