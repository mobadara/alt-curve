import { Link } from 'react-router-dom';

function LoginFooter() {
  return (
    <footer className="py-8 text-center text-slate-400 text-xs">
      <div className="flex justify-center gap-6 mb-4">
        <Link to="/privacy" className="hover:text-yale-blue transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-yale-blue transition-colors">Terms of Service</Link>
        <Link to="/support" className="hover:text-yale-blue transition-colors">Support</Link>
      </div>
      <p>© {new Date().getFullYear()} AltCurve Academy. Trusted by families globally.</p>
    </footer>
  );
}

export default LoginFooter;