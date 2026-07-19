import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';

function PathwayDetailLayout({
  title,
  subtitle,
  badge,
  safetyNetTitle,
  safetyNetBody,
  stages,
  capstoneTitle,
  capstoneBody,
  syllabusHref,
  icon: Icon
}) {
  return (
    <main className="grow bg-yale-light px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-semibold text-yale-accent">
                <FaGraduationCap />
                {badge}
              </div>
              <h1 className="mb-4 font-serif text-4xl font-semibold text-yale-blue sm:text-5xl">{title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">{subtitle}</p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-yale-blue">
                {Icon ? <Icon className="text-xl" /> : <FaBookOpen />}
              </div>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-yale-blue">{safetyNetTitle}</h2>
              <p className="text-base leading-8 text-slate-600">{safetyNetBody}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">Curriculum journey</p>
              <h2 className="font-serif text-3xl font-semibold text-yale-blue">The four-stage pathway to university-ready execution</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-600">
              <FaShieldAlt />
              Built for strong foundations and visible growth
            </div>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => (
              <article key={stage.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">Stage {index + 1}</p>
                    <h3 className="font-serif text-2xl font-semibold text-yale-blue">{stage.title}</h3>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-600">
                    {stage.label}
                  </div>
                </div>
                <ul className="space-y-2 text-base leading-8 text-slate-600">
                  {stage.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-yale-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-yale-blue p-8 text-white shadow-sm sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">Capstone showcase</p>
              <h2 className="mb-4 font-serif text-3xl font-semibold">{capstoneTitle}</h2>
              <p className="text-lg leading-8 text-slate-100">{capstoneBody}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">Launch-ready outcome</p>
              <p className="text-base leading-8 text-slate-100">
                Students leave with a GitHub-hosted portfolio asset, a university-facing story of execution, and the academic confidence to keep building beyond school.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">Ready to begin?</p>
            <h3 className="font-serif text-2xl font-semibold text-yale-blue">Take the next step with AltCurve</h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/apply" className="inline-flex items-center justify-center gap-2 rounded-sm bg-yale-blue px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800">
              Apply to this track <FaArrowRight className="text-xs" />
            </Link>
            <a
              href={syllabusHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300 px-5 py-3 font-semibold text-yale-blue transition-colors hover:border-yale-accent hover:text-yale-accent"
            >
              Download Detailed Syllabus PDF <FaArrowRight className="text-xs" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PathwayDetailLayout;
