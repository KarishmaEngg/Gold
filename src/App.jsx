import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Dashboard from './components/Dashboard';
import Plans from './components/Plans';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black">
      {/* Navbar with working interactive links */}
      <Navbar 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenRegister={() => setIsRegisterOpen(true)} 
      />

      {/* Main Home Sections */}
      <main>
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
        <About />
        <Features />
        <Dashboard />
        <Plans />
        <Roadmap />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-8 text-center text-gray-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Future Gold Crypto Platform. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-amber-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToRegister={() => setIsRegisterOpen(true)} 
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
        onSwitchToLogin={() => setIsLoginOpen(true)} 
      />
    </div>
  );
}