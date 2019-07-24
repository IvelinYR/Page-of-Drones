import React from 'react';

import Content from './Content'
import Buttons from './Buttons'
import Navigation from './Navigation'

import './Header.sass'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="header__container">
                    <Navigation />

                    <Content />

                    <Buttons />
                </div>
            </div>
        </div>
    );
}

export default Header;
