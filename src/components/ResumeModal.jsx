import React, { useState } from 'react';
import config from '../config';

const ResumeModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter a valid email address.');
            return;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setIsSubmitting(true);

        const form = new FormData();
        form.append('Type', 'Resume Download');
        form.append('Name', 'User'); // We don't collect name here, just email
        form.append('Email', email);
        form.append('Message/Note', note);

        try {
            await fetch(config.GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: form,
                mode: 'no-cors'
            });
            console.log('Resume Request Sent');
        } catch (err) {
            console.error('Error sending data', err);
            // We still proceed to download even if tracking fails
        }

        setIsSubmitting(false);

        // Open the Google Drive link
        window.open('https://drive.google.com/file/d/1X5Z2zFH-jBxG_TiSJImMlq8peYDokf5A/view?usp=sharing', '_blank');

        onClose();
        // Reset form
        setEmail('');
        setNote('');
    };

    if (!isOpen) return null;

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000, // Higher than navbar
            backdropFilter: 'blur(5px)',
        },
        modal: {
            background: 'var(--card-bg)',
            padding: '40px',
            borderRadius: '0', // Sharp
            width: '90%',
            maxWidth: '500px',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '1px solid var(--accent)', // Green border
        },
        closeBtn: {
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
        },
        title: {
            color: 'var(--text-primary)',
            marginBottom: '20px',
            fontSize: '1.5rem',
            textAlign: 'center',
        },
        formGroup: {
            marginBottom: '20px',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
        },
        input: {
            width: '100%',
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #233554',
            background: '#112240',
            color: 'var(--text-primary)',
            fontSize: '1rem',
        },
        textarea: {
            width: '100%',
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #233554',
            background: '#112240',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            minHeight: '100px',
            resize: 'vertical',
        },
        error: {
            color: '#ff6b6b',
            fontSize: '0.9rem',
            marginBottom: '15px',
        },
        button: {
            width: '100%',
            padding: '12px',
            background: 'var(--accent)',
            border: '1px solid var(--accent)',
            color: '#fff',
            borderRadius: '0',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'var(--transition)',
            marginTop: '10px',
        }
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={onClose}>&times;</button>
                <h3 style={styles.title}>Download Resume</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '25px', textAlign: 'center', fontSize: '0.9rem' }}>
                    Please provide your email to download my resume.
                </p>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="resume-email" style={styles.label}>Email Address <span style={{ color: 'var(--accent)' }}>*</span></label>
                        <input
                            type="email"
                            id="resume-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            placeholder="john@example.com"
                            autoFocus
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="resume-note" style={styles.label}>Note (Optional)</label>
                        <textarea
                            id="resume-note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            style={styles.textarea}
                            placeholder="Any message you'd like to leave..."
                        />
                    </div>
                    {error && <p style={styles.error}>{error}</p>}
                    <button type="submit" style={styles.button} className="link-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Processing...' : 'Get Resume'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResumeModal;
