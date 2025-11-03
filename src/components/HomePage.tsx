// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Instagram, Mail } from 'lucide-react';
import './HomePage.css';
import cloth1 from "../assets/cloth1.jpg"
import cloth2 from "../assets/cloth2.jpg"
import cloth3 from "../assets/cloth3.jpg"

const EighthFloorHomepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    { name: 'URBAN DECAY', image: cloth1 },
    { name: 'MIDNIGHT COLLECTION', image: cloth2 },
    { name: 'RUST & RUIN', image: cloth3 }
  ];


  return (
    <div className="eighth-floor">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav 
        className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}
      >
        <div className="navbar-container">
          <div className="logo">
            8TH FLOOR
            <div className="logo-underline" />
          </div>
          
          <div className="nav-links">
            {['SHOP', 'COLLECTIONS', 'ABOUT', 'CONTACT'].map(item => (
              <button key={item} className="nav-link">
                {item}
                <span className="nav-link-underline" />
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-button">
              <ShoppingBag size={22} />
            </button>
            <button 
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {['SHOP', 'COLLECTIONS', 'ABOUT', 'CONTACT'].map(item => (
              <button key={item} className="mobile-menu-item">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div 
          className="hero-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <h1 
            className="hero-title"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            8TH FLOOR
          </h1>
          <p className="hero-subtitle">
            WHERE STREETS MEET STYLE
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              SHOP NOW
            </button>
            <button className="btn-secondary">
              EXPLORE
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-border">
            <div className="scroll-indicator-dot" />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="collections">
        <div className="collections-container">
          <div className="section-header">
            <h2 className="section-title">COLLECTIONS</h2>
            <div className="section-underline" />
          </div>

          <div className="collections-grid">
            {collections.map((collection, idx) => (
              <div
                key={idx}
                className="collection-item"
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="collection-image-wrapper">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className={`collection-image ${hoveredItem === idx ? 'hovered' : ''}`}
                  />
                </div>
                <div className="collection-overlay" />
                <div className="collection-info">
                  <h3 className="collection-name">{collection.name}</h3>
                  <div className={`collection-underline ${hoveredItem === idx ? 'visible' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement">
        <div className="statement-container">
          <blockquote className="statement-quote">
            "NOT JUST CLOTHES.<br />A STATEMENT."
          </blockquote>
          <p className="statement-text">
            Elevate your wardrobe with pieces that speak louder than words. Raw aesthetics meet refined craftsmanship on the eighth floor.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-logo">8TH FLOOR</h4>
              <p className="footer-description">
                Urban streetwear founded by Loi and Wei Bin.
              </p>
            </div>
            <div className="footer-column">
              <h5 className="footer-heading">SHOP</h5>
              <div className="footer-links">
                <p className="footer-link">New Arrivals</p>
                <p className="footer-link">Best Sellers</p>
                <p className="footer-link">Sales</p>
              </div>
            </div>
            <div className="footer-column">
              <h5 className="footer-heading">COMPANY</h5>
              <div className="footer-links">
                <p className="footer-link">About Us</p>
                <p className="footer-link">Contact</p>
              </div>
            </div>
            <div className="footer-column">
              <h5 className="footer-heading">CONNECT</h5>
              <div className="footer-social">
                <button className="social-button">
                  <Instagram size={24} />
                </button>
                <button className="social-button">
                  <Mail size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 8TH FLOOR. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EighthFloorHomepage;