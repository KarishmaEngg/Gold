import React, { useState } from 'react';

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  if (!isOpen) return null;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Account created successfully for ${username}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold">✕</button>
        
        <h2 className="text-2xl font-black text-white uppercase mb-2">Create <span className="text-amber-400">Account</span></h2>
        <p className="text-gray-400 text-sm mb-6">Join Future Gold and start earning through Bitcoin mining investments.</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Username</label>
            <input 
              type="text" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
              placeholder="johndoe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 text-sm"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 rounded-lg uppercase tracking-wider text-sm shadow-lg hover:opacity-95 transition-opacity">
            Register Account
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          Already have an account?{' '}
          <button onClick={() => { onClose(); onSwitchToLogin(); }} className="text-amber-400 font-bold hover:underline">
            Login here
          </button>
        </div>
      </div>
    </div>
  );
}