import React from 'react';

export default function Features() {
  const featuresList = [
    {
      title: "Decentralized Gold Backing",
      desc: "Every digital asset unit issued on our platform corresponds directly to audited bullion metrics stored securely in certified global vaults.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy3vra_BOS-O0nNHMQe-KN-pjCQEBF2Sx1RZ_2IWubQ&s=10", // Yahan pehli image ka URL dalein
      animClass: "hover:-translate-x-1"
    },
    {
      title: "Automated Daily Payouts",
      desc: "Smart-contract driven architecture ensures your mining yields are credited directly to your account balance every 24 hours seamlessly.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eM_ewdBng01kL1QBKWj1LQWQzbE2lh_bBd3IdNBmlg&s=10", 
      animClass: "hover:-translate-y-2"
    },
    {
      title: "Institutional Security",
      desc: "Protected by military-grade encryption, multi-sig hardware cold storage, and comprehensive asset insurance policies for total safety.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KN2R9NkwQqjAnm2PJdkTRob6sjJd0ZdRog4vuDgl_g&s=10", 
      animClass: "hover:translate-x-1"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider mb-4">
            Platform <span className="text-amber-400">Core Features</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            Engineered for maximum stability, high-frequency yield distribution, and absolute transparency.
          </p>
        </div>

        {/* Features Grid with Directional Hover & Entry Styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feat, index) => (
            <div 
              key={index} 
              className={`bg-black/60 border border-amber-500/30 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400 transition-all duration-500 transform ${feat.animClass} shadow-xl hover:shadow-2xl hover:shadow-amber-500/10`}
            >
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all"></div>
              
              <div>
                {/* Image Icon Box */}
                <div className="mb-6  from-amber-600/20 to-yellow-400/20 w-25 h-25 ml-18 rounded-1xl flex items-center justify-center p-3 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={feat.imgSrc} 
                    alt={feat.title} 
                    className="w-full h-full object-contain filter drop-shadow" 
                  />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              <div className="flex items-center text-amber-400 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Explore Protocol &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}