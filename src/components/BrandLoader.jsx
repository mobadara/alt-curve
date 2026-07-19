import { useEffect, useState } from 'react';

function BrandLoader({ isLoading }) {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = window.setTimeout(() => setVisible(false), 420);
      return () => window.clearTimeout(timer);
    }

    setVisible(true);
    return undefined;
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm transition-all duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-white/15" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yale-accent animate-spin" />
          <div className="absolute inset-3 rounded-full bg-white/10" />
        </div>
        <div className="mb-3 font-serif text-3xl font-semibold tracking-tight text-white">
          AltCurve <span className="text-yale-accent">Academy</span>
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Preparing your learning journey</p>
        <div className="mt-4 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-yale-accent animate-pulse" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/70 animate-pulse [animation-delay:120ms]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/50 animate-pulse [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}

export default BrandLoader;
