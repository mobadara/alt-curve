import PathwayDetailLayout from '../components/PathwayDetailLayout';
import { FaCode } from 'react-icons/fa';

function SoftwareArchitecturePage() {
  const stages = [
    {
      title: 'Core Foundations',
      label: 'Academic Remediation & Setup',
      points: [
        'Algorithmic sequences, logic puzzles, and scratch-pad coding for problem decomposition.',
        'A calm introduction to how software systems are structured and reasoned about.',
        'Support for students who need a steadier start in coding confidence and academic pacing.'
      ]
    },
    {
      title: 'Structural Literacy',
      label: 'First Projects',
      points: [
        'HTML/CSS architecture, JavaScript mechanics, and modern UI wireframing.',
        'Early web experiences that teach design, responsiveness, and user flow.',
        'Foundational skills for building software that looks polished and works clearly.'
      ]
    },
    {
      title: 'Applied Engineering',
      label: 'Elite Portfolio Builds',
      points: [
        'Client-side dynamic state with React, asynchronous backend APIs with FastAPI, and database modeling.',
        'Real-world application design with modular architecture and clean product thinking.',
        'Portfolio work that connects design, logic, and scalable user experience.'
      ]
    },
    {
      title: 'Capstone Execution & Credentials',
      label: 'WASSCE / A-Level Sync',
      points: [
        'Parallel review sprint to keep mathematics and logic preparation aligned with university expectations.',
        'Final capstone project published to GitHub as a deployable and verifiable product asset.',
        'A clear, disciplined bridge between school learning and real software development practice.'
      ]
    }
  ];

  return (
    <PathwayDetailLayout
      title="Software Architecture"
      subtitle="A global university launchpad for students preparing to build modern digital products, interfaces, and systems with confidence and clarity."
      badge="Target careers: Software Engineer • Frontend Developer • Product Builder"
      safetyNetTitle="Foundation Builders Safety Net"
      safetyNetBody="We provide structured support for students who need more time to build logic, coding rhythm, or confidence before stepping into larger application work."
      stages={stages}
      capstoneTitle="Capstone: Digital Health Platform Prototype"
      capstoneBody="Students graduate with a polished application experience that combines front-end design, back-end logic, and product thinking into a portfolio-ready digital product."
      syllabusHref="/syllabus-placeholder.pdf"
      icon={FaCode}
    />
  );
}

export default SoftwareArchitecturePage;
