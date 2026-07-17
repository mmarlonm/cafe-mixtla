import React, { useState, useEffect } from 'react';

const Header = ({ activeSection, sections }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transition: 'var(--transition-medium)',
          backgroundColor: scrolled ? 'rgba(11, 26, 19, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(197, 168, 128, 0.15)' : 'none',
          padding: scrolled ? '1rem 3rem' : '2rem 3rem',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Logo / Title */}
          <div 
            onClick={() => scrollToSection('hero')}
            style={{ 
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              color: 'var(--color-white)',
              letterSpacing: '0.15em',
            }}>
              Café <span style={{ color: 'var(--color-gold)' }}>MIXTLA</span>
            </span>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              color: 'var(--color-cream-muted)',
              textTransform: 'uppercase',
              marginTop: '-2px',
            }}>
              Orgullo de la Sierra Negra
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sec.id);
                }}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeSection === sec.id ? 'var(--color-gold)' : 'var(--color-cream-muted)',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
              >
                {sec.label}
                {activeSection === sec.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'var(--color-gold)',
                  }} />
                )}
              </a>
            ))}
          </nav>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 110,
            }}
            className="mobile-menu-btn"
          >
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '5px 0',
              transition: '0.4s',
              transform: mobileMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '5px 0',
              opacity: mobileMenuOpen ? 0 : 1,
              transition: '0.4s',
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--color-gold)',
              margin: '5px 0',
              transition: '0.4s',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none',
            }} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'var(--color-green-darkest)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            zIndex: 99,
          }}>
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sec.id);
                }}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeSection === sec.id ? 'var(--color-gold)' : 'var(--color-cream)',
                }}
              >
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Floating Sidebar Progress Dots (Right side) */}
      <div className="sidebar-hud" style={{
        position: 'fixed',
        right: '2.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        zIndex: 90,
      }}>
        {sections.map((sec) => (
          <div 
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            style={{
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            className="hud-dot-container"
          >
            {/* Label displayed on hover */}
            <span className="hud-label" style={{
              marginRight: '1rem',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'var(--transition-fast)',
              position: 'absolute',
              right: '1.5rem',
              whiteSpace: 'nowrap',
            }}>
              {sec.label}
            </span>
            <div 
              style={{
                width: activeSection === sec.id ? '8px' : '6px',
                height: activeSection === sec.id ? '8px' : '6px',
                backgroundColor: activeSection === sec.id ? 'var(--color-gold)' : 'transparent',
                border: `1.5px solid ${activeSection === sec.id ? 'var(--color-gold-bright)' : 'var(--color-cream-muted)'}`,
                transform: 'rotate(45deg)',
                transition: 'var(--transition-medium)',
              }}
            />
          </div>
        ))}

        {/* Separator line */}
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(180deg, var(--color-cream-muted), transparent)',
          margin: '0.5rem 0',
        }} />

        {/* Social Icons (mocked styled icons to avoid package dependencies) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          color: 'var(--color-cream-muted)',
          fontSize: '0.75rem',
        }}>
          <a href="#" style={{ transition: 'var(--transition-fast)' }} className="social-icon-hover">
            <span style={{ fontFamily: 'monospace' }}>FB</span>
          </a>
          <a href="#" style={{ transition: 'var(--transition-fast)' }} className="social-icon-hover">
            <span style={{ fontFamily: 'monospace' }}>TW</span>
          </a>
          <a href="#" style={{ transition: 'var(--transition-fast)' }} className="social-icon-hover">
            <span style={{ fontFamily: 'monospace' }}>IG</span>
          </a>
        </div>
      </div>

      {/* Styled utilities for navbar responsiveness and sidebar hover */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .sidebar-hud { display: none !important; }
        }
        
        .hud-dot-container:hover .hud-label {
          opacity: 1 !important;
          transform: translateX(-5px);
        }
        
        .hud-dot-container:hover div {
          background-color: var(--color-gold) !important;
          border-color: var(--color-gold-bright) !important;
          transform: rotate(45deg) scale(1.3) !important;
        }

        .social-icon-hover:hover {
          color: var(--color-gold) !important;
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Header;
