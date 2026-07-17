import React, { useState } from 'react';
import cherriesBanner1 from '../assets/images/cherries_banner_1.png';
import cherriesBanner2 from '../assets/images/cherries_banner_2.jpg';

const Plantations = () => {
  const [activeTooltip, setActiveTooltip] = useState(null); // 'banner1' or 'banner2' or null

  const toggleTooltip = (tooltip) => {
    if (activeTooltip === tooltip) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltip);
    }
  };

  return (
    <section id="cosecha" style={{ width: '100%' }}>
      {/* ---------------- TRANSITION BANNER 1 ---------------- */}
      <div
        className="parallax-banner"
        style={{ backgroundImage: `url(${cherriesBanner1})` }}
      >
        <button
          className="btn-plus-interactive"
          onClick={() => toggleTooltip('banner1')}
          title="Ver detalle del fruto"
          style={{ position: 'relative', zIndex: 10 }}
        >
          {activeTooltip === 'banner1' ? '×' : '+'}
        </button>

        {/* Tooltip Content */}
        {activeTooltip === 'banner1' && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(11, 26, 19, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--color-gold)',
              borderRadius: '12px',
              padding: '1.5rem',
              maxWidth: '320px',
              width: '85%',
              color: 'var(--color-cream)',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              zIndex: 15,
              animation: 'tooltip-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <h5 style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-gold)',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
            }}>
              Maduración Óptima
            </h5>
            <p style={{ fontSize: '0.8rem', lineHeight: '1.5', color: 'var(--color-cream-muted)' }}>
              Solo las cerezas que han adquirido un color rojo rubí profundo y una textura firme pero flexible son seleccionadas. Este punto exacto garantiza la acidez balanceada y el dulzor de Cafe MIXTLA.
            </p>
          </div>
        )}
      </div>

      {/* ---------------- PLANTATION TEXT SECTION ---------------- */}
      <div
        className="section-container bg-darkest"
        style={{
          padding: '6rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {/* Top Divider */}
          <div className="decorative-divider">
            <div className="diamond-separator">
              <div className="diamond" />
              <div className="diamond" />
            </div>
          </div>

          <h3 style={{
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem',
            fontWeight: '600',
          }}>
            PLANTACIONES
          </h3>

          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            fontWeight: '400',
            lineHeight: '1.4',
            marginBottom: '1rem',
            color: 'var(--color-white)',
          }}>
            donde los agricultores se toman el tiempo de cosechar a mano
          </h4>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--color-cream-muted)',
            maxWidth: '650px',
            margin: '0 auto',
          }}>
            únicamente las cerezas de café perfectamente maduras
          </p>
        </div>
      </div>

      {/* ---------------- TRANSITION BANNER 2 ---------------- */}
      <div
        className="parallax-banner"
        style={{ backgroundImage: `url(${cherriesBanner2})` }}
      >
        <button
          className="btn-plus-interactive"
          onClick={() => toggleTooltip('banner2')}
          title="Ver técnica de cosecha"
          style={{ position: 'relative', zIndex: 10 }}
        >
          {activeTooltip === 'banner2' ? '×' : '+'}
        </button>

        {/* Tooltip Content */}
        {activeTooltip === 'banner2' && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(11, 26, 19, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--color-gold)',
              borderRadius: '12px',
              padding: '1.5rem',
              maxWidth: '320px',
              width: '85%',
              color: 'var(--color-cream)',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              zIndex: 15,
              animation: 'tooltip-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <h5 style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-gold)',
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
            }}>
              Cosecha Selectiva (Picking)
            </h5>
            <p style={{ fontSize: '0.8rem', lineHeight: '1.5', color: 'var(--color-cream-muted)' }}>
              Nuestros caficultores inspeccionan cada rama de manera individual. No realizamos arrastre mecánico; cada cereza se desprende manualmente para no dañar las yemas de la planta que florecerán la siguiente temporada.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes tooltip-appear {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Plantations;
