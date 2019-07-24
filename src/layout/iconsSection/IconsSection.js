import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {PriceButton} from '../../components/button/PriceButton'

import fromAir from './fromAir.png'
import dron from './dron.png'
import speed from './speed.png'
import robot from './robot.png'

import './IconsSection.sass'

function IconsSection() {
    return (
        <div className="iconSection">

            <Row className="justify-content-center" style={{paddingTop: 130}}>
                <Col xs={3} md={2} style={{padding: 30}}>
                    <img src={fromAir} alt="" width="110" />
                </Col>
                <Col xs={3} md={2} style={{padding: 15}}>
                    <img src={dron} alt="" width="95" />
                </Col>
                <Col xs={3} md={2} style={{padding: 20}}>
                    <img src={speed} alt="" width="90" />
                </Col>
                <Col xs={3} md={2} style={{padding: '5px 15px 15px 15px'}}>
                    <img src={robot} alt="" width="80" />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={3} md={2}>
                    <p className="iconSection__label">From air</p>
                </Col>
                <Col xs={3} md={2}>
                    <p className="iconSection__label">Best drones</p>
                </Col>
                <Col xs={3} md={2}>
                    <p className="iconSection__label">Speed</p>
                </Col>
                <Col xs={3} md={2}>
                    <p className="iconSection__label">Long range</p>
                </Col>
            </Row>

            <Row className="justify-content-center" style={{marginTop: -10, lineHeight: 2}}>
                <Col xs={3} md={2}>
                    <p className="iconSection__info">Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.</p>
                </Col>
                <Col xs={3} md={2}>
                    <p className="iconSection__info">Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.</p>
                </Col>
                <Col xs={3} md={2}>
                    <p className="iconSection__info">Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.</p>
                </Col>
                <Col xs={3} md={2}>
                    <p className="iconSection__info">Pellentesque eget nunc sit amet urna ullamcorper fermentum et euleo.</p>
                </Col>
            </Row>

            <Row className="justify-content-center" style={{marginTop: 75, paddingBottom: 75}}>
                <Col xs={3} xl={2}>
                    <PriceButton color='#ffffff' backgroundColor='#2e4d9c' />
                </Col>
            </Row>

        </div>
    );
}

export default IconsSection;
