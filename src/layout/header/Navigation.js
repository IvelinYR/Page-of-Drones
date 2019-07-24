import React from 'react';

import { Row, Col, Nav } from 'react-bootstrap';

import './Header.sass'
import logo from './logo.png'

function Navigation() {
    return (
    <Row className="justify-content-xs-end" style={{paddingTop: 30}}>
        <Col xs={{span: 2, offset: 0}} xl={{span: 2, offset: 1}}>
            <img src={logo} alt="" className="header__logo"/>
        </Col>

        <Col xs={{span: 9, offset: 1}} xl={{span: 6, offset: 3}}>
            <Nav className="header__nav">
                <Nav.Item>
                    <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Our drones</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Our realizations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="header__nav__contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    </Row>


    );
}

export default Navigation;
