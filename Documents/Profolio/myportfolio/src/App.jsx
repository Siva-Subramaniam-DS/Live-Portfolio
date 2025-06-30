import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Additional from './components/Additional';
import Summary from './components/Summary';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ballVariants = {
    animate: (i) => ({
      x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0, -100 * (i % 2 === 0 ? 1 : -1), 0],
      y: [0, -50 * (i % 3), 50 * (i % 2), 0, -50 * (i % 3)],
      scale: [1, 1.2, 0.9, 1.1, 1],
      opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }),
  };

  const numBalls = 10; // Number of animating balls

  return (
    <ThemeProvider>
      <div className="background-animation-container">
        {Array.from({ length: numBalls }).map((_, i) => (
          <motion.div
            key={i}
            className="animating-ball"
            custom={i}
            variants={ballVariants}
            initial={{ x: 0, y: 0, scale: 1, opacity: 0.6 }}
            animate="animate"
          />
        ))}
      </div>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Additional />
        <Summary />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
