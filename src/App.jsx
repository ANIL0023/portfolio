import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Internship from './components/Internship';
import Achievements from './components/Achievements';
import DoraemonAudio from './components/DoraemonAudio';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <DoraemonAudio />
    </div>
  );
}

export default App;
