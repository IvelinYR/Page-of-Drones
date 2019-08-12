import React from 'react';
import { Row, Col } from 'react-bootstrap';

import {PriceButton} from '../../components/button/PriceButton'

import './PortfolioSection.sass'

function PortfolioSection() {
    return (

        <div className="portfolio">
            <Row className="row" >
                <Col xs={12} md={6} className="col portfolio__photoTop">
                    <div className="portfolio__playButton">
                        <i className="fa fa-play" style={{color: '#ffffff', marginLeft: 4}}></i>
                    </div>
                </Col>

                <Col xs={12} md={6} className="col portfolio__titleTop">
                    <div style={{marginLeft: 25, paddingBottom: 10}}>
                        <p className="portfolio__photoTitle">
                            Nature from the air
                        </p>
                        <p className="portfolio__photoText">
                            Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor,
                            pharetra lectus congue, luctus orci nec ultricies sem efficitur quis.
                            Integer bibendum eget metus ac accumsan.
                        </p>
                        <PriceButton color='#ffffff' backgroundColor='#2e4d9c' />
                    </div>
                </Col>
            </Row>

            <Row className="row" >
                <Col xs={{span:12, order: 12}} md={{span:6, order: 1}} className="col portfolio__titleBottom">
                    <div style={{marginLeft: 25, paddingBottom: 10}}>
                        <p className="portfolio__photoTitle">
                            City from the air
                        </p>
                        <p className="portfolio__photoText">
                            Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget
                            metus ac accumsan. Integer sit amet lacus egestas, semper est quis, viverra ex. Pellentesque
                            eget nunc sit amet urna ullamcorper fermentum et eu leo.
                        </p>
                        <PriceButton color='#ffffff' backgroundColor='#2e4d9c' />
                    </div>
                </Col>

                <Col xs={{span:12, order: 1 }} md={{span:6, order: 12}} className="col portfolio__photoBottom">
                    <div className="portfolio__playButton">
                        <i className="fa fa-play" style={{color: '#ffffff', marginLeft: 4}}></i>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PortfolioSection;
