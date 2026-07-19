import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGraduationCap, FaChevronDown, FaChevronRight, FaHome, FaArrowRight } from 'react-icons/fa';

function Header({ hidden }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePortalOpen, setIsMobilePortalOpen] = useState(false);
  const [isProgramsMenuOpen, setIsProgramsMenuOpen] = useState(false);
  const [isCareerSubmenuOpen, setIsCareerSubmenuOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileCareerOpen, setIsMobileCareerOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handlePointerDown = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.menu-toggle-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navItemClass = 'relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-200 hover:text-yale-blue hover:after:scale-x-100';

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePortalOpen(false);
    setIsMobileProgramsOpen(false);
    setIsMobileCareerOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur transition-all duration-300 ${
        hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-3xl text-yale-blue" />
          <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-yale-dark">
            AltCurve <span className="text-orange-500 font-sans text-xl font-semibold tracking-wide">Academy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-baseline gap-6 text-sm font-medium text-slate-700 md:flex lg:gap-8 lg:text-base">
          <Link to="/about" className={`${navItemClass} transition-colors self-center`}>
            About Us
          </Link>
          
          <div
            className="group relative self-center"
            onMouseEnter={() => setIsProgramsMenuOpen(true)}
            onMouseLeave={() => {
              setIsProgramsMenuOpen(false);
              setIsCareerSubmenuOpen(false);
            }}
          >
            <button className={`flex items-baseline gap-1.5 transition-colors ${navItemClass} focus:outline-none`}>
              <span>Pathways</span>
              <FaChevronDown className="text-[10px] transform translate-y-[1px]" />
            </button>
            <div className={`absolute left-0 top-full mt-[1px] flex min-w-56 flex-col border border-slate-200 bg-white p-1 shadow-xl transition-all duration-200 ${isProgramsMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
              <Link to="/programs" className="px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-orange-500">
                Foundation
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsCareerSubmenuOpen(true)}
                onMouseLeave={() => setIsCareerSubmenuOpen(false)}
              >
                <button className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-orange-500">
                  <span>Career Path</span>
                  <FaChevronRight className="ml-auto text-xs" />
                </button>
                <div className={`absolute left-full top-0 ml-[1px] flex min-w-56 flex-col border border-slate-200 bg-white p-1 shadow-xl transition-all duration-200 ${isCareerSubmenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                  <Link to="/programs/data-intelligence" className="px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-orange-500">
                    Data & Intelligence
                  </Link>
                  <Link to="/programs/systems-hardware" className="px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-orange-500">
                    Systems & Hardware
                  </Link>
                  <Link to="/programs/software-architecture" className="px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-orange-500">
                    Software Architecture
                  </Link>
                  <Link to="/programs/healthtech" className="px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-orange-500">
                    HealthTech Pre-Med
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/careers" className={`${navItemClass} transition-colors self-center`}>
            Careers
          </Link>
          <Link to="/educators" className={`${navItemClass} transition-colors self-center`}>
            Our Educators
          </Link>

          <Link to="/login" className={`${navItemClass} transition-colors self-center`}>
            Login
          </Link>

          <Link to="/apply" className="rounded-sm bg-yale-blue px-6 py-2.5 text-white shadow-md transition-all hover:bg-orange-500 hover:scale-[1.02] font-semibold tracking-wide text-sm self-center">
            Get Started
          </Link>
        </nav>

        {/* Morphing Toggle Menu Button - Explicitly Z-Indexed */}
        <button
          className="menu-toggle-btn relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 active:scale-95 md:hidden focus:outline-none z-[60]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <span className={`h-0.5 w-5 bg-yale-dark rounded-full transition-all duration-300 transform origin-center ${isMobileMenuOpen ? 'translate-y-2 rotate-45 !bg-yale-dark' : ''}`} />
          <span className={`h-0.5 w-5 bg-yale-dark rounded-full transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`} />
          <span className={`h-0.5 w-5 bg-yale-dark rounded-full transition-all duration-300 transform origin-center ${isMobileMenuOpen ? '-translate-y-2 -rotate-45 !bg-yale-dark' : ''}`} />
        </button>
      </div>

      {/* Dimmed Background Overlay Layer */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Off-Canvas Panel with Smooth Sliding State Transitions */}
      <div 
        ref={mobileMenuRef} 
        className={`fixed inset-y-0 right-0 z-50 h-screen w-[85%] max-w-sm bg-yale-dark text-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header content with safety margin block */}
        <div className="relative border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent px-6 py-6 flex items-center gap-4 pt-20">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-orange-500 hover:text-orange-400"
          >
            <FaHome />
          </Link>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-0.5">Explore</p>
            <div className="font-serif text-lg font-semibold text-white tracking-wide">AltCurve Menu</div>
          </div>
        </div>

        {/* Mobile Nav Links Container */}
        <nav className="flex flex-col flex-grow overflow-y-auto py-4 px-4 gap-1">
          <button
            onClick={() => setIsMobileProgramsOpen((prev) => !prev)}
            className={`flex w-full items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-colors text-slate-100 ${isMobileProgramsOpen ? 'bg-white/5 text-orange-400' : 'hover:bg-white/5'}`}
          >
            <span>Programs</span>
            {isMobileProgramsOpen ? <FaChevronDown className="text-xs" /> : <FaChevronRight className="text-xs" />}
          </button>
          
          {isMobileProgramsOpen && (
            <div className="flex flex-col bg-slate-900/40 rounded-xl mt-1 mx-1 overflow-hidden">
              <Link to="/programs" onClick={closeMobileMenu} className="px-8 py-3 text-sm text-slate-300 hover:text-white border-b border-white/5 transition-colors">
                Foundation
              </Link>
              <button
                onClick={() => setIsMobileCareerOpen((prev) => !prev)}
                className="flex items-center justify-between px-8 py-3 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <span>Career Path</span>
                <FaChevronRight className={`text-[10px] transition-transform duration-200 ${isMobileCareerOpen ? 'rotate-90 text-orange-400' : ''}`} />
              </button>
              {isMobileCareerOpen && (
                <div className="flex flex-col bg-slate-950/30 pl-4">
                  <Link to="/programs/data-intelligence" onClick={closeMobileMenu} className="px-6 py-2.5 text-xs text-slate-400 hover:text-orange-400 transition-colors border-b border-white/5">
                    Data & Intelligence
                  </Link>
                  <Link to="/programs/systems-hardware" onClick={closeMobileMenu} className="px-6 py-2.5 text-xs text-slate-400 hover:text-orange-400 transition-colors border-b border-white/5">
                    Systems & Hardware
                  </Link>
                  <Link to="/programs/software-architecture" onClick={closeMobileMenu} className="px-6 py-2.5 text-xs text-slate-400 hover:text-orange-400 transition-colors border-b border-white/5">
                    Software Architecture
                  </Link>
                  <Link to="/programs/healthtech" onClick={closeMobileMenu} className="px-6 py-2.5 text-xs text-slate-400 hover:text-orange-400 transition-colors">
                    HealthTech Pre-Med
                  </Link>
                </div>
              )}
            </div>
          )}

          <Link to="/about" onClick={closeMobileMenu} className="px-4 py-3.5 rounded-xl font-medium text-slate-100 hover:bg-white/5 transition-colors">
            About Us
          </Link>
          <Link to="/staff-directory" onClick={closeMobileMenu} className="px-4 py-3.5 rounded-xl font-medium text-slate-100 hover:bg-white/5 transition-colors">
            Our Educators
          </Link>
          <Link to="/careers" onClick={closeMobileMenu} className="px-4 py-3.5 rounded-xl font-medium text-slate-100 hover:bg-white/5 transition-colors">
            Careers
          </Link>

          <Link to="/login" onClick={closeMobileMenu} className="px-4 py-3.5 rounded-xl font-medium text-slate-100 hover:bg-white/5 transition-colors">
            Login
          </Link>
        </nav>

        {/* Bottom Spotlight Call To Action Area */}
        <div className="p-6 border-t border-white/10 bg-slate-900/20">
          <Link 
            to="/apply" 
            onClick={closeMobileMenu} 
            className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white shadow-lg text-center flex items-center justify-center gap-2 transition-transform active:scale-95 text-base"
          >
            <span>Get Started Now</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;