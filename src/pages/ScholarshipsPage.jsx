import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaTicketAlt, 
  FaCheckCircle, 
  FaArrowRight, 
  FaPlus, 
  FaTrash, 
  FaLock, 
  FaAward, 
  FaBuilding,
} from 'react-icons/fa';
import { scholarshipCategories } from '../data/scholarshipData';

function ScholarshipsPage() {
  const navigate = useNavigate();

  // Simulated Auth State (Replace with your actual Auth Context / Hook)
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: true, // Toggle to false to test the Auth Gate overlay
    email: 'muyiwaobadara@outlook.com',
    role: 'parent', // 'parent' or 'student'
    title: 'Mr.',
    fullName: 'Muyiwa Obadara',
  });

  const [selectedCategory, setSelectedCategory] = useState(scholarshipCategories[0]);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Multi-Child State for Parents (Max 2 Children)
  const [childrenList, setChildrenList] = useState([
    { fullName: '', age: '', trackInterest: 'foundation-builders' },
  ]);

  // Single Teen Applicant State
  const [teenTrackInterest, setTeenTrackInterest] = useState('software-architecture');
  const [statement, setStatement] = useState('');

  // Handle Child Rows for Parents
  const handleAddChild = () => {
    if (childrenList.length < 2) {
      setChildrenList([...childrenList, { fullName: '', age: '', trackInterest: 'foundation-builders' }]);
    }
  };

  const handleRemoveChild = (index) => {
    if (childrenList.length > 1) {
      setChildrenList(childrenList.filter((_, i) => i !== index));
    }
  };

  const handleChildChange = (index, field, value) => {
    const updated = [...childrenList];
    updated[index][field] = value;
    setChildrenList(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build Payload based on Role
    const payload = {
      scholarshipId: selectedCategory.id,
      accountEmail: currentUser.email,
      applicantRole: currentUser.role,
      statement,
      beneficiaries: currentUser.role === 'parent' 
        ? childrenList 
        : [{ fullName: currentUser.fullName, trackInterest: teenTrackInterest }],
    };

    console.log('Scholarship Application Payload:', payload);
    setSubmitted(true);
  };

  return (
    <main className="grow bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <FaAward /> Sponsored Access Vouchers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-yale-blue tracking-tight">
            Scholarships & Grant Partners
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We partner with global foundations and technical sponsors to issue subsidized voucher codes bound directly to your verified account.
          </p>
        </div>

        {/* Dynamic Sponsor Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {scholarshipCategories.map((item) => (
            <div 
              key={item.id}
              className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm ${
                selectedCategory.id === item.id ? 'border-orange-500 ring-2 ring-orange-400/20' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 p-1.5 flex items-center justify-center border border-slate-200">
                      <FaBuilding className="text-yale-blue text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.sponsorName}</p>
                      <h3 className="font-serif text-xl font-bold text-yale-blue">{item.title}</h3>
                    </div>
                  </div>
                  <span className="shrink-0 px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-sm rounded-full border border-emerald-200">
                    {item.coveragePercentage}% Off
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.description}</p>

                <div className="space-y-2 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl mb-6">
                  <p><strong className="text-slate-700">Eligibility:</strong> {item.eligibility}</p>
                  <p><strong className="text-slate-700">Eligible Tracks:</strong> {item.eligibleTracks.join(', ')}</p>
                  <p><strong className="text-slate-700">Remaining Slots:</strong> <span className="text-orange-600 font-bold">{item.vouchersRemaining} of {item.totalVouchers} vouchers left</span></p>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory(item);
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-md font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  selectedCategory.id === item.id 
                    ? 'bg-yale-blue text-white' 
                    : 'bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700'
                }`}
              >
                <span>{selectedCategory.id === item.id ? 'Selected Scheme' : 'Select Grant'}</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div id="application-form" className="bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden max-w-2xl mx-auto relative">
          <div className="h-2 bg-gradient-to-r from-yale-blue to-orange-500" />
          
          {/* AUTH GATE OVERLAY: Displayed if User Is Not Logged In */}
          {!currentUser.isLoggedIn ? (
            <div className="p-10 text-center space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-yale-blue rounded-full flex items-center justify-center mx-auto text-2xl">
                <FaLock />
              </div>
              <h3 className="font-serif text-2xl font-bold text-yale-blue">Account Required to Apply</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Scholarship vouchers are bound to verified user accounts. Please create an account or sign in to submit your grant application.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <Link to="/apply" className="px-6 py-3 bg-orange-500 hover:bg-yale-blue text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors">
                  Create Account
                </Link>
                <Link to="/login" className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors">
                  Sign In
                </Link>
              </div>
            </div>
          ) : submitted ? (
            <div className="p-10 text-center space-y-4">
              <FaCheckCircle className="text-5xl text-emerald-500 mx-auto" />
              <h2 className="font-serif text-2xl font-bold text-yale-blue">Application Submitted!</h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Your application for <strong>{selectedCategory.title}</strong> has been bound to account <strong>{currentUser.email}</strong>. Upon approval, your unique voucher code will appear in your portal.
              </p>
              <div className="pt-4">
                <Link to="/" className="px-6 py-2.5 bg-yale-blue text-white font-semibold text-sm rounded-sm hover:bg-orange-500 transition-colors inline-block">
                  Return to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-10">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  Account Bound: {currentUser.email}
                </span>
                <h2 className="font-serif text-2xl font-bold text-yale-blue mt-1">
                  Apply for {selectedCategory.title}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Parent Flow: Dynamic Children Inputs */}
                {currentUser.role === 'parent' ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Beneficiary Children (Max 2)
                      </label>
                      {childrenList.length < 2 && (
                        <button
                          type="button"
                          onClick={handleAddChild}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-yale-blue cursor-pointer focus:outline-none"
                        >
                          <FaPlus className="text-[10px]" /> Add Second Child
                        </button>
                      )}
                    </div>

                    {childrenList.map((child, index) => (
                      <div key={index} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-yale-blue uppercase tracking-wider">
                            Child #{index + 1} Details
                          </span>
                          {childrenList.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveChild(index)}
                              className="text-slate-400 hover:text-red-500 text-xs cursor-pointer"
                            >
                              <FaTrash />
                            </button>
                          )}
                        </div>

                        <div>
                          <input
                            type="text"
                            required
                            placeholder="Child's Full Name"
                            value={child.fullName}
                            onChange={(e) => handleChildChange(index, 'fullName', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-sm bg-white text-slate-800 text-xs focus:outline-none focus:border-yale-blue"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="number"
                            min="6"
                            max="18"
                            required
                            placeholder="Age"
                            value={child.age}
                            onChange={(e) => handleChildChange(index, 'age', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-sm bg-white text-slate-800 text-xs focus:outline-none focus:border-yale-blue"
                          />

                          <select
                            value={child.trackInterest}
                            onChange={(e) => handleChildChange(index, 'trackInterest', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-sm bg-white text-slate-800 text-xs focus:outline-none focus:border-yale-blue cursor-pointer"
                          >
                            <option value="foundation-builders">Foundation Builders</option>
                            <option value="data-intelligence">Data & Intelligence</option>
                            <option value="systems-hardware">Systems & Hardware</option>
                            <option value="software-architecture">Software Architecture</option>
                            <option value="healthtech">HealthTech Pre-Med</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Teen Flow: Single Applicant Track */
                  <div className="space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Target Academic Track
                    </label>
                    <select
                      value={teenTrackInterest}
                      onChange={(e) => setTeenTrackInterest(e.target.value)}
                      className="w-full p-3 border border-slate-300 rounded-sm bg-white text-slate-800 text-sm focus:outline-none focus:border-yale-blue cursor-pointer"
                    >
                      <option value="software-architecture">Software Architecture</option>
                      <option value="data-intelligence">Data & Intelligence</option>
                      <option value="systems-hardware">Systems & Hardware</option>
                      <option value="healthtech">HealthTech Pre-Med</option>
                    </select>
                  </div>
                )}

                {/* Statement of Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Statement of Motivation
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Briefly describe why this scholarship is essential for your engineering goals..."
                    value={statement}
                    onChange={(e) => setStatement(e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-sm bg-white text-slate-800 text-sm focus:outline-none focus:border-yale-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-yale-blue text-white rounded-sm font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Grant Application</span>
                  <FaTicketAlt className="text-xs" />
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

export default ScholarshipsPage;