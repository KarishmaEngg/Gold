import React from 'react';

export default function Dashboard() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-amber-500/20 pb-6">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Member Dashboard
          </h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back, Investor. Monitor your active mining yields.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform text-sm cursor-pointer">
            Deposit Funds
          </button>
          <button className="border border-amber-500/40 text-amber-400 font-bold px-5 py-2.5 rounded-xl hover:bg-amber-500/10 transition text-sm cursor-pointer">
            Withdraw
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#0b0f19] border border-amber-500/20 rounded-2xl p-6 shadow-xl hover:border-amber-400/50 transition duration-300 transform hover:-translate-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Total Balance</p>
          <h3 className="text-3xl font-black text-white mt-2">$24,850.00</h3>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">+14.2% this week</span>
        </div>
        <div className="bg-[#0b0f19] border border-amber-500/20 rounded-2xl p-6 shadow-xl hover:border-amber-400/50 transition duration-300 transform hover:-translate-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Active Mining Power</p>
          <h3 className="text-3xl font-black text-amber-400 mt-2">1,250 TH/s</h3>
          <span className="text-xs text-amber-300/80 font-bold mt-2 inline-block">Status: Optimal</span>
        </div>
        <div className="bg-[#0b0f19] border border-amber-500/20 rounded-2xl p-6 shadow-xl hover:border-amber-400/50 transition duration-300 transform hover:-translate-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Daily Yield</p>
          <h3 className="text-3xl font-black text-white mt-2">+$310.50</h3>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">Auto-compounding</span>
        </div>
        <div className="bg-[#0b0f19] border border-amber-500/20 rounded-2xl p-6 shadow-xl hover:border-amber-400/50 transition duration-300 transform hover:-translate-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Referral Bonus</p>
          <h3 className="text-3xl font-black text-yellow-300 mt-2">$1,420.00</h3>
          <span className="text-xs text-gray-400 font-bold mt-2 inline-block">12 Active Referrals</span>
        </div>
      </div>
    </div>
  );
}