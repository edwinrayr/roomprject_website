import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink transition-colors duration-500 font-sans">
      {/* Navegación Global */}
      <Navbar />

      {/* Página Principal */}
      <Home />

      <Footer />
    </div>
  );
}

export default App;