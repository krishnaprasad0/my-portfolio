import React from 'react';
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <About />
        <Skills />
        <Projects />
        <Contact onOpenModal={openModal} />
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginTop: '50px' }}>
        <div className="container">
          <p>&copy; 2024 Krishnaprasad R. Built with React & Flutter Love.</p>
        </div>
      </footer>
      <ResumeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
