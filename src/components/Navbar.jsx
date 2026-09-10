import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenLogin, onOpenRegister }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background blur and border glow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-amber-500/30 shadow-2xl shadow-amber-500/5 py-3' 
        : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with pulse glow */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 flex items-center justify-center border border-yellow-300/50 shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-black font-black text-xl tracking-tighter">FG</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-wider bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent block">
                FUTURE GOLD
              </span>
              <span className="text-[9px] tracking-[0.2em] text-amber-400/80 font-bold block uppercase">Crypto & Mining</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {['Home', 'About', 'Features', 'Plans', 'Dashboard', 'Roadmap'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-gray-300 hover:text-amber-400 text-xs font-bold tracking-widest uppercase transition-colors py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={onOpenLogin}
              className="text-gray-300 hover:text-amber-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl hover:bg-white/5 transition cursor-pointer"
            >
              Login
            </button>
            <button 
              onClick={onOpenRegister}
              className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-black text-xs font-black px-6 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 tracking-wider uppercase cursor-pointer"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-amber-400 focus:outline-none bg-white/5 p-2 rounded-xl border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with smooth slide */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0b0f19]/95 backdrop-blur-xl border-b border-amber-500/30 px-6 py-6 space-y-4 shadow-2xl animate-fade-in">
          {['Home', 'About', 'Features', 'Plans', 'Dashboard', 'Roadmap'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="block text-gray-300 hover:text-amber-400 text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5"
            >
              {item}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button 
              onClick={() => { setIsOpen(false); onOpenLogin(); }} 
              className="w-full text-center text-gray-200 hover:text-amber-400 font-bold text-sm py-2.5 rounded-xl border border-amber-500/30 uppercase tracking-wider"
            >
              Login
            </button>
            <button 
              onClick={() => { setIsOpen(false); onOpenRegister(); }} 
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-sm font-black py-3 rounded-xl shadow-lg shadow-amber-500/20 uppercase tracking-wider"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}