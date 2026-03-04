import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home';
import { ArtistsPage } from './pages/ArtistsPage';
import { Footer } from './components/common/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { RulesPage } from './pages/RulesPage';
import { ContactPage } from './pages/ContactPage';
import { ReservePage } from './pages/ReservePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg text-ink transition-colors duration-500 font-sans">
        {/* El Navbar siempre se muestra arriba */}
        <Navbar />

        {/* El Router decide qué componente mostrar en medio */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reserve" element={<ReservePage />} />
        </Routes>

        {/* El Footer siempre se muestra abajo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;