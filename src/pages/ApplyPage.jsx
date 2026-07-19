import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaChild } from 'react-icons/fa';
import SmartBackButton from '../components/SmartBackButton';

function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'parent', // Default selection
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    console.log('Registering user payload:', formData);
    // Wire up to backend API authentication pipeline here
  };

  return (
    <main className="grow bg-slate-50 flex items-center justify-center min-h-[90vh]">
      <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Smart Back Navigation Row */}
        <div className="mb-4">
          <SmartBackButton />
        </div>

        {/* Master Two-Column Registration Container */}
        <div className="grid w-full grid-cols-1 md:grid-cols-12 bg-white border border-slate-200 shadow-xl rounded-sm overflow-hidden">
          
          {/* Column 1: Left Visual Spotlight Area */}
          <div className="hidden md:flex md:col-span-5 bg-yale-dark relative flex-col justify-between p-8 text-white">
            {/* Background Texture Mask */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">AltCurve Academy</span>
              <h2 className="font-serif text-3xl font-bold mt-4 leading-tight">Begin Your Child's Engineering Track</h2>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-sm leading-relaxed text-slate-300 italic">
                "Our kids aren't just memorizing code; they're learning systems architecture, robotics physics, and deep technical analytical reasoning skills."
              </p>
              <div className="mt-4 border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Join globally verified cohorts</span>
              </div>
            </div>
            
            {/* Visual Image Anchor */}
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600" 
              alt="Young innovator configuring hardware electronics"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
            />
          </div>

          {/* Column 2: Right Interactive Account Generation Form */}
          <div className="col-span-1 md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="font-serif text-3xl font-bold text-yale-blue tracking-tight">Create Account</h1>
              <p className="text-sm text-slate-500 mt-1">Set up your portal to select learning pathways and tracks</p>
            </div>

            {error && (
              <div className="mb-6 p-3.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Specialized Account Role Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">I am signing up as a:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'parent' })}
                    className={`p-3 text-center border text-xs font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer focus:outline-none ${
                      formData.role === 'parent' 
                        ? 'border-yale-blue bg-blue-50/50 text-yale-blue' 
                        : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    Parent / Sponsor
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'student' })}
                    className={`p-3 text-center border text-xs font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer focus:outline-none ${
                      formData.role === 'student' 
                        ? 'border-yale-blue bg-blue-50/50 text-yale-blue' 
                        : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    Independent Teen
                  </button>
                </div>
              </div>

              {/* Full Name Input */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Full Name</label>
                <div className="relative flex items-center border border-slate-300 rounded-sm bg-white focus-within:border-yale-blue transition-colors">
                  <span className="pl-4 text-slate-400 text-sm"><FaUser /></span>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g., Muyiwa Obadara"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2.5 text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Email Address Input */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                <div className="relative flex items-center border border-slate-300 rounded-sm bg-white focus-within:border-yale-blue transition-colors">
                  <span className="pl-4 text-slate-400 text-sm"><FaEnvelope /></span>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="hello@altcurve.academy"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="secret" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Choose Secure Password</label>
                <div className="relative flex items-center border border-slate-300 rounded-sm bg-white focus-within:border-yale-blue transition-colors">
                  <span className="pl-4 text-slate-400 text-sm"><FaLock /></span>
                  <input
                    id="secret"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2.5 text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Action Trigger */}
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-orange-500 hover:bg-yale-blue text-white rounded-sm font-semibold tracking-wide text-sm shadow-md transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Initialize Account Space</span>
                <FaArrowRight className="text-xs" />
              </button>
            </form>

            {/* Back to Login Anchor */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500">
                Already registered with us?{' '}
                <Link to="/login" className="font-bold text-yale-blue hover:text-orange-500 transition-colors cursor-pointer">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ApplyPage;