import React from 'react';
import aboutImg1 from '../assets/about-1.jpg';
import aboutImg2 from '../assets/about-2.jpg'; 
import aboutImg3 from '../assets/about-3.jpg'; 
export default function About() {
  const aboutCards = [
    {
      title: "Physical Backing",
      desc: "Every digital asset unit issued on our platform corresponds directly to audited bullion metrics stored securely in certified global vaults.",
      imgSrc: aboutImg1,
    },
    {
      title: "Bitcoin Liquidity",
      desc: "Quick deposits and lightning-fast automated withdrawals processed securely using Bitcoin and stablecoin gateway integration.",
      imgSrc: aboutImg2,
    },
    {
      title: "Military-Grade Security",
      desc: "Advanced DDoS defense, hardware cold wallets, and multi-signature infrastructure safeguarding your principal investment funds.",
      imgSrc: aboutImg3,
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider mb-4">
            About <span className="text-amber-400">Future Gold</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            We bridge physical gold commodity reserves with decentralized Bitcoin blockchain technology, offering high-security investment vehicles designed for elite capital growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-slate-900/60 border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group shadow-xl hover:shadow-amber-500/5 flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Image Icon Container */}
              <div className="w-25 h-20 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 ml-15 border border-amber-500/30 overflow-hidden p-2.5 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={card.imgSrc} 
                  alt={card.title} 
                  className="w-full h-full object-cover rounded-lg filter drop-shadow"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {card.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}