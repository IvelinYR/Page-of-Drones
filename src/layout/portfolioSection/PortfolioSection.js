import React from 'react';

import {PriceButton} from '../../components/button/PriceButton'

import './PortfolioSection.sass'

function PortfolioSection() {
    return (
        <div className="portfolio">
            <div className="row">
                <div className="col photoTop">
                    <div className="playButton">
                        <i className="fa fa-play" style={{color: '#ffffff'}}></i>
                    </div>
                </div>

                <div className="col titleTop">
                    <div style={{marginLeft: 25}}>
                        <p className="photoTitle">
                            Nature from the air
                        </p>
                        <p className="photoText">
                            Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor,
                            pharetra lectus congue, luctus orci nec ultricies sem efficitur quis.
                            Integer bibendum eget metus ac accumsan.
                        </p>
                        <PriceButton color='#ffffff' backgroundColor='#2e4d9c' />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col titleBottom">
                    <div style={{marginLeft: 25}}>
                        <p className="photoTitle">
                            City from the air
                        </p>
                        <p className="photoText">
                            Mauris consequat libero metus, nec ultricies sem efficitur quis. Integer bibendum eget
                            metus ac accumsan. Integer sit amet lacus egestas, semper est quis, viverra ex. Pellentesque
                            eget nunc sit amet urna ullamcorper fermentum et eu leo.
                        </p>
                        <PriceButton color='#ffffff' backgroundColor='#2e4d9c' />
                    </div>
                </div>

                <div className="col photoBottom">
                    <div className="playButton">
                        <i className="fa fa-play" style={{color: '#ffffff'}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioSection;
