import React from 'react';

import './NewsletterSection.sass'

function NewsletterSection() {
    return (
        <div className="newsletter">

            <p className="newsletterTitle">Sign up for our newsletter</p>

            <div>
                <input type="text" placeholder="Email address" />
                <input type="submit" value="Send" />
            </div>
        </div>
    );
}

export default NewsletterSection;
