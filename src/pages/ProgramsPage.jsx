import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pathwayCards, programs } from '../data/academyData';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

function ProgramsPage() {
  const [openProgram, setOpenProgram] = useState(programs[0].slug);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const toggleProgram = (slug) => {
    setOpenProgram((current) => (current === slug ? '' : slug));
  };

  const openEnrollmentModal = (program) => {
    setSelectedProgram(program);
  };

  const closeEnrollmentModal = () => {
    setSelectedProgram(null);
  };

  const handleEmailAction = (event) => {
    event.preventDefault();
    window.open('mailto:hello@altcurve.academy', '_blank', 'noopener,noreferrer');
  };

  const handleBookingAction = (event) => {
    event.preventDefault();
    window.open('https://calendly.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="grow bg-yale-light px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Top Hero Framing */}
        <section className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">Our pathways</p>
          <h1 className="mb-4 font-serif text-4xl font-semibold text-yale-blue sm:text-5xl">Two calm, supportive pathways for children and teenagers</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Each route is designed to support young learners with structure, care, and a learning experience that feels welcoming and age-appropriate.
          </p>
        </section>

        {/* Unified Accordion Area */}
        <div className="space-y-6">
          {programs.map((program) => {
            const isOpen = openProgram === program.slug;
            // Map descriptive headers dynamically based on the current data slug target
            const isFoundation = program.slug === 'foundation-builders';

            return (
              <section key={program.slug} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => toggleProgram(program.slug)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 bg-white p-6 text-left transition-colors hover:bg-slate-50 sm:p-8 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img
                      src={isFoundation 
                        ? 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400' 
                        : 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400'
                      }
                      alt={program.title}
                      className="h-24 w-full rounded-xl object-cover sm:h-28 sm:w-36 shrink-0"
                    />
                    <div>
                      <p className="mb-1 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">
                        {isFoundation ? 'For younger learners' : 'For teenagers'}
                      </p>
                      <h2 className="font-serif text-2xl font-semibold text-yale-blue">{program.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{program.tagline}</p>
                    </div>
                  </div>
                  <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-yale-blue shadow-sm shrink-0">
                    <FaChevronDown className={`text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
                    <p className="text-lg leading-relaxed text-slate-600 max-w-4xl">{program.description}</p>

                    {/* Inject Career Tracks Sub-Grid ONLY within the Career Path Accordion */}
                    {!isFoundation && (
                      <div className="mt-6">
                        <h3 className="mb-6 font-serif text-xl font-semibold text-yale-blue border-b border-slate-200 pb-3">
                          Available Engineering & Technology Career Tracks
                        </h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {pathwayCards.map((card) => {
                            const Icon = card.icon;
                            return (
                              <div key={card.slug} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg text-yale-blue">
                                  <Icon />
                                </div>
                                <h4 className="mb-2 font-serif text-lg font-semibold text-yale-blue">{card.title}</h4>
                                <p className="mb-5 text-xs leading-relaxed text-slate-600 flex-grow">{card.description}</p>
                                <Link 
                                  to={`/programs/${card.slug}`} 
                                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-500 hover:text-yale-blue transition-colors mt-auto"
                                >
                                  Explore Track <FaArrowRight className="text-[10px]" />
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Standard Outcomes and Enrollment Block */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-xl bg-white p-6 shadow-xs border border-slate-100">
                        <h3 className="mb-4 font-serif text-xl font-semibold text-yale-blue">What learners gain</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                          {program.outcomes.map((outcome) => (
                            <li key={outcome} className="flex gap-2 items-start">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                              <span className="leading-relaxed">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="rounded-xl bg-white p-6 shadow-xs border border-slate-100 flex flex-col justify-between">
                        <div>
                          <h3 className="mb-4 font-serif text-xl font-semibold text-yale-blue">Ideal for</h3>
                          <p className="leading-relaxed text-sm text-slate-600 mb-6">{program.idealFor}</p>
                        </div>
                        <div className="pt-4 border-t border-slate-100 mt-auto">
                          <button
                            onClick={() => openEnrollmentModal(program)}
                            className="inline-flex cursor-pointer items-center gap-2 font-bold text-sm text-yale-blue hover:text-orange-500 transition-colors focus:outline-none"
                          >
                            Ask about enrollment <FaArrowRight className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>

      {/* Enrollment Contact Popup Mask */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-xs"
          onClick={closeEnrollmentModal}
        >
          <div
            className="w-full max-w-md rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-2xl animate-in scale-in-95 duration-150"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-orange-500">Enrollment Inquiry</p>
              <h3 className="font-serif text-2xl font-semibold text-yale-blue">{selectedProgram.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Choose the communication channel that works best for you.</p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:hello@altcurve.academy"
                onClick={handleEmailAction}
                target="_blank"
                rel="noreferrer"
                className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-left transition-colors hover:border-orange-500 hover:bg-white"
              >
                <span>
                  <span className="block font-semibold text-yale-blue text-sm">Send us an email</span>
                  <span className="text-xs text-slate-500 mt-0.5 block">We will respond with next steps.</span>
                </span>
                <FaArrowRight className="text-orange-500 text-xs" />
              </a>

              <a
                href="https://calendly.com"
                onClick={handleBookingAction}
                target="_blank"
                rel="noreferrer"
                className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-left transition-colors hover:border-orange-500 hover:bg-white"
              >
                <span>
                  <span className="block font-semibold text-yale-blue text-sm">Schedule a one-on-one meeting</span>
                  <span className="text-xs text-slate-500 mt-0.5 block">Book a conversation with our team.</span>
                </span>
                <FaArrowRight className="text-orange-500 text-xs" />
              </a>
            </div>

            <div className="text-right mt-6">
              <button
                onClick={closeEnrollmentModal}
                className="cursor-pointer text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-yale-blue transition-colors focus:outline-none"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProgramsPage;