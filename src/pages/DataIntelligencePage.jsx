import PathwayDetailLayout from '../components/PathwayDetailLayout';
import { FaBrain } from 'react-icons/fa';

function DataIntelligencePage() {
  const stages = [
    {
      title: 'Core Foundations',
      label: 'Academic Remediation & Setup',
      points: [
        'Pre-algebra and statistical baselines for interpreting charts, ratios, and trend data.',
        'Data collection discipline: reliable sources, clean labels, and structured observation.',
        'Confidence-building support for students who need extra help with quantitative reasoning.'
      ]
    },
    {
      title: 'Structural Literacy',
      label: 'First Projects',
      points: [
        'Python syntax, data frames, and Pandas for handling CSV files and structured datasets.',
        'Basic visualisation workflows and spreadsheet-to-code translation for real-world tasks.',
        'Introduction to data storytelling with simple dashboards and clean summaries.'
      ]
    },
    {
      title: 'Applied Engineering',
      label: 'Elite Portfolio Builds',
      points: [
        'Exploratory Data Analysis (EDA), NumPy, and introductory predictive regression techniques.',
        'Hands-on portfolio projects that turn messy data into meaningful insight and decision support.',
        'A strong bridge between academic preparation and university-level quantitative thinking.'
      ]
    },
    {
      title: 'Capstone Execution & Credentials',
      label: 'WASSCE / A-Level Sync',
      points: [
        'Parallel exam review sprint for mathematics and quantitative subjects that support university readiness.',
        'Final capstone project published to GitHub as a verifiable analytics portfolio asset.',
        'A polished end point for students seeking evidence of sustainment, rigour, and growth.'
      ]
    }
  ];

  return (
    <PathwayDetailLayout
      title="Data & Intelligence"
      subtitle="A global university launchpad for students preparing to lead in research, analytics, AI, and evidence-based decision making."
      badge="Target careers: Data Analyst • Research Assistant • Quant Specialist"
      safetyNetTitle="Foundation Builders Safety Net"
      safetyNetBody="We step in early when students need extra support in algebra, statistics, or quantitative reasoning so they can enter this track with confidence rather than panic."
      stages={stages}
      capstoneTitle="Capstone: Regional Intelligence Dashboard"
      capstoneBody="Students graduate with a polished data product that maps climate, education, and health trends across a region using Python, dashboards, and concise research storytelling."
      syllabusHref="/syllabus-placeholder.pdf"
      icon={FaBrain}
    />
  );
}

export default DataIntelligencePage;
