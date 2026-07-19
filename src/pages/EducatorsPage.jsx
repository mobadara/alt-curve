import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaGraduationCap, FaArrowRight} from 'react-icons/fa';
import { educatorProfiles } from '../data/academyData';

function EducatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  // Filter staff based on name or focus/subjects
  const filteredStaff = educatorProfiles.filter((person) => {
    const query = searchQuery.toLowerCase();
    return (
      person.name.toLowerCase().includes(query) ||
      person.focus.toLowerCase().includes(query) ||
      (person.role && person.role.toLowerCase().includes(query))
    );
  });

  // Generate real-time search suggestions as they type
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const matchPool = new Set();
    
    educatorProfiles.forEach(person => {
      if (person.name.toLowerCase().includes(query)) matchPool.add(person.name);
      // Extract unique single subject keywords from the focus string
      person.focus.split(/[•,·]/).forEach(sub => {
        const cleanSub = sub.trim();
        if (cleanSub.toLowerCase().includes(query)) matchPool.add(cleanSub);
      });
    });

    setSuggestions(Array.from(matchPool).slice(0, 5));
  }, [searchQuery]);

  // Handle click outside suggestions container
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <main className="grow bg-white px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header Block */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">Our Educators</p>
          <h1 className="mb-4 font-serif text-4xl font-semibold text-yale-blue sm:text-5xl">A caring team guiding each learner forward</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Our educators combine deep technical expertise, industry certifications, and compassionate mentorship to guide young minds.
          </p>
        </div>

        {/* Intelligent Search Section with Suggestions Dropdown */}
        <div ref={suggestionRef} className="relative max-w-xl mx-auto mb-16 z-30">
          <div className="relative flex items-center border border-slate-300 rounded-xl bg-white focus-within:border-orange-500 shadow-sm transition-all">
            <FaSearch className="ml-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by educator name or subject specialization..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full px-4 py-3.5 text-slate-800 bg-transparent placeholder-slate-400 focus:outline-none text-sm sm:text-base"
            />
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-slate-200 mt-1 shadow-xl z-50 flex flex-col">
              {suggestions.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setSearchQuery(item);
                      setShowSuggestions(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Grid Area */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStaff.map((person) => {
            const initials = person.name.split(' ').map((n) => n[0]).join('');
            // Standard fallback path if slug isn't initialized yet
            const detailSlug = person.slug || person.name.toLowerCase().replace(/\s+/g, '-');

            return (
              <Link 
                to={`/educators/${detailSlug}`}
                key={person.name} 
                className="group flex flex-col bg-slate-50 border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Headshot Container */}
                <div className="h-64 bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400">
                  {person.image ? (
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yale-blue text-xl font-bold text-white font-mono">
                        {initials}
                      </div>
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-2">AltCurve Guide</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="mb-1 font-serif text-2xl font-semibold text-yale-blue group-hover:text-orange-500 transition-colors">
                    {person.name}
                  </h2>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-yale-accent">
                    {person.role}
                  </p>
                  
                  {person.qualifications && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium">
                      <FaGraduationCap className="text-slate-400" />
                      <span>{person.qualifications.join(' • ')}</span>
                    </div>
                  )}

                  <p className="text-slate-600 leading-relaxed text-sm line-clamp-3 mb-6 flex-grow">
                    {person.focus}
                  </p>

                  <div className="mt-auto text-xs font-bold text-yale-blue flex items-center justify-between border-t border-slate-200/60 pt-4">
                    <span>VIEW BRIEF PROFILE</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <FaUser className="mx-auto text-slate-300 text-3xl mb-3" />
            <p className="text-slate-500 font-medium">No matching instructors found. Try adjusting your keywords.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default EducatorsPage;