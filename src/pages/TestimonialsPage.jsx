import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaCheckCircle, FaUserCheck, FaPaperPlane } from 'react-icons/fa';
import { testimonialData } from '../data/scholarshipData';

function TestimonialsPage() {
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="grow bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-yale-blue text-xs font-bold uppercase tracking-wider mb-4">
            <FaUserCheck /> Verified Community Reviews
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yale-blue tracking-tight">
            Student & Family Testimonials
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real feedback collected directly through our post-cohort survey program with verified consent.
          </p>
          
          <button
            onClick={() => setSurveyModalOpen(true)}
            className="mt-6 px-6 py-2.5 bg-orange-500 hover:bg-yale-blue text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md"
          >
            Submit Student Survey & Story
          </button>
        </div>

        {/* Testimonials List */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonialData
            .filter((t) => t.approvedForPublishing)
            .map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400 text-xs">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-yale-blue bg-blue-50 px-2.5 py-1 rounded-full">
                      {item.sponsorTag}
                    </span>
                  </div>

                  <FaQuoteLeft className="text-3xl text-orange-200 mb-3" />
                  <p className="text-slate-700 leading-relaxed italic mb-6 text-sm sm:text-base">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-auto">
                  <img src={item.avatar} alt={item.studentName} className="w-12 h-12 rounded-full object-cover border-2 border-orange-400" />
                  <div>
                    <h4 className="font-serif font-bold text-yale-blue">{item.studentName}</h4>
                    <p className="text-xs text-slate-500">{item.trackName} • {item.cohort}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Parent: {item.parentName}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>

      {/* Survey Submission Modal */}
      {surveyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 p-8 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <FaCheckCircle className="text-5xl text-emerald-500 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-yale-blue">Survey Received!</h3>
                <p className="text-sm text-slate-600">Thank you for sharing your experience. Once verified by our team, your testimonial will be featured on our site.</p>
                <button
                  onClick={() => { setSurveyModalOpen(false); setSubmitted(false); }}
                  className="mt-4 px-6 py-2 bg-yale-blue text-white text-xs font-bold uppercase rounded-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-yale-blue">Submit Cohort Feedback</h3>
                <p className="text-xs text-slate-500 mb-4">Your stories inspire the next wave of young innovators.</p>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Student & Parent Names</label>
                  <input type="text" required placeholder="e.g. Alex & Sarah Johnson" className="w-full p-2.5 border border-slate-300 rounded-sm text-xs" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Your Story / Review</label>
                  <textarea rows="3" required placeholder="How did AltCurve impact your learning journey?" className="w-full p-2.5 border border-slate-300 rounded-sm text-xs" />
                </div>

                {/* Explicit Consent Checkbox */}
                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" id="consent" required className="mt-1 cursor-pointer" />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-tight">
                    I grant AltCurve Academy permission to publish this review and photo on the official website.
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button type="button" onClick={() => setSurveyModalOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Cancel</button>
                  <button type="submit" className="px-6 py-2 bg-orange-500 text-white text-xs font-bold uppercase rounded-sm flex items-center gap-2">
                    <span>Submit</span> <FaPaperPlane className="text-[10px]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default TestimonialsPage;