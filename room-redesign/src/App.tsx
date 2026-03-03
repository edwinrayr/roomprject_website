import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink transition-colors duration-500 font-sans">
      {/* Navegación Global */}
      <Navbar />

      {/* Página Principal */}
      <Home />
    </div>
  );
}

export default App;