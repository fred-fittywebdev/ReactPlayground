import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

const Header = () => {
    return (
        <div className="navigation">
        <Logo />
            <Navigation />
        </div>
    );
};

export default Header;