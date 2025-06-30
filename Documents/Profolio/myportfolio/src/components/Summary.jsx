import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Summary = () => {
  const { content } = useTheme();
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach((stat) => {
              const target = parseInt(stat.getAttribute('data-count'));
              let count = 0;
              const duration = 2000; // 2 seconds
              const increment = target / (duration / 16); // 60fps

              const updateCount = () => {
                count += increment;
                if (count < target) {
                  stat.textContent = Math.floor(count);
                  requestAnimationFrame(updateCount);
                } else {
                  stat.textContent = target;
                }
              };

              updateCount();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="summary" className="summary">
      <div className="container">
        <div className="section-title">
          <h2>{content.summaryTitle}</h2>
          <div className="underline"></div>
        </div>
        <div className="summary-content">
          <div className="summary-text">
            <p>
              Experienced Artificial Intelligence with over 2 years of professional experience building web applications and Trianed in Machine Learning Models. Proven ability to create efficient, scalable, and maintainable code while staying current with emerging technologies. Strong problem-solving skills and passion for developing elegant solutions to complex challenges.
            </p>
            <p>
              Specializing in Back-end development with expertise in Python and frameworks like Flask and Django and responsive design. Committed to continuous learning and professional growth, with a track record of successful project deliveries across various Clients.
            </p>
          </div>
          <div className="summary-stats" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-number" data-count="2">0</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="15">0</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="5">0</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-count="3">0</div>
              <div className="stat-label">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary; 