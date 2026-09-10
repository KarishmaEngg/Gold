import React from 'react';

export default function Roadmap() {
  const steps = [
    { quarter: 'Q1 2025', title: 'Platform Conception', desc: 'Initial architecture design and smart contract security audit.' },
    { quarter: 'Q2 2025', title: 'Private Bullion Partnership', desc: 'Securing physical gold storage partnerships across global jurisdictions.' },
    { quarter: 'Q3 2025', title: 'Bitcoin Gateway Integration', desc: 'Implementing fast transaction settlement layers for global investors.' },
    { quarter: 'Q4 2025 & Beyond', title: 'Global Expansion', desc: 'Scaling mining output and releasing mobile application access.' },
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-slate-950 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider mb-4">
            Development <span className="text-amber-400">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            Our strategic milestones mapping out long-term security, expansion, and yield optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6 relative flex flex-col justify-between">
              <div>
                <span className="text-amber-400 font-extrabold text-sm tracking-widest uppercase block mb-2">{step.quarter}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800 text-[10px] text-gray-500 font-mono">
                STAGE 0{idx + 1} // VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}