import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <div className="mesh-background" />
      <div className="mesh-pattern" />
      <div className="relative">
        <Hero />
        <About />
        <Goals />
        <Contact />
        <Navbar />
      </div>
    </div>
  );
}

export default App;