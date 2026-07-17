import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="comunidad"
      className="bg-dark"
      style={{
        padding: '5rem 2rem 3rem 2rem',
        borderTop: '1px solid rgba(197, 168, 128, 0.1)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
      }}>

        {/* Branding header */}
        <div style={{ textAlign: 'center' }}>
          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.8rem',
            letterSpacing: '0.15em',
            color: 'var(--color-white)',
            textTransform: 'uppercase',
            marginBottom: '0.25rem',
          }}>
            Café <span style={{ color: 'var(--color-gold)' }}>MIXTLA</span>
          </h4>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-cream-muted)',
          }}>
            Orgullo de la Sierra Negra
          </p>
        </div>

        {/* Separator */}
        <div className="diamond-separator">
          <div className="diamond" />
          <div className="diamond large" />
          <div className="diamond" />
        </div>

        {/* Contact Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          width: '100%',
          textAlign: 'center',
        }} className="footer-links-grid">
          <div>
            <h5 style={{ color: 'var(--color-gold)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              El Terruño
            </h5>
            <p style={{ color: 'var(--color-cream-muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              Sierra Negra, Puebla, México<br />
              Altitud: 1,500 msnm<br />
              238 156 7737
            </p>
          </div>
          <div>
            <h5 style={{ color: 'var(--color-gold)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Navegación
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <a href="#origen" style={{ color: 'var(--color-cream-muted)' }} className="footer-link-hover">El Origen</a>
              <a href="#historia" style={{ color: 'var(--color-cream-muted)' }} className="footer-link-hover">Nuestra Historia</a>
              <a href="#cosecha" style={{ color: 'var(--color-cream-muted)' }} className="footer-link-hover">La Cosecha</a>
              <a href="#calidad" style={{ color: 'var(--color-cream-muted)' }} className="footer-link-hover">Calidad</a>
            </div>
          </div>
          <div>
            <h5 style={{ color: 'var(--color-gold)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Filosofía
            </h5>
            <p style={{ color: 'var(--color-cream-muted)', fontSize: '0.85rem', lineHeight: '1.7', fontStyle: 'italic' }}>
              "Cultivamos con paciencia y respeto por la biodiversidad local para entregar la esencia pura de nuestra serranía."
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div style={{
          width: '100%',
          borderTop: '1px solid rgba(244, 234, 225, 0.05)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'var(--color-cream-muted)',
        }} className="footer-bottom">
          <p>&copy; {currentYear} Café MIXTLA. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="footer-link-hover">Aviso de Privacidad</a>
            <a href="#" className="footer-link-hover">Términos de Servicio</a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link-hover {
          transition: var(--transition-fast);
        }
        .footer-link-hover:hover {
          color: var(--color-gold) !important;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
