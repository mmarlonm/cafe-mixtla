import React, { useState } from 'react';
import espressoCup from '../assets/images/espresso_cup.png';

const FeatureTerroir = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setEmail('');
      }, 2500);
    }
  };

  return (
    <section 
      id="terroir" 
      className="bg-darkest"
      style={{
        position: 'relative',
        padding: '8rem 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Decorative side graphics */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,168,128,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '4rem',
        alignItems: 'center',
      }} className="terroir-grid">
        
        {/* Left Side: Product Image Showcase */}
        <div 
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="terroir-image-container"
        >
          {/* Subtle glowing halo behind the cup */}
          <div style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 168, 128, 0.12)',
            filter: 'blur(40px)',
            zIndex: 1,
            animation: 'pulse-glow 4s ease-in-out infinite',
          }} />

          {/* Product Image */}
          <img 
            src={espressoCup} 
            alt="Café Espresso Mixtla" 
            style={{
              maxWidth: '85%',
              height: 'auto',
              borderRadius: '24px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              border: '1px solid rgba(197, 168, 128, 0.2)',
              zIndex: 2,
              animation: 'float-cup 6s ease-in-out infinite',
              transition: 'var(--transition-medium)',
            }}
            className="product-img-hover"
          />
        </div>

        {/* Right Side: Copy & CTA */}
        <div style={{ zIndex: 2 }}>
          <h3 style={{
            fontSize: '1rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.4',
          }}>
            ¿Deseas probar un café de terruño perfecto?
          </h3>
          
          <h4 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            fontWeight: '400',
            color: 'var(--color-white)',
            lineHeight: '1.3',
            marginBottom: '2rem',
          }}>
            Cultivado bajo la sombra de cedros centenarios
          </h4>

          <p style={{
            color: 'var(--color-cream-muted)',
            fontSize: '0.95rem',
            lineHeight: '1.9',
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
          }}>
            En las laderas escarpadas de la Sierra Negra, nuestras plantas de café conviven armónicamente con árboles frutales y especias silvestres como pimienta, cardamomo y vainilla silvestre. Esta simbiosis natural permite que los granos absorban un perfil aromático único e inimitable: una taza equilibrada, con cuerpo sedoso y notas dulces naturales que no requieren aditivos.
          </p>

          <button 
            className="btn-gold-outline"
            onClick={() => setShowModal(true)}
          >
            Probar este terruño
          </button>
        </div>
      </div>

      {/* Modal for Order Inquiry */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 26, 19, 0.9)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 200,
          padding: '1rem',
        }}>
          <div style={{
            backgroundColor: 'var(--color-green-dark)',
            border: '1px solid var(--color-gold)',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            maxWidth: '500px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
          }} className="fade-in">
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--color-gold)',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>

            {!submitted ? (
              <>
                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  color: 'var(--color-white)',
                  marginBottom: '1rem',
                }}>
                  Únete a la Cosecha Privada
                </h4>
                <p style={{
                  color: 'var(--color-cream-muted)',
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                }}>
                  Debido a la producción artesanal y limitada de las alturas de la Sierra Negra, distribuimos nuestros granos selectos bajo reserva. Introduce tu correo para recibir una invitación exclusiva a nuestro próximo lote de tueste.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '30px',
                      border: '1px solid rgba(197,168,128,0.3)',
                      backgroundColor: 'var(--color-green-darkest)',
                      color: 'var(--color-white)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: '0.3s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(197,168,128,0.3)'}
                  />
                  <button 
                    type="submit" 
                    className="btn-gold-outline"
                    style={{ width: '100%', borderRadius: '30px' }}
                  >
                    Enviar Solicitud
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🌱</span>
                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  color: 'var(--color-gold)',
                  marginBottom: '0.5rem',
                }}>
                  ¡Solicitud Recibida!
                </h4>
                <p style={{ color: 'var(--color-cream)' }}>
                  Te notificaremos tan pronto como abramos el próximo lote de tueste.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes float-cup {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .product-img-hover:hover {
          transform: scale(1.03) translateY(-10px) !important;
          box-shadow: 0 30px 60px rgba(197, 168, 128, 0.2) !important;
          border-color: var(--color-gold) !important;
        }
        @media (max-width: 992px) {
          .terroir-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .terroir-image-container {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureTerroir;
