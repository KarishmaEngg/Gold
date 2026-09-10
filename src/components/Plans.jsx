import React from 'react';

export default function Plans() {
  const plans = [
    { name: "Starter Miner", price: "$500", roi: "150% ROI", period: "30 Days", desc: "Ideal for entry-level digital asset backing." },
    { name: "Gold VIP Tier", price: "$2,500", roi: "220% ROI", period: "60 Days", desc: "Enhanced hash power with priority daily payouts." },
    { name: "Enterprise Vault", price: "$10,000", roi: "300% ROI", period: "90 Days", desc: "Maximum allocation backed by physical gold reserves." }
  ];

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
          High-Yield Mining Plans
        </h2>
        <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">Select your contract allocation tier</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-[#0b0f19] border border-amber-500/30 rounded-3xl p-8 shadow-2xl hover:border-amber-400 hover:scale-105 transition-all duration-300 relative group">
            <div className="absolute -top-3 right-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {plan.roi}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-3xl font-black text-amber-400 mb-4">{plan.price}</p>
            <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
            <ul className="text-sm text-gray-300 space-y-3 mb-8">
              <li className="flex items-center gap-2">✓ Lock-in Period: {plan.period}</li>
              <li className="flex items-center gap-2">✓ 24/7 Automated Payouts</li>
              <li className="flex items-center gap-2">✓ Fully Insured Gold Backup</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition tracking-wider uppercase text-sm cursor-pointer">
              Deploy Contract
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}