import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { PriceButton } from '../../components/button/PriceButton'

import './Header.sass'

function Buttons() {
    return (
        <Row className="justify-content-center" >
            <Col xs={3} xl={2} style={{zIndex: 5}}>
                <PriceButton color='#d32721' backgroundColor='#ffffff'/>
            </Col>

            <Col xs={3} xl={2} style={{zIndex: 5}}>
                <div className="watch-button">
                    <i className="fa fa-play" style={{marginRight: '10px'}}></i>Watch video
                </div>
            </Col>
        </Row>
    );
}

export default Buttons;
