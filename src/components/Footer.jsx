  import { Link } from 'react-router-dom';
import { FaGraduationCap, FaEnvelope, FaPhoneAlt, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { footerLinks, socialLinks } from '../data/academyData';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-white md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-200">
              <FaGraduationCap className="text-orange-500" />
              Online academy for children, teens, and families
            </div>
            <div className="mb-5 flex items-center gap-3">
              <FaGraduationCap className="text-3xl text-orange-500" />
              <h2 className="font-serif text-2xl font-semibold text-white">AltCurve <span className="text-orange-500">Academy</span></h2>
            </div>
            <p className="mb-6 max-w-xl text-sm leading-7 text-slate-400">
              A calm, future-focused academic partner for families across Ghana, Nigeria, the UK, the US, and beyond, with personalised guidance, flexible support, and online learning that feels clear and reassuring.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/newsletter"
                className="inline-flex items-center gap-2 rounded-sm bg-orange-500 px-5 py-3 text-sm font-semibold transition-colors hover:bg-orange-600"
              >
                Join our mailing list <FaArrowRight />
              </Link>
              <Link to="/apply" className="inline-flex items-center rounded-sm border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white">
                Start an application
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Explore</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                <FaEnvelope className="mt-1 text-orange-500" />
                <a
                  href="mailto:hello@altcurve.academy"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open('mailto:hello@altcurve.academy', '_blank', 'noopener,noreferrer');
                  }}
                  className="transition-colors hover:text-white"
                >
                  hello@altcurve.academy
                </a>
              </li>
              <li className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800/80 p-3 shadow-sm">
                <div className="mb-2 flex items-center gap-2 font-medium text-slate-200">
                  <FaPhoneAlt className="text-orange-500" />
                  Regional phone lines
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><span className="text-base">🇬🇭</span> GH • +233 (0) 000 0000</li>
                  <li className="flex items-center gap-2"><span className="text-base">🇳🇬</span> NG • +234 (0) 806 011 1429</li>
                  <li className="flex items-center gap-2"><span className="text-base">🇬🇧</span> UK • +44 20 0000 0000</li>
                  <li className="flex items-center gap-2"><span className="text-base">🇺🇸</span> US • +1 (212) 000-0000</li>
                </ul>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                <FaGlobe className="text-orange-500" />
                <a href="https://altcurve.academy" className="transition-colors hover:text-white">
                  altcurve.academy
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm text-slate-200 transition-colors hover:bg-orange-500"
                    aria-label={item.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Corporate Governance Bar */}
        <div className="mx-auto mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <span>© {new Date().getFullYear()} AltCurve Academy. All rights reserved.</span>
            <span className="text-xs text-slate-600">Supporting learners with calm guidance and global care.</span>
          </div>
          
          {/* Unified Compliance Links Grid */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            <Link to="/privacy" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-slate-300">
              Terms of Service
            </Link>
            <Link to="/conduct" className="transition-colors hover:text-slate-300">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;