import React from 'react';

const Projects = () => {
    // Only keeping the public github project as requested.
    const projects = [
        {
            title: "AI-Powered Chatbot & SLM",
            description: "AI conversational module using SLM for context-aware responses and personalized conversation flows.",
            tech: ["Flutter", "SLM", "AI Integration"],
            links: [
                { label: "GitHub", url: "https://github.com/krishnaprasad0" }
            ]
        },
        {
            title: "SLM-APP",
            description: "Small language model runner optimized for local 64-bit CPU execution.",
            tech: ["AI", "Local LLM"],
            links: [
                { label: "GitHub", url: "https://github.com/krishnaprasad0/SLM-APP" }
            ]
        },
        {
            title: "Todo-App-Backend",
            description: "High-performance backend for a Todo application.",
            tech: ["Python", "FastAPI"],
            links: [
                { label: "GitHub", url: "https://github.com/krishnaprasad0/Todo-App-Backend" }
            ]
        },
        {
            title: "Delivery-App",
            description: "A comprehensive food delivery mobile application.",
            tech: ["Flutter", "Dart"],
            links: [
                { label: "GitHub", url: "https://github.com/krishnaprasad0/Delivery-App" }
            ]
        },
        {
            title: "Weather-App",
            description: "Real-time weather forecasting application.",
            tech: ["Flutter", "API Integration"],
            links: [
                { label: "GitHub", url: "https://github.com/krishnaprasad0/Weather-App" }
            ]
        }
    ];

    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px',
        },
        card: {
            background: 'var(--card-bg)',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'var(--transition)',
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
        },
        content: {
            padding: '2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        icon: {
            color: 'var(--accent)',
            marginBottom: '20px',
            fontSize: '2rem',
        },
        title: {
            color: 'var(--text-primary)',
            fontSize: '1.4rem',
            marginBottom: '10px',
            transition: 'var(--transition)',
        },
        desc: {
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            marginBottom: '20px',
            flexGrow: 1,
        },
        techStack: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            marginTop: '20px',
            marginBottom: '20px',
        },
        tech: {
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
        }
    };

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title" data-index="3">Featured Projects</h2>
                <div style={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div style={styles.content}>
                                <div style={styles.icon}>📂</div>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.desc}>{project.description}</p>
                                <div style={styles.techStack}>
                                    {project.tech.map(t => (
                                        <span key={t} style={styles.tech}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.links.map(link => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-btn"
                                            style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }} // Minimal inline override, mostly class based
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
