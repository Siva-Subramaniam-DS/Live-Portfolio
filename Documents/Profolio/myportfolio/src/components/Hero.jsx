import React, { useState, useEffect } from 'react';
import profileImage from '../assets/P1.jpg';
import resumePDF from '../Pdf/Siva Subramaniam R online-Doa5Dy4k.pdf';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { content } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = [
    'AI & ML Engineer',
    'Python Developer',
    'Data Scientist',
    'Web Developer',
    'Machine Learning Engineer',
    'Deep Learning Specialist',
    'Data Analyst',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const currentText = professions[textIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause at the end of typing
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next text
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % professions.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed, professions]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{content.heroTitle}</h1>
          <h3 className="profession">
            <span className="typewriter">{displayText}</span>
            <span className="cursor">|</span>
          </h3>
          <p className="hero-text">{content.heroSubtitle}</p>
          <div className="cta-buttons">
            <a href="tel:+919150908294" className="btn btn-primary">Contact Me</a>
            <a href={resumePDF} className="btn btn-secondary" download>Download CV</a>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/r-siva-subramanaiam/" target="_blank" rel="noopener" title="LinkedIn Profile">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Siva-Subramaniam-DS" target="_blank" rel="noopener" title="GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/SivaSubbu1_4_1" target="_blank" rel="noopener" title="Twitter Profile">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/_siva_hokage_/?__pwa=1" rel="noopener" target="_blank" title="Instagram Profile">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={profileImage} alt="Siva Subramanian R Profile Picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 