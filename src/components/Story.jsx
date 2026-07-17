import React, { useState } from 'react';

const Story = () => {
  const [activeFactor, setActiveFactor] = useState(0);

  const factors = [
    {
      title: 'Suelo',
      label: 'Suelo Volcánico',
      desc: 'El suelo de la Sierra Negra es rico en minerales volcánicos y materia orgánica del bosque de niebla. Esto proporciona un drenaje excelente y nutrientes profundos que le otorgan al café su cuerpo característico y notas terrosas y achocolatadas.',
      accent: '#7a5c43', // Rich brown
      iconText: '🟫',
    },
    {
      title: 'Altitud',
      label: '1,200 - 1,800 msnm',
      desc: 'Nuestros cafetales se cultivan a grandes alturas. El clima frío y la menor presión atmosférica ralentizan la maduración de la cereza de café, concentrando los azúcares naturales y produciendo una acidez brillante y notas frutales complejas.',
      accent: '#5a7d9a', // Mountain blue
      iconText: '🏔️',
    },
    {
      title: 'Latitud',
      label: '18° Latitud Norte',
      desc: 'Ubicados en el límite geográfico perfecto para el café de especialidad. Esta posición geográfica expone a las plantas a ciclos de luz ideales y una oscilación térmica diaria que fortalece la densidad y calidad del grano.',
      accent: '#6e8c75', // Forest green
      iconText: '🌐',
    },
    {
      title: 'Lluvia',
      label: 'Neblina y Llovizna',
      desc: 'El característico bosque de niebla de la Sierra Negra envuelve constantemente nuestros cultivos. La llovizna fina (conocida localmente como chipichipi) y la humedad templada protegen las hojas de quemaduras solares y regulan el agua.',
      accent: '#a9c7d4', // Rain/Mist light blue
      iconText: '🌧️',
    },
    {
      title: 'Sol',
      label: 'Sombra Regulada',
      desc: 'Cultivado bajo la sombra de cedros, liquidámbares y árboles frutales. Este dosel forestal filtra el sol de la tarde y permite que el café madure con tranquilidad, preservando la biodiversidad local y reduciendo la erosión.',
      accent: '#e6a15c', // Golden sun
      iconText: '☀️',
    },
  ];

  return (
    <section 
      id="historia" 
      className="section-container bg-dark"
      style={{
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Decorative Top Separator */}
      <div className="decorative-divider">
        <div className="diamond-separator">
          <div className="diamond" />
          <div className="diamond large" />
          <div className="diamond" />
        </div>
      </div>

      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{
          fontSize: '0.85rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          marginBottom: '1rem',
          fontWeight: '600',
        }}>
          NUESTRA HISTORIA
        </h2>
        
        <h3 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '400',
          lineHeight: '1.4',
          marginBottom: '1rem',
          color: 'var(--color-white)',
        }}>
          comienza en los mejores terruños del mundo
        </h3>
        
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'var(--color-cream-muted)',
          marginBottom: '4rem',
        }}>
          donde el café captura la esencia misma de su entorno
        </p>

        {/* 5 Circular factor elements */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'clamp(1rem, 4vw, 2.5rem)',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {factors.map((fac, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveFactor(idx)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
                transform: activeFactor === idx ? 'scale(1.1)' : 'scale(1)',
              }}
              className="factor-node"
            >
              {/* Outer Glowing Circle */}
              <div 
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  border: `2px solid ${activeFactor === idx ? 'var(--color-gold)' : 'rgba(197, 168, 128, 0.2)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-green-darkest)',
                  boxShadow: activeFactor === idx ? `0 0 25px ${fac.accent}dd` : 'var(--shadow-soft)',
                  transition: 'var(--transition-medium)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Radial Gradient Glow on selection */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle, ${fac.accent}33 0%, transparent 70%)`,
                  opacity: activeFactor === idx ? 1 : 0,
                  transition: '0.4s',
                }} />
                
                {/* Fallback image/emoji representation */}
                <span style={{ fontSize: '2rem', zIndex: 2 }}>{fac.iconText}</span>
              </div>

              {/* Label */}
              <span style={{
                marginTop: '1rem',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: activeFactor === idx ? '700' : '500',
                color: activeFactor === idx ? 'var(--color-gold)' : 'var(--color-cream-muted)',
                transition: 'var(--transition-fast)',
              }}>
                {fac.title}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Display Box for Active Factor */}
        <div style={{
          minHeight: '180px',
          backgroundColor: 'var(--color-green-darkest)',
          border: '1px solid rgba(197, 168, 128, 0.15)',
          borderRadius: '16px',
          padding: '2.5rem',
          textAlign: 'left',
          boxShadow: 'var(--shadow-soft)',
          transition: 'var(--transition-medium)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle colored accent bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '4px',
            width: '100%',
            backgroundColor: factors[activeFactor].accent,
            boxShadow: `0 2px 10px ${factors[activeFactor].accent}`,
          }} />

          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            color: 'var(--color-gold)',
            marginBottom: '0.5rem',
            fontWeight: '600',
          }}>
            {factors[activeFactor].label}
          </h4>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--color-cream-muted)',
            lineHeight: '1.8',
            letterSpacing: '0.03em',
          }}>
            {factors[activeFactor].desc}
          </p>
        </div>
      </div>

      <style>{`
        .factor-node:hover {
          transform: translateY(-5px) scale(1.05);
        }
        .factor-node:hover div {
          border-color: var(--color-gold) !important;
          box-shadow: 0 0 20px rgba(197, 168, 128, 0.4) !important;
        }
        .factor-node:hover span {
          color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
};

export default Story;
