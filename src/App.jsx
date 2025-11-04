import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Steps />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} App Permit — Built for modern, compliant teams.
      </footer>
    </div>
  );
}

export default App;
