import { useNavigate } from 'react-router-dom';
import { 
  FaAward, 
  FaBuilding, 
  FaArrowRight, 
  FaLock, 
  FaTimesCircle,
} from 'react-icons/fa';

import { scholarshipCategories } from '../data/academyData';

function ScholarshipsPage() {
  const navigate = useNavigate();

  // Simulated Auth State (Replace with your global AuthContext/state)
  const isAuthenticated = false; 

  const handleApplyClick = (scholarshipId) => {
    if (isAuthenticated) {
      // Authenticated users go straight to their dashboard with the selected scholarship pre-selected
      navigate(`/dashboard/scholarships?apply=${scholarshipId}`);
    } else {
      // Unauthenticated users are redirected to login/signup with return parameter
      navigate(`/login?redirect=/dashboard/scholarships?apply=${scholarshipId}`);
    }
  };

  return (
    <main className="grow bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <FaAward /> Sponsored Access Vouchers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yale-blue tracking-tight">
            Scholarships & Grant Partners
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore active grant opportunities sponsored by global foundations. Grant applications and voucher redemptions are managed directly inside your verified account dashboard.
          </p>
        </div>

        {/* Data-Driven Scholarship Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {scholarshipCategories.map((item) => (
            <div 
              key={item.id}
              className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm ${
                item.isOpen ? 'border-slate-200 hover:border-orange-400' : 'border-slate-200 opacity-80 bg-slate-50/50'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 p-2 flex items-center justify-center border border-slate-200 shrink-0">
                      <FaBuilding className="text-yale-blue text-xl" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.sponsorName}</p>
                      <h2 className="font-serif text-xl font-bold text-yale-blue">{item.title}</h2>
                    </div>
                  </div>

                  {/* Status & Discount Badge */}
                  {item.isOpen ? (
                    <span className="shrink-0 px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-sm rounded-full border border-emerald-200">
                      {item.coveragePercentage}% Coverage
                    </span>
                  ) : (
                    <span className="shrink-0 px-3 py-1 bg-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider rounded-full">
                      Closed
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.description}</p>

                {/* Details Meta Block */}
                <div className="space-y-2.5 text-xs text-slate-600 bg-slate-100/80 p-4 rounded-xl mb-6">
                  <p><strong className="text-slate-800">Eligibility:</strong> {item.eligibility}</p>
                  
                  {/* Eligible Tracks Pills */}
                  <div>
                    <strong className="text-slate-800 block mb-1">Eligible Tracks:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {item.eligibleTracks.map((track, idx) => (
                        <span key={idx} className="bg-white border border-slate-200 text-yale-blue px-2 py-0.5 rounded-sm text-[11px] font-semibold">
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="pt-1">
                    <strong className="text-slate-800">Voucher Status:</strong>{' '}
                    {item.isOpen ? (
                      <span className="text-orange-600 font-bold">{item.vouchersRemaining} of {item.totalVouchers} vouchers available</span>
                    ) : (
                      <span className="text-slate-500 font-semibold">Applications closed for this cohort</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Two-State Action Button */}
              {item.isOpen ? (
                <button
                  onClick={() => handleApplyClick(item.id)}
                  className="w-full py-3 bg-orange-500 hover:bg-yale-blue text-white rounded-md font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply via Dashboard</span>
                  {isAuthenticated ? <FaArrowRight className="text-xs" /> : <FaLock className="text-xs opacity-80" />}
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3 bg-slate-200 text-slate-500 rounded-md font-semibold text-xs uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <FaTimesCircle className="text-xs" />
                  <span>Applications Closed</span>
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default ScholarshipsPage;