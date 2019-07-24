import React from 'react';
import {Row, Col} from 'react-bootstrap';

import './InfoSection.sass'

function Header() {
    return (
        <div>
            <Row style={{paddingTop: 120}}>
                <Col xs={{span: 7, offset: 1}} xl={{span: 5, offset: 1}} className="infoSection__title">
                    Nature from the air
                </Col>
            </Row>
            <Row style={{paddingTop: 10}}>
                <Col xs={{span: 7, offset: 1}} xl={{span: 5, offset: 1}} className="infoSection__text">
                    Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget metus ac
                    accumsan. Integer sit amet lacus egestas, semper est quis, viverra ex.
                </Col>
            </Row>
        </div>
    );
}

export default Header;
