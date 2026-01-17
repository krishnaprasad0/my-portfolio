import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title" data-index="1">About Me</h2>
                <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '50px' }}>
                    <div className="about-text" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        <p style={{ marginBottom: '15px' }}>
                            Hi! I’m <span className="highlight">Krishnaprasad R</span>, a Flutter Mobile App Developer with hands-on experience building scalable and production-ready mobile applications across multiple domains including <span className="highlight">POS systems</span>, <span className="highlight">E-commerce platforms</span>, Travel agency applications, and E-Learning solutions.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            Beyond traditional app development, I’ve also worked on <span className="highlight">AI-powered chatbots</span> and SLM (Small Language Model) integrations, enabling applications to deliver personalized responses, smart data interactions, and conversational workflows.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            I focus on clean architecture, optimized performance, intuitive UI/UX, and maintainable code. My apps ship across Android & iOS and integrate with APIs, backend services, and real-time data systems.
                        </p>
                        <p>Explore my work below and feel free to connect!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
