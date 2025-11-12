import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                <a href="/about">About</a> | <a href="/contact">Contact</a>
            </p>
        </footer>
    );
};

export default Footer;