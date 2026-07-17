import React, { useState } from 'react';
import gradingImg from '../assets/images/grading_cherries.png';

const Grading = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: 'Cerezas',
      label: '1. Selección Flotante',
      desc: 'Sumergimos las cerezas recolectadas en agua fría de manantial. Los frutos maduros y densos se hunden, mientras que las hojas, ramas y granos secos o huecos (flotadores) suben y son separados inmediatamente. Solo lo mejor de lo mejor avanza.',
      color: '#c93b3b',
      emoji: '🍒',
    },
    {
      title: 'Verde',
      label: '2. Secado y Criba',
      desc: 'Tras el despulpado, los granos se secan al sol en zarandas elevadas (camas africanas) para evitar la humedad del suelo. Una vez secos, se retira la cascarilla (pergamino) y los artesanos clasifican manualmente el grano verde según su tamaño y color.',
      color: '#8ca67b',
      emoji: '🟢',
    },
    {
      title: 'Tostado',
      label: '3. Tueste de Especialidad',
      desc: 'El café verde se tuesta en lotes pequeños con perfiles térmicos precisos. Buscamos el equilibrio perfecto que potencie la dulzura frutal y resalte las notas a chocolate y especias, típicas de la altitud de la Sierra Negra.',
      color: '#735848',
      emoji: '🟤',
    },
  ];

  return (
    <section 
      id="calidad-granos" 
      className="bg-darkest"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
      }}
    >
      <div className="split-section" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
        
        {/* Left Side: Photo with interactive plus button */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} className="grading-image-wrapper">
          
          <div style={{
            position: 'relative',
            width: '100%',
            maxHeight: '480px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-soft)',
            border: '1px solid rgba(197, 168, 128, 0.2)',
          }} className="grading-container-hover">
            <img 
              src={gradingImg} 
              alt="Clasificación de café a mano" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'var(--transition-slow)',
              }}
              className="grading-portrait-img"
            />
            
            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(11,26,19,0.4), transparent)',
            }} />

            {/* Interactive Plus Button */}
            <div 
              style={{
                position: 'absolute',
                bottom: '2.5rem',
                right: '2.5rem',
                zIndex: 10,
              }}
            >
              <button 
                className="btn-plus-interactive"
                onClick={() => setShowTooltip(!showTooltip)}
                style={{ width: '45px', height: '45px', fontSize: '1.25rem' }}
              >
                {showTooltip ? '×' : '+'}
              </button>
            </div>

            {/* Tooltip description */}
            {showTooltip && (
              <div style={{
                position: 'absolute',
                bottom: '5.5rem',
                right: '2rem',
                backgroundColor: 'rgba(11, 26, 19, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--color-gold)',
                borderRadius: '12px',
                padding: '1.25rem',
                maxWidth: '280px',
                width: '85%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                zIndex: 15,
                animation: 'tooltip-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}>
                <h5 style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-gold)',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                }}>
                  Inspección Física
                </h5>
                <p style={{ fontSize: '0.75rem', lineHeight: '1.5', color: 'var(--color-cream-muted)' }}>
                  Cada puñado pasa por una revisión visual rigurosa. Se descartan granos con imperfecciones físicas o picaduras de insectos, dejando solo granos perfectos para el tueste.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Editorial text and Stage icons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '3rem',
          zIndex: 2,
        }} className="grading-text-container">
          
          <h3 style={{
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1.5rem',
            fontWeight: '600',
          }}>
            CLASIFICACIÓN EXCEPCIONAL
          </h3>
          
          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'var(--color-white)',
            lineHeight: '1.3',
            marginBottom: '1.5rem',
            fontWeight: '400',
          }}>
            Evaluación por tamaño, densidad y color
          </h4>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--color-cream-muted)',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            en un proceso sumamente meticuloso que asegura un sabor superior en cada sorbo
          </p>

          {/* Interactive slider display */}
          <div style={{
            backgroundColor: 'var(--color-green-dark)',
            border: '1px solid rgba(197,168,128,0.15)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2.5rem',
            boxShadow: 'var(--shadow-soft)',
          }}>
            <h5 style={{
              fontSize: '1rem',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
              marginBottom: '0.5rem',
            }}>
              {stages[activeStage].label}
            </h5>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--color-cream-muted)',
              lineHeight: '1.7',
            }}>
              {stages[activeStage].desc}
            </p>
          </div>

          {/* Three circular selector stages at the bottom */}
          <div style={{
            display: 'flex',
            gap: '2rem',
          }}>
            {stages.map((stg, index) => (
              <div 
                key={index}
                onClick={() => setActiveStage(index)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                className="stage-node"
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: `2px solid ${activeStage === index ? 'var(--color-gold)' : 'rgba(197, 168, 128, 0.2)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-green-darkest)',
                  boxShadow: activeStage === index ? `0 0 15px ${stg.color}bb` : 'none',
                  transition: 'var(--transition-medium)',
                  fontSize: '1.3rem',
                }}>
                  {stg.emoji}
                </div>
                
                <span style={{
                  marginTop: '0.75rem',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: activeStage === index ? '700' : '500',
                  color: activeStage === index ? 'var(--color-gold)' : 'var(--color-cream-muted)',
                  transition: 'var(--transition-fast)',
                }}>
                  {stg.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .grading-container-hover:hover .grading-portrait-img {
          transform: scale(1.03);
        }
        .stage-node:hover div {
          border-color: var(--color-gold) !important;
          transform: scale(1.05);
        }
        .stage-node:hover span {
          color: var(--color-gold) !important;
        }
        @media (max-width: 992px) {
          .grading-text-container {
            padding-left: 0 !important;
            text-align: center;
            margin-top: 3rem;
          }
          .grading-text-container div {
            text-align: left;
          }
          .grading-text-container div:last-child {
            justify-content: center;
          }
          .grading-image-wrapper {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default Grading;
