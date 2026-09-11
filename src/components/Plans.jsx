import React from 'react';

export default function Plans() {
  const plans = [
    { name: "Starter Miner", price: "$500", roi: "150% ROI", period: "30 Days", desc: "Ideal for entry-level digital asset backing." },
    { name: "Gold VIP Tier", price: "$2,500", roi: "220% ROI", period: "60 Days", desc: "Enhanced hash power with priority daily payouts." },
    { name: "Enterprise Vault", price: "$10,000", roi: "300% ROI", period: "90 Days", desc: "Maximum allocation backed by physical gold reserves." }
  ];

  return (
    <section id="plans" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent uppercase tracking-wider mb-3">
          High-Yield Mining Plans
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-400 text-sm sm:text-base uppercase tracking-widest font-semibold">
          Select your contract allocation tier
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className="bg-black/80 backdrop-blur-xl border-2 border-amber-500/30 rounded-3xl p-8 shadow-2xl hover:border-amber-400 hover:scale-[1.02] transition-all duration-300 relative group flex flex-col justify-between"
          >
            {/* ROI Badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              {plan.roi}
            </div>

            <div>
              <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
              <p className="text-4xl font-black text-amber-400 mb-4 tracking-tight">{plan.price}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.desc}</p>
              
              <ul className="text-sm text-gray-300 space-y-3 mb-8 border-t border-amber-500/20 pt-6">
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-amber-400 font-bold">✓</span> Lock-in Period: <span className="text-white font-semibold">{plan.period}</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-amber-400 font-bold">✓</span> 24/7 Automated Payouts
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-amber-400 font-bold">✓</span> Fully Insured Gold Backup
                </li>
              </ul>
            </div>

            {/* Deploy Button with White Border */}
            <button className="w-full bg-transparent hover:bg-white hover:text-black text-white font-black py-4 rounded-xl border-2 border-white shadow-xl transition-all uppercase tracking-widest text-sm cursor-pointer mt-auto">
              Deploy Contract
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}