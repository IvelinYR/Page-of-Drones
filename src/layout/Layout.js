import React from 'react';

import Header from './header'
import Footer from './footer'
import MapSection from './mapSection'
import InfoSection from './infoSection'
import IconsSection from './iconsSection'
import PortfolioSection from './portfolioSection'
import NewsletterSection from './newsletterSection'

import './Layout.sass'

function Layout() {
    return (
        <div className="layout">
            <Header />
            <IconsSection />
            <InfoSection />
            <PortfolioSection />
            <NewsletterSection />
            <MapSection />
            <Footer />
        </div>
    );
}

export default Layout;
