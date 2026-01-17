import React, { useState } from 'react';
import config from '../config';

const Contact = ({ onOpenModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = new FormData();
        form.append('Type', 'Contact Form');
        form.append('Name', formData.name);
        form.append('Email', formData.email);
        form.append('Message/Note', formData.message);

        try {
            await fetch(config.GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: form,
                mode: 'no-cors' // Important for Google Apps Script
            });

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title" data-index="4">Get In Touch</h2>
                <div className="contact-wrapper" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <form className="contact-form" onSubmit={handleSubmit} style={{
                        background: 'var(--card-bg)',
                        padding: '40px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        marginBottom: '40px'
                    }}>
                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                style={{
                                    background: '#112240', border: '1px solid transparent', padding: '12px', color: 'var(--text-primary)', borderRadius: '4px'
                                }}
                            />
                        </div>
                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                style={{
                                    background: '#112240', border: '1px solid transparent', padding: '12px', color: 'var(--text-primary)', borderRadius: '4px'
                                }}
                            />
                        </div>
                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                            <label htmlFor="message" style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                style={{
                                    background: '#112240', border: '1px solid transparent', padding: '12px', color: 'var(--text-primary)', borderRadius: '4px'
                                }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p style={{ color: '#64ffda', marginTop: '10px' }}>Message sent successfully!</p>}
                        {status === 'error' && <p style={{ color: '#ff6b6b', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
                    </form>

                    <div className="contact-links" style={{ color: 'var(--text-secondary)' }}>
                        <p>View My Work • Download Resume • Get in Touch</p>
                        <a href="https://github.com/krishnaprasad0" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '10px', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/krishnaprasad-r-a76445159/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '10px', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>LinkedIn</a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
