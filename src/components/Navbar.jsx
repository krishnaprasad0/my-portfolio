import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenModal }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            position: 'fixed',
            width: '100%',
            top: 0,
            background: 'var(--bg-color)',
            borderBottom: '1px solid var(--card-border)',
            zIndex: 1000,
            transition: 'var(--transition)',
        },
        logo: {
            fontSize: '1.8rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '1px',
        },
        navList: {
            display: 'flex',
            gap: '30px',
        },
        navLink: {
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
        },
        navNumber: {
            color: 'var(--accent)',
            marginRight: '5px',
            fontSize: '0.8rem',
        }
    };

    const menuItems = [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Work', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header style={styles.navbar}>
            <div style={styles.logo}>&lt;KP /&gt;</div>

            <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                {mobileMenuOpen ? '✕' : '☰'}
            </button>

            <nav>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} style={mobileMenuOpen ? {} : styles.navList}>
                    {menuItems.map((item, index) => (
                        <li key={item.name}>
                            <a
                                href={`#${item.id}`}
                                style={styles.navLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span style={styles.navNumber}>0{index + 1}.</span>
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                onOpenModal();
                                setMobileMenuOpen(false);
                            }}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--accent)',
                                color: 'var(--accent)',
                                padding: '8px 16px',
                                borderRadius: '0', // Sharp
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-mono)',
                                marginLeft: '10px' // Keep margin for desktop, mobile CSS handles spacing
                            }}
                        >
                            Resume
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
