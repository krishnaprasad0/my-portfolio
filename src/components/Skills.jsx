import React from 'react';

const Skills = () => {
    const skills = [
        "Flutter", "Dart", "Bloc / GetX", "Python (Flask/FastAPI)",
        "MongoDB", "PostgreSQL", "AWS", "Git", "Firebase",
        "REST APIs", "Android TV", "Platform Channels"
    ];

    const styles = {
        grid: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px',
        },
        card: {
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--card-border)',
            padding: '12px 24px',
            textAlign: 'center',
            borderRadius: '50px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            transition: 'var(--transition)',
            cursor: 'default',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title" data-index="2">Technical Skills</h2>
                <div style={styles.grid}>
                    {skills.map(skill => (
                        <div key={skill} className="skill-card">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
