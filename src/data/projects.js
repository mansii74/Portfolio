// src/data/projects.js
import lawawareImage from '/images/lawaware.jpg';
import samImage from '/images/sam.jpg';
import medcheckImage from '../assets/images/medcheck.png'; // Download the medcheck image and save it locally in assets/images/

export const projects = [
  {
    id: 'medcheck',
    title: 'MedCheck - AI Medical Platform',
    shortDescription: 'AI-driven healthcare platform with 90%+ accuracy disease detection',
    objective: 'To enable early disease detection through AI models and improve healthcare accessibility',
    techStack: ['Next.js', 'Node.js', 'Streamlit', 'Tailwind CSS', 'TensorFlow'],
    keyInsights: [
      { metric: '90%', description: 'Disease detection accuracy' },
      { metric: '5+', description: 'Diseases detected' },
      { metric: '40%', description: 'Faster diagnosis' }
    ],
    outcome: 'Enabled early disease detection and reduced healthcare costs by 30%',
    githubLink: '#',
    liveLink: '#',
    image: medcheckImage,
    details: [
      'Implemented CNN models for medical image analysis',
      'Developed real-time diagnostic dashboard',
      'Integrated telemedicine features'
    ]
  },
  {
    id: 'lawaware',
    title: 'Law Aware - Legal Education Platform',
    shortDescription: 'Interactive platform for legal rights awareness with AI chatbot',
    objective: 'To democratize legal knowledge through accessible education tools',
    techStack: ['React', 'Node.js', 'MongoDB', 'NLP', 'Tailwind CSS'],
    keyInsights: [
      { metric: '40%', description: 'Increase in user engagement' },
      { metric: '60%', description: 'Improvement in legal support' },
      { metric: '30%', description: 'More forum participation' }
    ],
    outcome: 'Increased legal awareness in target communities by 50%',
    githubLink: '#',
    liveLink: '#',
    image: lawawareImage,
    details: [
      'Built AI-powered legal Q&A system',
      'Created interactive case study modules',
      'Developed community discussion forums'
    ]
  },
  {
    id: 'sam',
    title: 'Personal Desktop Assistant',
    shortDescription: 'Desktop assistant to automate repetitive tasks',
    objective: 'To automate repetitive tasks, reducing manual effort and increasing productivity',
    techStack: ['Python', 'Pandas', 'Numpy', 'Pyttsx3'],
    keyInsights: [
      { metric: '50%', description: 'Reduced manual intervention' },
      { metric: '30%', description: 'Improved task completion speed' },
    ],
    outcome: 'Reduced time consumption for repetitive tasks by 50%',
    githubLink: '#',
    liveLink: '#',
    image: samImage,
    details: [
      'Built AI-powered Desktop Assistant',
      'Can speak using pyttsx module',
      'Reduction in time consumption for everyday tasks'
    ]
  }
];