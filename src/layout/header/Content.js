import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './Header.sass'

function Content() {
    return (
        <div>
            <Row className="justify-content-center">
                <Col xs={9}>
                    <p className="title">Film your event with us!</p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={5} xl={4}>
                    <p className="text">
                        Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo.
                        Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default Content;
