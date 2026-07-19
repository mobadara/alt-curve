import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaHandshake, FaUsers } from 'react-icons/fa';

function CareersPage() {
  return (
    <main className="grow bg-white">
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">Careers</p>
            <h1 className="mb-4 font-serif text-4xl font-semibold text-yale-blue sm:text-5xl">
              Join AltCurve as we grow a trusted academy experience
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              We are building a global family-focused learning community and welcome thoughtful educators, advisors, and operations partners who care deeply about children, teens, and future-ready learning.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-yale-light p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yale-blue text-2xl text-white">
                <FaBriefcase />
              </div>
              <h2 className="mb-4 font-serif text-2xl font-semibold text-yale-blue">Recruitment placeholder</h2>
              <p className="mb-6 text-base leading-8 text-slate-600">
                This page is currently serving as a recruitment placeholder for AltCurve Academy while new roles are being finalized. It gives families, candidates, and partners a clear place to learn about our direction and reach out.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@altcurve.academy"
                  className="rounded-sm bg-yale-blue px-5 py-3 font-semibold text-white transition-colors hover:bg-yale-accent"
                >
                  Contact us
                </a>
                <Link to="/apply" className="rounded-sm border border-slate-300 px-5 py-3 font-semibold text-yale-blue transition-colors hover:border-yale-accent hover:text-yale-accent">
                  Start an application
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-yale-blue">
                  <FaUsers />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-yale-dark">Who we are looking for</h3>
                <p className="text-sm leading-7 text-slate-600">
                  Educators, curriculum support specialists, student success partners, and operations collaborators who value calm structure and family trust.
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-yale-accent">
                  <FaHandshake />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-yale-dark">What matters most</h3>
                <p className="text-sm leading-7 text-slate-600">
                  Warm communication, professionalism, cultural awareness, and a genuine commitment to helping young people thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yale-blue px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
          <h2 className="mb-4 font-serif text-3xl font-semibold">Ready to connect?</h2>
          <p className="mb-6 max-w-2xl text-lg leading-8 text-slate-100">
            If you are interested in contributing to our mission, please get in touch and we will be glad to start a conversation.
          </p>
          <a
            href="mailto:hello@altcurve.academy"
            className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-orange-200"
          >
            hello@altcurve.academy <FaArrowRight className="text-sm" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default CareersPage;
