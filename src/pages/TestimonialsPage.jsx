import { useNavigate } from 'react-router-dom';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaUserCheck, 
  FaUserTie, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaPlusCircle,
  FaLock
} from 'react-icons/fa';

import { testimonialData } from '../data/academyData';

function TestimonialsPage() {
  const navigate = useNavigate();

  // Simulated authentication check
  const isAuthenticated = false; 

  const handlePostTestimonialClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard/testimonials/new');
    } else {
      navigate('/login?redirect=/dashboard/testimonials/new');
    }
  };

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
            Real experiences published by enrolled parents and students directly from their verified AltCurve dashboards.
          </p>

          {/* Action Button: Dashboard Redirect */}
          <button
            onClick={handlePostTestimonialClick}
            className="mt-6 px-6 py-3 bg-orange-500 hover:bg-yale-blue text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <FaPlusCircle />
            <span>Share Your Story (Via Dashboard)</span>
            {!isAuthenticated && <FaLock className="text-xs opacity-80" />}
          </button>
        </div>

        {/* Dynamic Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialData
            .filter((item) => item.approvedForPublishing)
            .map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Top Metadata Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Role Tag: Parent vs Student */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      item.authorType === 'parent' 
                        ? 'bg-purple-50 text-purple-700 border border-purple-200' 
                        : 'bg-blue-50 text-yale-blue border border-blue-200'
                    }`}>
                      {item.authorType === 'parent' ? <FaUserTie /> : <FaGraduationCap />}
                      {item.authorType === 'parent' ? 'Verified Parent' : 'Verified Student'}
                    </span>

                    {/* Member Since Tag */}
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                      <FaCalendarAlt className="text-[10px]" /> With us since {item.memberSinceYear}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-400 text-xs mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <FaQuoteLeft className="text-3xl text-orange-200 mb-2" />
                  <p className="text-slate-700 leading-relaxed italic mb-6 text-sm sm:text-base">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer Author & Track Details */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-4">
                    <img src={item.avatar} alt={item.authorName} className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-yale-blue">
                        {item.authorTitle} {item.authorName}
                      </h4>
                      
                      {/* Multiple Listed Tracks Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {item.tracks.map((track, idx) => (
                          <span key={idx} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                            {track}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
        </div>

      </div>
    </main>
  );
}

export default TestimonialsPage;