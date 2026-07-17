import React from 'react';
import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
  return (
    <section 
      id="origen"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay with forest green tint */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(11, 26, 19, 0.4) 0%, rgba(11, 26, 19, 0.85) 100%)',
        zIndex: 1,
      }} />

      {/* Main Content Area */}
      <div 
        className="fade-in"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '850px',
          padding: '0 2rem',
        }}
      >
        {/* "El" Sub-header */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '2rem',
          color: 'var(--color-gold)',
          marginBottom: '0.5rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}>
          El
        </p>

        {/* Huge Title "O R I G E N" */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
          fontWeight: '700',
          letterSpacing: '0.25em',
          color: 'var(--color-white)',
          lineHeight: '1',
          textTransform: 'uppercase',
          margin: '0 auto 1.5rem auto',
          textShadow: '0 4px 20px rgba(0,0,0,0.6)',
        }}>
          ORIGEN
        </h1>

        {/* Horizontal Separator */}
        <div style={{
          width: '80px',
          height: '1px',
          backgroundColor: 'var(--color-gold)',
          margin: '0 auto 2rem auto',
          boxShadow: '0 0 10px var(--color-gold)',
        }} />

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
          letterSpacing: '0.3em',
          lineHeight: '2',
          textTransform: 'uppercase',
          color: 'var(--color-cream)',
          maxWidth: '700px',
          margin: '0 auto',
          fontWeight: '400',
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
        }}>
          Sabemos que el placer nace en la perfección absoluta de un solo ingrediente.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
        onClick={() => {
          const element = document.getElementById('historia');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-cream-muted)',
        }}>
          Explorar
        </span>
        <div 
          style={{
            width: '24px',
            height: '40px',
            borderRadius: '12px',
            border: '2px solid var(--color-cream-muted)',
            position: 'relative',
          }}
        >
          <div 
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              backgroundColor: 'var(--color-gold)',
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scroll-wheel 1.8s infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scroll-wheel {
          0% {
            top: 6px;
            opacity: 1;
          }
          50% {
            top: 20px;
            opacity: 0.2;
          }
          100% {
            top: 6px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
