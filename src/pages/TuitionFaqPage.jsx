import { useState } from 'react';
import { FaChevronDown, FaCheck, FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: "How does the 90% Launch Cohort Scholarship voucher work?",
    a: "Selected applicants receive a unique single-use voucher code bound to their email. When entered on the checkout page, it instantly reduces tuition by 90% for the entire term."
  },
  {
    q: "What equipment or laptops are required?",
    a: "Learners need a modern laptop (Windows, macOS, or Linux) with at least 8GB RAM and a stable internet connection. For hardware tracks, component kits are shipped directly to your provided address."
  },
  {
    q: "Can a parent register multiple children across different pathways?",
    a: "Yes! A parent creates a single master account from which they can manage multiple student profiles, track individual progress, and view separate report cards."
  },
  {
    q: "What are the live class schedules?",
    a: "Classes run on weekend mornings and weekday late afternoons to ensure no conflict with regular school hours. All sessions are recorded for review."
  }
];

function TuitionFaqPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="grow bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            Transparent Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yale-blue tracking-tight">
            Tuition & Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent investment in your child's technical future—with substantial scholarship support for our launch cohort.
          </p>
        </div>

        {/* Pricing Comparison Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden mb-16 max-w-3xl mx-auto">
          <div className="bg-yale-blue p-8 text-white text-center relative">
            <span className="bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Inaugural Launch Term
            </span>
            <h2 className="font-serif text-3xl font-bold mt-4">Full Academy Access</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-slate-400 line-through text-lg">$350 USD</span>
              <span className="text-4xl font-extrabold text-orange-400">$35 USD</span>
              <span className="text-xs text-slate-300">/ term (with 90% voucher)</span>
            </div>
          </div>

          <div className="p-8 space-y-4">
            <h3 className="font-serif text-lg font-bold text-yale-blue border-b border-slate-100 pb-2">What is included in tuition:</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3"><FaCheck className="text-emerald-500 text-xs" /> Live instructor-led technical workshops (12-week intensive)</li>
              <li className="flex items-center gap-3"><FaCheck className="text-emerald-500 text-xs" /> 1-on-1 mentor code reviews & project debugging</li>
              <li className="flex items-center gap-3"><FaCheck className="text-emerald-500 text-xs" /> Dedicated Parent Portal access & progress reports</li>
              <li className="flex items-center gap-3"><FaCheck className="text-emerald-500 text-xs" /> Verified Certificate of Engineering Completion</li>
            </ul>

            <div className="pt-4 text-center">
              <Link to="/scholarships" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-yale-blue text-white font-bold text-sm rounded-sm transition-colors">
                <FaTicketAlt /> Apply for 90% Scholarship Voucher
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-yale-blue text-center mb-6 flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-orange-500" /> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center font-serif font-bold text-yale-blue hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown className={`text-xs text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}

export default TuitionFaqPage;