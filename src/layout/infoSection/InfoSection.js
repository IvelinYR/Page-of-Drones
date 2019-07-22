import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {Number} from '../../components/number/Number'

import Header from './Header'

import './InfoSection.sass'

function InfoSection() {
    return (
        <div className="info-section">
            <div>
                <Header />
                <Row style={{paddingTop: 30}}>
                    <Col xs={{span: 1, offset: 1}} xl={{span: 1, offset: 1}} className="number">
                        <Number>1</Number>
                    </Col>
                    <Col xs={{span: 3, offset: 1}} xl={{span: 2, offset: 0}} className="content">
                        Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor,
                        pharetra lectus congue, luctus orci.
                    </Col>
                    <Col xs={1} className="number">
                        <Number>4</Number>
                    </Col>
                    <Col xs={{span: 3, offset: 1}} xl={{span: 2, offset: 0}} className="content">
                        Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor,
                        pharetra lectus congue, luctus orci.
                    </Col>
                </Row>
                <Row style={{paddingTop: 50}}>
                    <Col xs={{span: 1, offset: 1}} xl={{span: 1, offset: 1}} className="number">
                        <Number>2</Number>
                    </Col>
                    <Col xs={{span: 3, offset: 1}} xl={{span: 2, offset: 0}} className="content">
                        Mauris consequat libero metus, nec ultricies sem efficitur quis.
                        Integer bibendum eget metus ac accumsan.
                    </Col>
                    <Col xs={1} className="number">
                        <Number>5</Number>
                    </Col>
                    <Col xs={{span: 3, offset: 1}} xl={{span: 2, offset: 0}} className="content">
                        Mauris consequat libero metus, nec ultricies sem efficitur quis.
                        Integer bibendum eget metus ac accumsan.
                    </Col>
                </Row>
                <Row style={{paddingTop: 50}}>
                    <Col xs={{span: 1, offset: 1}} xl={{span: 1, offset: 1}} className="number">
                        <Number>6</Number>
                    </Col>
                    <Col xs={{span: 3, offset: 1}} xl={{span: 2, offset: 0}} className="content">
                        Integer sit amet lacus egestas, semper est quis, viverra ex.
                        Mauris consequat libero metus, nec ultricies sem efficitur quis.
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default InfoSection;
