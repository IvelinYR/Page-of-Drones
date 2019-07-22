import React from 'react';
import PropTypes from 'prop-types'

import './PriceButton.sass'

export class PriceButton extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired
    }

    static defaultProps = {
        color: '#ffffff',
        backgroundColor: '#696969'
    }

    render () {
        const {color, backgroundColor} = this.props

        return (
            <div
                className="button"
                style={{
                    color: color,
                    border: `1px solid ${backgroundColor}`,
                    backgroundColor: backgroundColor
                }}
            >
                Ask for price
            </div>
        )
    }
}
