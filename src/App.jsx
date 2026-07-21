import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import BrandLoader from './components/BrandLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import EducatorsPage from './pages/EducatorsPage';
import ApplyPage from './pages/ApplyPage';
import NewsletterPage from './pages/NewsletterPage';
import LoginPage from './pages/LoginPage';
import LoginFooter from './components/LoginFooter';
import DataIntelligencePage from './pages/DataIntelligencePage';
import SystemsHardwarePage from './pages/SystemsHardwarePage';
import SoftwareArchitecturePage from './pages/SoftwareArchitecturePage';
import HealthTechPage from './pages/HealthTechPage';
import CareersPage from './pages/CareersPage';
import EducatorProfileDetailPage from './pages/EducatorProfileDetailPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import TuitionFaqPage from './pages/TuitionFaqPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Handles route switching side-effects safely within the Router context
function NavigationController({ setRouteLoading, setIsLogin }) {
  const location = useLocation();useEffect(() => {
  // Both login and apply pages activate Focus Mode (no main header, minimal footer)
  const isAuthPage = location.pathname === '/login' || location.pathname === '/apply';
  setIsLogin(isAuthPage); 

  setRouteLoading(true);
  const transitionTimer = window.setTimeout(() => {
    setRouteLoading(false);
  }, 450);

  return () => window.clearTimeout(transitionTimer);
}, [location.pathname, setRouteLoading, setIsLogin]);

  return null;
}

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Managed safely via the controller below

  const isGlobalLoading = initialLoading || routeLoading;

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 240;
      setShowHeader(!isNearBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    const timer = window.setTimeout(() => setInitialLoading(false), 900);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen flex-col border-t-8 border-yale-blue bg-yale-light font-sans selection:bg-yale-accent selection:text-white">
        {/* Dynamic global loading mask */}
        <BrandLoader isLoading={isGlobalLoading} />
        
        {/* Route context listener wrapper updates state safely */}
        <NavigationController setRouteLoading={setRouteLoading} setIsLogin={setIsLogin} />
        
        {!isLogin && <Header hidden={!showHeader} />}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/data-intelligence" element={<DataIntelligencePage />} />
          <Route path="/programs/systems-hardware" element={<SystemsHardwarePage />} />
          <Route path="/programs/software-architecture" element={<SoftwareArchitecturePage />} />
          <Route path="/programs/healthtech" element={<HealthTechPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/programs/:slug" element={<ProgramsPage />} />
          <Route path="/educators" element={<EducatorsPage />} />
          <Route path="/educators/:slug" element={<EducatorProfileDetailPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/tuition-faqs" element={<TuitionFaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        {isLogin ? <LoginFooter /> : <Footer />}
      </div>
    </Router>
  );
}

export default App;