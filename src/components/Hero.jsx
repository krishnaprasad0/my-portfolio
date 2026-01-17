import React from 'react';
import profileImg from '../../public/assets/profile.jpg'; // Adjust path if using public folder directly, but usually in vite /assets/ is accessible if in public. 
// Actually for Vite, if in public/assets/profile.jpg, we reference as "/assets/profile.jpg" in img src.
// But importing is also fine if in src/assets.
// Here I put it in client/public/assets. So src should be "/assets/profile.jpg".

const Hero = ({ onOpenModal }) => {
    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
        },
        container: {
            // Moved to CSS
        },
        content: {
            flex: 1,
        },
        greeting: {
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            marginBottom: '20px',
        },
        name: {
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '10px',
            lineHeight: 1.1,
        },
        tagline: {
            fontSize: 'clamp(30px, 6vw, 60px)',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            marginBottom: '25px',
            lineHeight: 1.1,
        },
        subTagline: {
            maxWidth: '540px',
            color: 'var(--text-secondary)',
            marginBottom: '50px',
            fontSize: '1.1rem',
        },
        profileWrapper: {
            // Moved to CSS
        },
        // Profile styles usually need CSS classes for pseudo-elements and hover effects which appear hard to inline fully cleanly.
        // So I will use the classes defined in index.css
    };

    return (
        <section id="hero" style={styles.section} className="hero-section">
            <div className="container">
                <div style={styles.content}>
                    <p style={styles.greeting}>&gt; Hello, I'm</p>
                    <h1 style={styles.name}>Krishnaprasad</h1>
                    <h2 style={styles.tagline}>Flutter Mobile App Developer</h2>
                    <p style={styles.subTagline}>Delivering POS, E-Commerce, Travel, E-Learning & AI-Powered Solutions</p>
                    <div className="cta-group">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <button onClick={onOpenModal} className="btn-secondary" style={{
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--text-primary)',
                            padding: '12px 24px',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            marginLeft: '20px'
                        }}>Download Resume</button>
                    </div>
                </div>

                <div className="hero-profile">
                    <div className="profile-glow"></div>
                    <div className="profile-image-container">
                        <img src="/assets/profile.jpg" alt="Krishnaprasad" className="profile-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
