import React from 'react';

export default function Hero({ onOpenRegister }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Balanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-401464,resizemode-75,msid-70546630/markets/commodities/news/rbi-building-its-forex-kitty-with-gold-bricks.jpg" 
          alt="Industrial Gold Mining Background" 
          className="w-full h-full object-cover opacity-80 scale-105"
        />
        {/* Semi-transparent gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left text area */}
        <div className="space-y-6">
          <div className="inline-block bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 backdrop-blur-md">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">⚡ Secured by Bitcoin & Gold Standard</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            Invest Your money with <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent">Highest Return.</span>
          </h1>
          
          <p className="text-gray-200 text-base sm:text-lg max-w-lg leading-relaxed drop-shadow">
            Experience next-generation asset growth backed by high-yield global gold mining excavations and decentralized cryptocurrency liquidity pools.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onOpenRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded shadow-lg shadow-blue-600/30 transition-all uppercase tracking-widest text-sm cursor-pointer">
              REGISTER
            </button>
            <a 
              href="#about"
              className="border border-amber-500/50 hover:bg-amber-500/20 text-amber-300 font-bold px-8 py-4 rounded backdrop-blur-sm transition-all uppercase tracking-widest text-sm flex items-center justify-center">
              Learn More
            </a>
          </div>

          <div className="pt-6 flex items-center space-x-6 text-sm text-gray-300 border-t border-gray-700/60">
            <div>
              <span className="block text-xl font-bold text-yellow-400">250%</span>
              <span>Max ROI</span>
            </div>
            <div className="h-8 w-px bg-gray-700" />
            <div>
              <span className="block text-xl font-bold text-yellow-400">24/7</span>
              <span>Instant Payouts</span>
            </div>
            <div className="h-8 w-px bg-gray-700" />
            <div>
              <span className="block text-xl font-bold text-yellow-400">100%</span>
              <span>Secure Mining</span>
            </div>
          </div>
        </div>

        {/* Right Graphic card representing Gold Bars & Mining */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md bg-black/60 border border-amber-500/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-black font-black text-xs px-3 py-1 rounded-full uppercase shadow">
              Live Assets
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Gold Vault Reserve</h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-xl border border-amber-500/20 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">Bitcoin Rate Linked</span>
                  <span className="text-lg font-bold text-white">1 BTC = 32.4 oz Gold</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">₿</div>
              </div>
              <div className="bg-black/50 p-4 rounded-xl border border-amber-500/20 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">Daily Accrual Rate</span>
                  <span className="text-lg font-bold text-emerald-400">+3.5% Daily Yield</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">📈</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-400 h-2 rounded-full w-[85%]"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Vault Capacity</span>
                <span>85% Filled</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Ticker banner at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black/90 border-t border-amber-500/30 py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs text-amber-400 font-medium">
          <span>🌟 Invest for future in best platform</span>
          <span className="flex space-x-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-ping"></span>
            <span>System Operational & Mining Online</span>
          </span>
        </div>
      </div>
    </section>
  );
}