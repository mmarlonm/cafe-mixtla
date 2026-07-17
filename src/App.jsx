import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import FeatureTerroir from './components/FeatureTerroir';
import FarmerSpotlight from './components/FarmerSpotlight';
import Plantations from './components/Plantations';
import Grading from './components/Grading';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('origen');

  const sections = [
    { id: 'origen', label: 'El Origen' },
    { id: 'historia', label: 'Nuestra Historia' },
    { id: 'terroir', label: 'Terroir' },
    { id: 'calidad', label: 'El Orgullo' },
    { id: 'cosecha', label: 'La Cosecha' },
    { id: 'calidad-granos', label: 'Calidad' },
    { id: 'comunidad', label: 'Comunidad' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Navigation & Sidebar HUD */}
      <Header activeSection={activeSection} sections={sections} />

      {/* Landing Page Content */}
      <Hero />
      <Story />
      <FeatureTerroir />
      <FarmerSpotlight />
      <Plantations />
      <Grading />
      <Footer />
    </div>
  );
}

export default App;
