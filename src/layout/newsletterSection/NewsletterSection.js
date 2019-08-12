import React from 'react';

import './NewsletterSection.sass'

export class NewsletterSection extends React.Component {
    handleClick = () => {
        document.getElementById('myInput').value = ''
    }

    render() {
        return (
            <div className="newsletter">

                <p className="newsletter__title">Sign up for our newsletter</p>

                <div>
                    <input id="myInput" type="text" placeholder="Email address"/>
                    <input type="submit" value="Send" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}
export default NewsletterSection;
