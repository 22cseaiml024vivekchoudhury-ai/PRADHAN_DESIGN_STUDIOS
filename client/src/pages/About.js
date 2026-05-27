import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import ThreeScene from '../components/ThreeScene';
import './About.css';



const values = [
  { icon: '✦', title: 'Uncompromising Quality', desc: 'Every material, finish, and detail is selected with the utmost care and precision.', size: '4.8m x 3.6m' },
  { icon: '✦', title: 'Client-Centric Approach', desc: 'Your vision drives every decision. We listen deeply before we design.', size: '5.2m x 4.0m' },
  { icon: '✦', title: 'Timeless Aesthetics', desc: 'We create designs that transcend trends and stand the test of time.', size: '6.4m x 4.8m' },
  { icon: '✦', title: 'Innovation & Technology', desc: 'From 3D visualization to smart home integration, we embrace the future.', size: '3.8m x 3.2m' },
];


export default function About() {
  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="page-hero__canvas">
          <ThreeScene variant="about" />
        </div>
        <div className="page-hero__content">
          <motion.div className="section-label" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Our Story
          </motion.div>
          <motion.h1 className="page-hero__title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Designing <em>Spaces That</em>
            <br />Inspire Living
          </motion.h1>
          <motion.p className="page-hero__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Founded in 2023, The Pradhan Design Studio has been redefining luxury interior design across India with an unwavering commitment to excellence and creativity.
          </motion.p>
        </div>
        <div className="page-hero__overlay" />
      </section>

      {/* Story */}
      <section className="about-story" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" style={{ opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-story__grid">
            <motion.div
              className="about-story__text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">A <em>Passion</em> for Perfect Spaces</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                The Pradhan Design Studio was born from a singular belief: that exceptional design has the power to transform not just spaces, but lives. Over the past decade, we have crafted extraordinary interiors across India's most prestigious addresses.
              </p>

              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
                Our multidisciplinary team of designers, architects, and artisans bring a rare combination of technical expertise and artistic vision to every project. From Mumbai penthouses to Bangalore corporate campuses, we design with purpose and execute with precision.
              </p>
              <Link to="/contact" className="btn-primary">
                <span>Work With Us</span>
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div
              className="about-story__visual"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-3d-box dimension-box" style={{ marginBottom: 0, height: '420px', overflow: 'hidden' }}>
                <div className="dimension-box__top" />
                <div className="dimension-box__left" />
                <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>📐 DRAFT COMPONENT X: 4.8m</div>
                <img 
                  src="/commercial%20projects/WhatsApp%20Image%202026-05-18%20at%2010.36.51%20(1).jpeg" 
                  alt="Beautiful Space" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values" style={{ position: 'relative' }}>
        <div className="arch-grid-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Philosophy</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>The <em>Principles</em> We Live By</h2>
          </motion.div>

          <div className="values-grid">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.06}>
                  <div className="value-card glass-card dimension-box">
                    <div className="dimension-box__top" />
                    <div className="dimension-box__left" />
                    <div className="dimension-label-overlay" style={{ top: '-10px', left: '10px' }}>GRID {val.size}</div>
                    <div className="value-card__icon">{val.icon}</div>
                    <h3 className="value-card__title">{val.title}</h3>
                    <p className="value-card__desc">{val.desc}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
