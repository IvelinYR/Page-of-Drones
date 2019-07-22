import React from 'react'
import PropTypes from 'prop-types'

export class Number extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render () {
        const {children} = this.props

        return (
            <div
                className="numberCircle"
                style={{
                    color: '#3f4e76',
                    width: 50,
                    height: 50,
                    paddingTop: 12,
                    borderRadius: 30,
                    textAlign: 'center',
                    border: '1px solid #b1d1ed'
                }}
            >
                {children}
            </div>
        )
    }
}

