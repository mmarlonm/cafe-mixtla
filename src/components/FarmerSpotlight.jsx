import React, { useState } from 'react';
import farmerImg from '../assets/images/farmer_spotlight.png';

const FarmerSpotlight = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="calidad"
      className="bg-dark"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
      }}
    >
      <div className="split-section" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>

        {/* Left Side: Editorial text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingRight: '3rem',
          zIndex: 2,
        }} className="farmer-text-container">
          <h3 style={{
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1.5rem',
            fontWeight: '600',
          }}>
            ORGULLO DE LA SIERRA NEGRA
          </h3>

          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'var(--color-white)',
            lineHeight: '1.3',
            marginBottom: '1.5rem',
            fontWeight: '400',
          }}>
            Donde la agricultura artesanal y la ecología permanecen fuertes
          </h4>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--color-cream-muted)',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            “Nuestros caficultores son los verdaderos guardianes del bosque de niebla, heredando saberes que transforman la tierra en poesía líquida.”
          </p>

          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--color-gold)',
            marginBottom: '2rem',
          }} />

          <p style={{
            color: 'var(--color-cream-muted)',
            fontSize: '0.9rem',
            lineHeight: '1.8',
            letterSpacing: '0.02em',
          }}>
            Apoyamos activamente a las comunidades originarias de la Sierra Negra en Puebla mediante precios justos que superan los estándares de mercado y programas que incentivan el cultivo bajo sombra de conservación ecológica. Así garantizamos no solo una taza insuperable, sino el bienestar de las familias que dedican su vida a cosechar con amor.
          </p>
        </div>

        {/* Right Side: Portrait with Play overlay */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
        }} className="farmer-image-wrapper">

          {/* Framed container */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxHeight: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-soft)',
            border: '1px solid rgba(197, 168, 128, 0.2)',
          }} className="portrait-container-hover">
            <img
              src={farmerImg}
              alt="Caficultor de la Sierra Negra"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'var(--transition-slow)',
              }}
              className="farmer-portrait-img"
            />

            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(11,26,19,0.5), transparent)',
            }} />

            {/* Play Button Overlay */}
            <div
              onClick={() => setIsPlaying(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(29, 60, 45, 0.85)',
                border: '2px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-medium)',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)',
              }}
              className="play-btn-hover"
            >
              {/* Play symbol triangle */}
              <div style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '10px 0 10px 18px',
                borderColor: 'transparent transparent transparent var(--color-gold)',
                marginLeft: '5px',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Video / Slideshow Lightbox */}
      {isPlaying && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 26, 19, 0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 200,
        }}>
          <div style={{
            position: 'relative',
            width: '90%',
            maxWidth: '800px',
            backgroundColor: '#000',
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio: '16/9',
            boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
            border: '1px solid var(--color-gold)',
          }} className="fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'var(--color-gold)',
                border: '1px solid var(--color-gold)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              &times;
            </button>

            {/* Loop Video Simulator (Cinematic CSS & Text Ambient Video) */}
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
              {/* Slow zoom background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${farmerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.45,
                filter: 'blur(2px)',
                transform: 'scale(1.1)',
                animation: 'slow-zoom 20s linear infinite',
              }} />

              {/* Misty overlay clouds effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, rgba(11,26,19,0.8), transparent, rgba(11,26,19,0.8))',
                opacity: 0.7,
              }} />

              {/* Documentary narrative caption overlay */}
              <div style={{
                zIndex: 5,
                padding: '2rem',
                textAlign: 'center',
                maxWidth: '600px',
              }}>
                <span style={{
                  color: 'var(--color-gold)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1rem',
                }}>
                  Documental: Custodios de la Sierra
                </span>

                <h5 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  color: 'var(--color-white)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.4',
                }}>
                  Don Silvestre, Cosechador de la sierra negra
                </h5>

                <p style={{
                  color: 'var(--color-cream)',
                  fontSize: '0.95rem',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                }}>
                  "Aquí arriba, entre las nubes y el murmullo de los árboles, cosechamos despacio. El café no tiene prisa. Cada grano recoge el rocío de la mañana y la fuerza de nuestra tierra."
                </p>

                {/* Audio waves animation */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  marginTop: '2rem',
                  height: '24px',
                  alignItems: 'flex-end',
                }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                    <div
                      key={bar}
                      style={{
                        width: '3px',
                        backgroundColor: 'var(--color-gold)',
                        borderRadius: '2px',
                        animation: `audio-wave 1.2s ease-in-out infinite alternate`,
                        animationDelay: `${bar * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .portrait-container-hover:hover .farmer-portrait-img {
          transform: scale(1.04);
        }
        .play-btn-hover:hover {
          background-color: var(--color-gold) !important;
          transform: translate(-50%, -50%) scale(1.1) !important;
          box-shadow: 0 0 35px var(--color-gold) !important;
        }
        .play-btn-hover:hover div {
          border-color: transparent transparent transparent var(--color-green-darkest) !important;
        }
        @keyframes slow-zoom {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.12) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes audio-wave {
          0% { height: 4px; }
          100% { height: 24px; }
        }
        @media (max-width: 992px) {
          .farmer-text-container {
            padding-right: 0 !important;
            text-align: center;
          }
          .farmer-image-wrapper {
            margin-top: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FarmerSpotlight;
