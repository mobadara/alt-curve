import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeart, FaGlobeAfrica, FaUsers } from 'react-icons/fa';

function AboutPage() {
  return (
    <main className="grow bg-white px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-10 sm:p-12 lg:p-14">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yale-accent">About AltCurve</p>
              <h1 className="mb-5 max-w-2xl font-serif text-4xl font-semibold text-yale-blue sm:text-5xl">
                Built for children and teenagers who deserve a learning space that truly fits them.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                AltCurve was born from a deeply personal insight: a person with albinism transformed a lived experience of visibility, sensitivity, and difference into a vision for something more inclusive.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80"
              alt="Children and teenagers learning in a calm, modern environment"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-yale-accent">
                <FaHeart />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-yale-blue">Our story</h2>
            </div>
            <p className="mb-4 text-lg leading-8 text-slate-600">
              In a world where many children are expected to adapt to classrooms that were not designed for their needs, this perspective became the foundation for a new kind of support. It recognized that some learners struggle not because they lack ability, but because the learning environment does not fully respect how they experience the world.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              That understanding gave rise to a mission rooted in empathy, clarity, and possibility. AltCurve exists for children and young people who face barriers such as vision difficulties, distraction, overstimulation, migraines, or other challenges that can make traditional learning spaces overwhelming.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-yale-blue">
                <FaGlobeAfrica />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-yale-blue">A global mission</h2>
            </div>
            <p className="mb-4 text-lg leading-8 text-slate-600">
              Our work is especially meaningful for African families living across the world, from the US and the UK to other international communities, where the desire for strong education is often shaped by migration, identity, and belonging.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              AltCurve is built to serve that reality with care and intention. We are committed to supporting children globally, across cultures and backgrounds, and to creating an educational experience that is inclusive regardless of race, ethnicity, skin colour, language, or learning difference.
            </p>
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-slate-200 bg-yale-blue px-8 py-10 text-white shadow-sm sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
                <FaUsers />
                For every child
              </div>
              <h2 className="mb-4 font-serif text-white text-3xl font-semibold sm:text-4xl">
                Every child deserves to learn in an environment that sees them clearly and helps them thrive.
              </h2>
            </div>
            <Link to="/apply" className="inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 font-semibold text-yale-blue transition-colors hover:bg-slate-100">
              Start an application <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
