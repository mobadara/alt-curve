import {
  FaBrain,
  FaMicrochip,
  FaCode,
  FaStethoscope,
  FaHandsHelping,
  FaBookReader,
  FaLaptopCode,
  FaGlobeAfrica,
  FaRocket,
  FaCompass,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaChartLine,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

export const carouselSlides = [
  {
    id: 1,
    eyebrow: 'Global academic support',
    title: 'Flexible exam preparation for learners across the world',
    description:
      'From the UK to Nigeria, Ghana, and the US, we support students through internationally recognised examinations and personalised guidance.',
    icon: FaRocket,
    ctaText: 'Explore programs',
    ctaLink: '/programs'
  },
  {
    id: 2,
    eyebrow: 'Multi-currency payments',
    title: 'Clients pay in their own currency, and our team can be paid in any currency',
    description:
      'Our platform is built for international families and global teams, making payments simple, flexible, and borderless.',
    icon: FaCompass,
    ctaText: 'See support options',
    ctaLink: '/programs/foundation-builders'
  },
  {
    id: 3,
    eyebrow: 'Exam systems we support',
    title: 'UK, Nigeria, US, and Ghana pathways with trusted academic preparation',
    description:
      'We guide students through GCE/IGCSE/A-Level, WASSCE, JAMB, SAT, ACT, AP, and BECE with clarity and care.',
    icon: FaUserGraduate,
    ctaText: 'Apply now',
    ctaLink: '/apply'
  }
];

export const featureCards = [
  {
    title: 'International exam systems',
    description:
      'We provide guided preparation for UK, Nigerian, US, and Ghanaian examination systems, including GCE/IGCSE/A-Level, WASSCE, JAMB, SAT, ACT, AP, and BECE.',
    icon: FaHandsHelping,
    highlight: true
  },
  {
    title: 'Flexible payment infrastructure',
    description:
      'Clients can pay in their own currencies while our employees can be paid in any currency, making global operations smoother and more adaptable.',
    icon: FaBookReader,
    highlight: false
  },
  {
    title: 'Academic confidence and structure',
    description:
      'We deliver steady coaching, exam readiness, and personalised learning support for students navigating major academic milestones.',
    icon: FaLaptopCode,
    highlight: false
  },
  {
    title: 'Global learner support',
    description:
      'Our academy supports families and learners across multiple countries with a borderless, future-focused approach.',
    icon: FaGlobeAfrica,
    highlight: false
  }
];

export const familyExperienceCards = [
  {
    title: 'Bright beginnings',
    description: 'Gentle, encouraging support for younger children who need confidence, structure, and a joyful first step into learning.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    age: 'Children 5–8',
    badge: 'Early learning'
  },
  {
    title: 'Focused study time',
    description: 'Thoughtful guidance that helps school-age learners build calm routines and steady progress across subjects.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    age: 'Children 9–12',
    badge: 'Homework support'
  },
  {
    title: 'Teen confidence',
    description: 'An online space designed for teenagers who want clarity, motivation, and support for exams and future goals.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    age: 'Teens 13–16',
    badge: 'Exam readiness'
  },
  {
    title: 'Career discovery',
    description: 'Interactive pathways that connect academic growth with curiosity about technology, health, and future careers.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
    age: 'Teens 15–18',
    badge: 'Future pathways'
  },
  {
    title: 'Parent-friendly online learning',
    description: 'A reassuring virtual environment where parents can see progress, stay connected, and support learning from home.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
    age: 'Families',
    badge: 'Family support'
  },
  {
    title: 'Global community',
    description: 'A welcoming academy experience built for families across borders who want a calm and consistent learning partner.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80',
    age: 'Anywhere online',
    badge: 'Borderless care'
  }
];

export const pathwayCards = [
  {
    slug: 'data-intelligence',
    title: 'Data & Intelligence',
    description:
      'Ideal for students who love patterns, problem solving, and analytical thinking.',
    modules: ['Advanced Mathematics', 'Python & Data Skills', 'Machine Learning Foundations'],
    icon: FaBrain
  },
  {
    slug: 'systems-hardware',
    title: 'Systems & Hardware',
    description:
      'A strong fit for learners exploring engineering, automation, and smart technology.',
    modules: ['Applied Physics', 'C++ & IoT Logic', 'Systems Thinking'],
    icon: FaMicrochip
  },
  {
    slug: 'software-architecture',
    title: 'Software Architecture',
    description:
      'Designed for students ready to build apps, websites, and digital products with purpose.',
    modules: ['Computer Science', 'React & JavaScript', 'API Design'],
    icon: FaCode
  },
  {
    slug: 'healthtech',
    title: 'HealthTech Pre-Med',
    description:
      'Perfect for young people drawn to medicine, biology, and ethical innovation.',
    modules: ['Biology & Chemistry', 'Health Data', 'Digital Health Systems'],
    icon: FaStethoscope
  }
];

export const programs = [
  {
    slug: 'foundation-builders',
    title: 'Foundation Builders',
    tagline: 'A calm, high-support path for learners who need a steady reset.',
    description:
      'Perfect for students who need structured help in core subjects and a stronger learning rhythm.',
    outcomes: ['Stronger confidence in Math, Science, and English', 'Improved study habits and classroom participation', 'Better exam readiness and school performance'],
    idealFor: 'Children who need academic reassurance and practical support.'
  },
  {
    slug: 'career-pathways',
    title: 'Career Pathways',
    tagline: 'Future-focused guidance for teens preparing to thrive beyond school.',
    description:
      'A pathway-led experience that blends academic discipline with career discovery and technical growth.',
    outcomes: ['University-ready academic planning', 'Hands-on technical portfolio work', 'Professional communication and leadership development'],
    idealFor: 'Adolescents preparing for tertiary education and long-term career choices.'
  }
];

export const educatorProfiles = [
  {
    name: 'Muyiwa Obadara',
    slug: 'muyiwa-obadara',
    role: 'Lead Systems & Software Educator',
    focus: 'Software Architecture • Data Intelligence • Robotics',
    image: '', // Leave empty to test the "MO" initial fallback, or add an image URL
    qualifications: [
      'BSc Physics (University of Ibadan)', 
      'MSAIE (Quantic School of Business)', 
      'TRCN Certified'
    ],
    bio: 'Muyiwa is a passionate systems engineer and educator dedicated to leveraging technology for social good. With deep expertise in Python, React, Fast API, and Machine Learning, he leads the Software Architecture and Data Intelligence pathways at AltCurve. He strongly believes in accessible education and mentorship, guiding young learners from foundational logic all the way to advanced robotics and data science solutions.',
    socials: {
      linkedin: 'https://linkedin.com/in/obadara-m',
      twitter: 'https://twitter.com/m_obadara',
      github: 'https://github.com/mobadara',
      orcid: 'https://orcid.org/0000-0000-0000-0000', // Replace with actual if applicable
      website: 'mailto:contact@mobadara.dev'
    },
    publications: [
      'Designing and Implementing Data Science Solutions on Azure (Microsoft DP-100)',
      'Professional Data Science Architecture & Implementation'
    ],
    presentations: [
      'Technology for Social Good: Empowering the Next Generation',
      'System Engineering & Robotics for High School Developers'
    ]
  },
  {
    name: 'Sarah Jenkins',
    slug: 'sarah-jenkins',
    role: 'Foundation Curriculum Director',
    focus: 'Mathematics • Core Sciences • IGCSE Prep',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'M.Ed Curriculum Design (UCL)', 
      'BSc Mathematics', 
      'PGCE'
    ],
    bio: 'Sarah specializes in breaking down complex mathematical concepts for anxious learners. She has spent over a decade designing visual, low-stress curriculum structures that help students confidently tackle their WASSCE, GCE, and IGCSE examinations.',
    socials: {
      linkedin: 'https://linkedin.com',
      scholar: 'https://scholar.google.com'
    },
    publications: [
      'Visual Frameworks for Teenage Cognitive Development in STEM',
      'Reducing Mathematics Anxiety in Middle School Environments'
    ],
    presentations: [
      'Modern Online Pedagogy for the Global South',
      'Structuring Calm Academic Environments'
    ]
  },
  {
    name: 'Dr. Chinedu Eze',
    slug: 'chinedu-eze',
    role: 'HealthTech & Pre-Med Mentor',
    focus: 'Biology • Anatomy • Pre-Medical Sciences',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    qualifications: [
      'MBBS (University of Lagos)', 
      'MSc Public Health', 
      'TRCN'
    ],
    bio: 'Dr. Eze bridges the gap between high school biology and early medical sciences. He guides ambitious pre-med students through rigorous physiological concepts, ensuring they are not just exam-ready for JAMB and A-Levels, but fundamentally prepared for medical school.',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      orcid: 'https://orcid.org'
    },
    // Leaving publications empty to test the conditional rendering in your component
  }
];

export const socialLinks = [
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: FaChartLine },
  { href: 'https://www.instagram.com', label: 'Instagram', icon: FaInstagram },
  { href: 'https://www.github.com', label: 'GitHub', icon: FaGithub },
  { href: 'https://huggingface.co', label: 'Hugging Face', icon: SiHuggingface },
  { href: 'https://www.youtube.com', label: 'YouTube', icon: FaChalkboardTeacher }
];

export const footerLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Data & Intelligence', to: '/programs/data-intelligence' },
  { label: 'Systems & Hardware', to: '/programs/systems-hardware' },
  { label: 'Software Architecture', to: '/programs/software-architecture' },
  { label: 'HealthTech Pre-Med', to: '/programs/healthtech' },
  { label: 'Our educators', to: '/staff-directory' }
];