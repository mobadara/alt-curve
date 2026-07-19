import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import SmartBackButton from '../components/SmartBackButton';

function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Safety validation gate
    if (!identifier.trim() || !password.trim()) {
      setError('Please provide your login credentials.');
      return;
    }

    // Backend payload architecture ready for integration
    const loginPayload = {
      usernameOrEmailOrId: identifier.trim(),
      password: password,
      rememberMe: rememberMe
    };
    
    console.log('Sending unified auth request payload:', loginPayload);
    // Role status in the data model will dictate where you redirect next
  };

  return (
    <main className="grow bg-slate-50 flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 relative min-h-[80vh]">
      {/* Positioned Back Button container wrapper */}
      <div className="w-full max-w-md mb-4 self-center">
        <SmartBackButton />
      </div>

      <div className="w-full max-w-md bg-white border border-slate-200 shadow-xl overflow-hidden rounded-sm">
        {/* Top Decorative Indicator bar */}
        <div className="h-2 bg-linear-to-r from-yale-blue to-orange-500" />
        
        <div className="p-8 sm:p-10">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl text-yale-blue mb-3">
              <FaGraduationCap />
            </div>
            <h1 className="font-serif text-3xl font-bold text-yale-blue tracking-tight">Welcome Back</h1>
            <p className="text-sm text-slate-500 mt-2">
              Access your personalized AltCurve workspace
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold rounded-md animate-in fade-in duration-200">
              {error}
            </div>
          )}

          {/* Form Stack */}
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            
            {/* Unified Identifier Input */}
            <div>
              <label htmlFor="identifier" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Username / Email / AltCurve ID
              </label>
              <div className="relative flex items-center border border-slate-300 rounded-sm bg-white focus-within:border-yale-blue transition-colors">
                <span className="pl-4 text-slate-400 text-sm">
                  <FaUser />
                </span>
                <input
                  id="identifier"
                  type="text"
                  required
                  placeholder="e.g., AC-2026-089"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full px-3 py-3 text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Password Input with Toggle */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs font-semibold text-orange-500 hover:text-yale-blue transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative flex items-center border border-slate-300 rounded-sm bg-white focus-within:border-yale-blue transition-colors">
                <span className="pl-4 text-slate-400 text-sm">
                  <FaLock />
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-3 pr-10 py-3 text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none text-sm"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me Box */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-yale-blue focus:ring-yale-blue/20 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2.5 text-sm font-medium text-slate-600 cursor-pointer select-none">
                Remember me on this device
              </label>
            </div>

            {/* Login Action Trigger */}
            <button
              type="submit"
              className="w-full py-3 bg-yale-blue hover:bg-orange-500 text-white rounded-sm font-semibold tracking-wide text-sm shadow-md transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>Sign In to Platform</span>
              <FaArrowRight className="text-xs" />
            </button>
          </form>

          {/* Call to Action Footer Section */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              New to our academic tracks?{' '}
              <Link to="/apply" className="font-bold text-orange-500 hover:text-yale-blue transition-colors inline-flex items-center gap-1">
                Get Started <span className="text-xs">→</span>
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

export default LoginPage;