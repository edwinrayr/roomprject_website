import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Componentes Globales
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import './i18n';

// Páginas
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { RulesPage } from './pages/RulesPage';
import { ContactPage } from './pages/ContactPage';
import { ReservePage } from './pages/ReservePage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Preloader />

        <div className="flex flex-col min-h-screen bg-bg text-ink transition-colors duration-500 font-sans selection:bg-gold selection:text-white">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reserve" element={<ReservePage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;