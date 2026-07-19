import PathwayDetailLayout from '../components/PathwayDetailLayout';
import { FaHeartbeat } from 'react-icons/fa';

function HealthTechPage() {
  const stages = [
    {
      title: 'Core Foundations',
      label: 'Academic Remediation & Setup',
      points: [
        'Human systems overview, cell biology foundations, and the basic language of health science.',
        'Early statistical literacy for interpreting biological data and health-related trends.',
        'Support for students who need extra help moving from school science into structured health technology work.'
      ]
    },
    {
      title: 'Structural Literacy',
      label: 'First Projects',
      points: [
        'Python fundamentals, epidemiological data tables, and health tracking algorithms.',
        'Hands-on exposure to the relationship between patient data, public health, and digital insight.',
        'Confidence-building through careful data handling and beginner-friendly analytical work.'
      ]
    },
    {
      title: 'Applied Engineering',
      label: 'Elite Portfolio Builds',
      points: [
        'Processing real-world biometric datasets, building patient dashboard interfaces, and introductory medical image classification logic.',
        'Cross-disciplinary product thinking that connects medicine, design, and digital systems.',
        'A strong bridge between scientific curiosity and practical, portfolio-ready technology building.'
      ]
    },
    {
      title: 'Capstone Execution & Credentials',
      label: 'WASSCE / A-Level Sync',
      points: [
        'Parallel review sprint for science and mathematics subjects that support future university pathways.',
        'Final capstone project published to GitHub as a confident, verifiable digital health portfolio asset.',
        'A powerful finish for students combining scientific interest with modern technology practice.'
      ]
    }
  ];

  return (
    <PathwayDetailLayout
      title="HealthTech Pre-Med"
      subtitle="A global university launchpad for students preparing to enter the future of medicine, public health, and intelligent healthcare systems."
      badge="Target careers: Medical Researcher • Health Data Analyst • Clinical Technologist"
      safetyNetTitle="Foundation Builders Safety Net"
      safetyNetBody="We support learners who need steadier help in chemistry, biology, or statistics so they can grow into this field without feeling left behind."
      stages={stages}
      capstoneTitle="Capstone: Digital Epidemic Tracker"
      capstoneBody="Students build a compelling health-tech product that visualises infectious disease data, supports public understanding, and demonstrates strong digital and scientific thinking."
      syllabusHref="/syllabus-placeholder.pdf"
      icon={FaHeartbeat}
    />
  );
}

export default HealthTechPage;
