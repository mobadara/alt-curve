import { useState } from 'react';
import { FaEnvelope, FaCheckCircle, FaLightbulb, FaUniversity, FaLaptopCode } from 'react-icons/fa';

function NewsletterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Parent / Sponsor' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className='grow bg-yale-light px-6 py-24 md:px-12 lg:px-24 flex items-center justify-center'>
      <div className='mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm border border-gray-200 bg-white shadow-xl overflow-hidden'>
        
        {/* Left Column: Brand & Value Prop */}
        <div className='bg-yale-dark text-white flex flex-col relative overflow-hidden'>
          {/* Subtle gradient background overlay for the whole column */}
          <div className='absolute inset-0 bg-gradient-to-br from-yale-dark via-yale-dark to-yale-blue opacity-90 z-0'></div>
          
          {/* Full-width flush image */}
          <div className='relative z-10 w-full h-64 sm:h-72 lg:h-80'>
            <img 
              src='https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800' 
              alt='Dedicated student engaging with study materials' 
              className='w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300'
            />
            {/* Gradient fade effect to blend the image into the dark background below */}
            <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-yale-dark to-transparent'></div>
          </div>

          {/* Padded Text Content */}
          <div className='relative z-10 p-12 lg:p-16 pt-4 lg:pt-8 flex-grow flex flex-col justify-center'>
            <p className='mb-4 text-sm font-bold uppercase tracking-widest text-yale-accent'>The AltCurve Dispatch</p>
            <h1 className='mb-6 font-serif text-4xl font-semibold sm:text-5xl leading-tight'>
              Insights for the global innovator.
            </h1>
            <p className='mb-10 text-lg leading-relaxed text-gray-300'>
              Join our exclusive mailing list to receive actionable strategies on securing top-tier university admissions, building resilient STEM foundations, and navigating the future of tech.
            </p>
            
            <ul className='space-y-6 text-gray-300'>
              <li className='flex items-start gap-4'>
                <div className='mt-1 text-yale-accent'><FaUniversity className='text-xl' /></div>
                <div>
                  <h3 className='font-bold text-white'>Admissions Strategy</h3>
                  <p className='text-sm'>Early updates on WASSCE, A-Levels, and international placements.</p>
                </div>
              </li>
              <li className='flex items-start gap-4'>
                <div className='mt-1 text-yale-accent'><FaLaptopCode className='text-xl' /></div>
                <div>
                  <h3 className='font-bold text-white'>Tech Portfolio Tips</h3>
                  <p className='text-sm'>Guidance on Data, Software, and HealthTech pathway preparation.</p>
                </div>
              </li>
              <li className='flex items-start gap-4'>
                <div className='mt-1 text-yale-accent'><FaLightbulb className='text-xl' /></div>
                <div>
                  <h3 className='font-bold text-white'>Foundation Builders</h3>
                  <p className='text-sm'>Expert advice on academic turnarounds and remedial interventions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className='p-12 lg:p-16 flex flex-col justify-center bg-white'>
          <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-yale-blue'>
            <FaEnvelope className='text-2xl' />
          </div>
          
          <h2 className='mb-2 text-2xl font-bold text-yale-dark font-serif'>Join the Community</h2>
          <p className='mb-8 text-gray-600'>Subscribe to stay ahead of the curve.</p>

          {submitted ? (
            <div className='rounded-sm border-l-4 border-emerald-500 bg-emerald-50 p-8 text-emerald-800 shadow-sm'>
              <div className='mb-3 flex items-center gap-3 font-bold text-lg'>
                <FaCheckCircle className='text-emerald-500' />
                Welcome aboard, {formData.name.trim().split(' ')[0]}.
              </div>
              <p className='text-emerald-700 leading-relaxed'>
                Your subscription is confirmed. Expect our next dispatch in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='mb-2 block text-sm font-bold text-gray-700'>
                  Full Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='e.g. Dr. Sarah Ojo'
                  className='w-full rounded-sm border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-yale-accent focus:bg-white focus:ring-1 focus:ring-yale-accent'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='mb-2 block text-sm font-bold text-gray-700'>
                  Email Address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='sarah@example.com'
                  className='w-full rounded-sm border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-yale-accent focus:bg-white focus:ring-1 focus:ring-yale-accent'
                  required
                />
              </div>

              <div>
                <label htmlFor='role' className='mb-2 block text-sm font-bold text-gray-700'>
                  I am a...
                </label>
                <select
                  id='role'
                  name='role'
                  value={formData.role}
                  onChange={handleChange}
                  className='w-full rounded-sm border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-yale-accent focus:bg-white focus:ring-1 focus:ring-yale-accent'
                >
                  <option value='Parent / Sponsor'>Parent / Sponsor</option>
                  <option value='Prospective Student'>Prospective Student</option>
                  <option value='Educator / Partner'>Educator / Partner</option>
                </select>
              </div>

              <button
                type='submit'
                className='w-full rounded-sm bg-yale-blue px-6 py-4 font-bold text-white transition-colors hover:bg-yale-accent shadow-md mt-4'
              >
                Subscribe to Dispatch
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default NewsletterPage;