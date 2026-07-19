import PathwayDetailLayout from '../components/PathwayDetailLayout';
import { FaMicrochip } from 'react-icons/fa';

function SystemsHardwarePage() {
  const stages = [
    {
      title: 'Core Foundations',
      label: 'Academic Remediation & Setup',
      points: [
        'Basic physical units, mechanical and electrical principles, and visual circuit-building foundations.',
        'An introduction to how systems behave under load, force, and feedback.',
        'Structured support for students who need extra help with physics, measurements, and problem-solving.'
      ]
    },
    {
      title: 'Structural Literacy',
      label: 'First Projects',
      points: [
        'Introduction to physical computing with Arduino IDE, breadboards, LEDs, and analog sensors.',
        'Writing basic C/C++ scripts to control physical inputs and outputs.',
        'Early confidence building through tactile experimentation and visual system feedback.'
      ]
    },
    {
      title: 'Applied Engineering',
      label: 'Elite Portfolio Builds',
      points: [
        'Building fully autonomous IoT nodes with ESP32 and Arduino, including multi-sensor arrays and serial communications.',
        'Servo automation, hardware integration, and real-time control logic for responsive systems.',
        'Engineering-style project work that reflects real-world maker and embedded design thinking.'
      ]
    },
    {
      title: 'Capstone Execution & Credentials',
      label: 'WASSCE / A-Level Sync',
      points: [
        'Parallel review sprint for physics and mathematics content that supports university entry and technical fluency.',
        'Final capstone project published to GitHub as a hardware-and-software portfolio asset.',
        'A compelling demonstration of technical discipline, systems thinking, and execution.'
      ]
    }
  ];

  return (
    <PathwayDetailLayout
      title="Systems & Hardware"
      subtitle="A global university launchpad for students preparing to design, build, and lead in embedded systems, automation, and engineering technology."
      badge="Target careers: Embedded Engineer • Hardware Specialist • IoT Developer • Robotics • Mechatronic"
      safetyNetTitle="Foundation Builders Safety Net"
      safetyNetBody="We support learners who need a gentler path into physics, measurement, or technical thinking so they can build confidence before engineering complex systems."
      stages={stages}
      capstoneTitle="Capstone: Autonomous Climate Monitoring Drone"
      capstoneBody="Students complete a high-end project that combines sensors, control logic, mobility, and environmental data capture into a sophisticated and portfolio-ready system."
      syllabusHref="/syllabus-placeholder.pdf"
      icon={FaMicrochip}
    />
  );
}

export default SystemsHardwarePage;
