import { useParams, Link } from 'react-router-dom';
import { 
  FaArrowLeft,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaGlobe, 
  FaGraduationCap,
  FaBook,
  FaAward,
  FaBuilding,
  FaEnvelope
} from 'react-icons/fa';
import { SiOrcid, SiGooglescholar } from 'react-icons/si';
import { educatorProfiles } from '../data/academyData';

function EducatorProfileDetailPage() {
  const { slug } = useParams();

  // Find the current active record matching the URL parameter configuration
  const staff = educatorProfiles.find(
    (p) => (p.slug || p.name.toLowerCase().replace(/\s+/g, '-')) === slug
  );

  if (!staff) {
    return (
      <main className="grow bg-white flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="font-serif text-3xl font-semibold text-yale-blue mb-4">Educator Profile Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md">The record you are attempting to locate is missing or has moved.</p>
        <Link to="/staff-directory" className="inline-flex items-center gap-2 bg-yale-blue text-white px-6 py-3 font-semibold rounded-sm hover:bg-orange-500 transition-colors">
          <FaArrowLeft className="text-xs" /> Back to Directory
        </Link>
      </main>
    );
  }

  const initials = staff.name.split(' ').map((n) => n[0]).join('');

  return (
    <main className="grow bg-white px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl">
        
        {/* Navigation Action */}
        <Link to="/staff-directory" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-yale-blue mb-10 transition-colors">
          <FaArrowLeft className="text-xs" /> Return to directory list
        </Link>

        {/* Profile Card Architecture */}
        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-200 pb-12 mb-12">
          {/* Headshot Block */}
          <div className="w-full md:w-48 h-48 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center text-slate-400 border border-slate-200 shrink-0">
            {staff.image ? (
              <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yale-blue text-2xl font-bold text-white font-mono">
                {initials}
              </div>
            )}
          </div>

          {/* Core Info Details */}
          <div className="flex-grow">
            <h1 className="font-serif text-3xl font-bold text-yale-blue mb-1 sm:text-4xl">{staff.name}</h1>
            <p className="text-sm font-bold uppercase tracking-wider text-yale-accent mb-3">{staff.role}</p>
            
            {staff.qualifications && (
              <div className="flex flex-wrap items-center gap-2 text-slate-600 text-sm font-medium mb-6">
                <FaGraduationCap className="text-yale-blue text-base" />
                <span>{staff.qualifications.join(' • ')}</span>
              </div>
            )}

            {/* Social Matrix / Personal Hyperlinks (Renders only if explicitly defined) */}
            <div className="flex flex-wrap gap-4 text-xl">
              {staff.socials?.linkedin && (
                <a href={staff.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              )}
              {staff.socials?.twitter && (
                <a href={staff.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1da1f2] transition-colors" aria-label="Twitter">
                  <FaTwitter />
                </a>
              )}
              {staff.socials?.github && (
                <a href={staff.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#333] transition-colors" aria-label="GitHub">
                  <FaGithub />
                </a>
              )}
              {staff.socials?.orcid && (
                <a href={staff.socials.orcid} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#a6ce39] transition-colors" aria-label="ORCID">
                  <SiOrcid />
                </a>
              )}
              {staff.socials?.scholar && (
                <a href={staff.socials.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4285f4] transition-colors" aria-label="Google Scholar">
                  <SiGooglescholar />
                </a>
              )}
              {staff.socials?.website && (
                <a href={staff.socials.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="Personal Website">
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout Sections */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Main Body Bio */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="font-serif text-xl font-semibold text-yale-blue mb-4 flex items-center gap-2">
                <FaBuilding className="text-sm text-yale-accent" /> Professional Background
              </h3>
              <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                {staff.bio || `Professor ${staff.name} is a designated lead working within our core online system tracks. They are heavily focused on optimizing course content delivery matching international benchmark metrics.`}
              </p>
            </section>

            {/* Research & Presentation Cluster */}
            {(staff.publications || staff.presentations) && (
              <section className="border-t border-slate-100 pt-8">
                <h3 className="font-serif text-xl font-semibold text-yale-blue mb-4 flex items-center gap-2">
                  <FaBook className="text-sm text-yale-accent" /> Academic Output & Contributions
                </h3>
                
                {staff.publications && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Selected Publications</h4>
                    <ul className="space-y-3 pl-4 list-disc text-sm text-slate-600 leading-relaxed">
                      {staff.publications.map((pub, i) => <li key={i}>{pub}</li>)}
                    </ul>
                  </div>
                )}

                {staff.presentations && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Panels & Presentations</h4>
                    <ul className="space-y-3 pl-4 list-disc text-sm text-slate-600 leading-relaxed">
                      {staff.presentations.map((pres, i) => <li key={i}>{pres}</li>)}
                    </ul>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right Sidebar Specialty Panels */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-sm">
              <h4 className="font-serif text-lg font-semibold text-yale-blue mb-3 flex items-center gap-2">
                <FaAward className="text-sm text-orange-500" /> Focus Area
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed uppercase tracking-wider font-semibold bg-white border border-slate-200 rounded-md p-3 shadow-2xs">
                {staff.focus}
              </p>
            </div>
            
            <div className="bg-yale-blue p-6 rounded-sm text-white">
              <h4 className="font-serif text-lg font-semibold mb-2">Connect Directly</h4>
              <p className="text-xs text-slate-200 leading-relaxed mb-4">
                Have specific concerns regarding your child's tracking curriculum inside this pathway?
              </p>
              <a 
                href={`mailto:hello@altcurve.academy?subject=Inquiry for ${encodeURIComponent(staff.name)}`}
                className="inline-flex items-center gap-2 w-full justify-center bg-white text-yale-blue py-2.5 rounded-sm font-semibold hover:bg-orange-500 hover:text-white transition-all text-xs"
              >
                <FaEnvelope /> Contact Via Admissions
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default EducatorProfileDetailPage;