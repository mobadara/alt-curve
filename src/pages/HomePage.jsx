import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';
import { featureCards, pathwayCards } from '../data/academyData';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLaptop, FaUserShield, FaSmileBeam } from 'react-icons/fa';

function HomePage() {
  return (
    <main className='grow'>
      <HeroCarousel />

      {/* Feature Section */}
      <section className='bg-white px-6 py-24 md:px-10 lg:px-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-14 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent'>Why families choose AltCurve</p>
            <h2 className='mb-4 font-serif text-3xl font-semibold text-yale-blue sm:text-4xl'>A calm, structured academy for growth</h2>
            <p className='mx-auto max-w-3xl text-lg leading-8 text-slate-600'>
              We guide children and teens with care, clarity, and strong academic support so they can move forward with confidence from the comfort of home.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} icon={card.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Online Experience Grid */}
      <section className='bg-slate-50 px-6 py-24 md:px-10 lg:px-12 border-y border-slate-100'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center max-w-3xl mx-auto'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent'>Designed for Families</p>
            <h2 className='mb-4 font-serif text-3xl font-semibold text-yale-blue sm:text-4xl'>A warm online experience that parents can trust</h2>
            <p className='text-lg leading-8 text-slate-600'>
              We bring a calm, modern learning environment directly into your living room, optimizing visuals and structure for young people between the ages of 5 and 18.
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-3'>
            {/* Context Card 1: Visual Learning */}
            <div className='flex flex-col bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1'>
              <div className='h-52 overflow-hidden relative'>
                {/* Visual: A younger child happily looking at an engaging tablet/laptop learning program at home */}
                <img 
                  src='https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600' 
                  alt='Young child engaging with an interactive digital learning display at home' 
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent' />
              </div>
              <div className='p-8 flex-grow flex flex-col'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-yale-blue'>
                  <FaLaptop />
                </div>
                <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-blue'>Visual & Low-Stress Interfaces</h3>
                <p className='text-slate-600 leading-relaxed text-sm mb-6 flex-grow'>
                  Tailored thoughtfully with clean, high-contrast layouts, minimized digital distractions, and balanced color palettes to reduce eye strain and support young minds with sensory or focus sensitivities.
                </p>
                <Link to='/about' className='inline-flex items-center gap-2 font-semibold text-yale-accent hover:text-yale-blue transition-colors text-sm'>
                  Learn about our methodology <FaArrowRight className='text-xs' />
                </Link>
              </div>
            </div>

            {/* Context Card 2: Compassionate Mentorship */}
            <div className='flex flex-col bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1'>
              <div className='h-52 overflow-hidden relative'>
                {/* Visual: A focused teenager studying from a laptop with headphones in a bright, relaxed home setting */}
                <img 
                  src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600' 
                  alt='Teenager working on an assignment with a laptop in a comfortable home office workspace' 
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent' />
              </div>
              <div className='p-8 flex-grow flex flex-col'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-yale-blue'>
                  <FaSmileBeam />
                </div>
                <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-blue'>Empathetic Remote Guides</h3>
                <p className='text-slate-600 leading-relaxed text-sm mb-6 flex-grow'>
                  Our technical mentors look past the screen. We specialize in reducing academic anxieties, building genuine math and science confidence through encouragement, clear pacing, and tailored support.
                </p>
                <Link to='/about' className='inline-flex items-center gap-2 font-semibold text-yale-accent hover:text-yale-blue transition-colors text-sm'>
                  Meet our instructors <FaArrowRight className='text-xs' />
                </Link>
              </div>
            </div>

            {/* Context Card 3: Dashboard Metrics */}
            <div className='flex flex-col bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1'>
              <div className='h-52 overflow-hidden relative'>
                {/* Visual: Parent checking a clear, clean dashboard or analytical interface on a laptop */}
                <img 
                  src='https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600' 
                  alt='Sponsor reviewing dashboard progress indicators on a computer monitor screen' 
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent' />
              </div>
              <div className='p-8 flex-grow flex flex-col'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-yale-blue'>
                  <FaUserShield />
                </div>
                <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-blue'>Transparent Progress Portals</h3>
                <p className='text-slate-600 leading-relaxed text-sm mb-6 flex-grow'>
                  Stay seamlessly tied into your child's milestones. Parents receive clear, digestible performance tracking, milestone charts, and regular constructive diagnostic breakdowns.
                </p>
                <Link to='/student-portal' className='inline-flex items-center gap-2 font-semibold text-yale-accent hover:text-yale-blue transition-colors text-sm'>
                  Explore the portal <FaArrowRight className='text-xs' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Regions Section */}
      <section className='bg-yale-light px-6 py-24 md:px-10 lg:px-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent'>Trusted across regions</p>
            <h2 className='mb-4 font-serif text-3xl font-semibold text-yale-blue sm:text-4xl'>A growing academic network built for families in key locations</h2>
            <p className='mx-auto max-w-3xl text-lg leading-8 text-slate-600'>
              We are active in the UK, Nigeria, the US, and Ghana, and we proudly support Nigerians in these locations with dependable academic guidance and global exam preparation.
            </p>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            <div className='rounded-sm border border-slate-200 bg-white p-8 shadow-sm'>
              <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-blue'>Exam systems</h3>
              <p className='leading-8 text-slate-600'>
                UK: GCE/IGCSE/A-Level • NG: WASSCE/GCE/JAMB • US: SAT/ACT/AP • GH: WASSCE/BECE
              </p>
            </div>
            <div className='rounded-sm border border-slate-200 bg-white p-8 shadow-sm'>
              <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-blue'>Payment flexibility</h3>
              <p className='leading-8 text-slate-600'>
                Clients can pay in their preferred currency, while our team can be paid in any currency to support a global operation.
              </p>
            </div>
            <div className='rounded-sm border border-slate-200 bg-white p-8 shadow-sm'>
              <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-blue'>Community trust</h3>
              <p className='leading-8 text-slate-600'>
                We are building a dependable network rooted in care, credibility, and long-term academic support for families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className='bg-white px-6 py-24 md:px-10 lg:px-12'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent'>Pathways</p>
            <h2 className='mb-4 font-serif text-3xl font-semibold text-yale-blue sm:text-4xl'>Career-ready learning for ambitious young minds</h2>
            <p className='mx-auto max-w-2xl text-lg leading-8 text-slate-600'>
              Choose a path that fits your child’s interests and unlocks both academic excellence and future opportunity.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {pathwayCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className='flex h-full flex-col rounded-sm border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                  <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-yale-blue'>
                    <Icon />
                  </div>
                  <h3 className='mb-3 font-serif text-2xl font-semibold text-yale-dark'>{card.title}</h3>
                  <p className='mb-5 grow text-sm leading-7 text-slate-600'>{card.description}</p>
                  <ul className='mb-6 space-y-2 text-sm text-slate-500'>
                    {card.modules.map((module) => (
                      <li key={module} className='flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-yale-accent' />
                        {module}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/programs/${card.slug}`} className='mt-auto flex items-center gap-2 font-semibold text-yale-blue transition-colors hover:text-yale-accent text-sm'>
                    View pathway <FaArrowRight className='text-xs' />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className='bg-yale-blue px-6 py-24 text-center text-white md:px-10 lg:px-12'>
        <div className='mx-auto max-w-3xl'>
          <h2 className='mb-5 font-serif text-3xl font-semibold sm:text-4xl'>Secure their next chapter today</h2>
          <p className='mb-8 text-lg leading-8 text-slate-100'>
            Join families who want a supportive, future-focused academy for their child’s academic growth.
          </p>
          <div className='flex flex-row justify-center gap-3'>
            <Link to='/apply' className='rounded-sm bg-white px-5 py-3 text-sm sm:text-base font-semibold text-yale-blue transition-colors hover:bg-slate-100 whitespace-nowrap'>
              Start an application
            </Link>
            <Link to='/newsletter' className='rounded-sm border border-white/40 px-5 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap'>
              Join the mailing list
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;