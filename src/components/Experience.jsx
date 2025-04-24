/* ---------- Experience + Education Section ---------- */
/*        Save as:  ExperienceEducation.jsx             */
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

/* -------------------- DATA -------------------- */
const experiences = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Pixel Creatives, Gurugram",
    duration: "Jun – Aug 2024 (10 weeks)",
    points: [
      "Optimised digital‑marketing strategy with SQL/Tableau dashboards that cut CAC by 12 % and lifted ROAS by 18 %.",
      "Led analytics for the “Pitch10x” launch; modelled 250 k+ events in Python to double sign‑up conversion to 6.4 %.",
      "Automated executive reports with VBA & Python, saving ~6 hrs per week for the marketing team.",
      "Presented insights to C‑suite; translated findings into sprint tasks adopted company‑wide.",
    ],
    technologies: [
      { name: "Python", icon: <FiCode /> },
      { name: "SQL", icon: <FiDatabase /> },
      { name: "Tableau", icon: <FiCode /> },
      { name: "Power BI", icon: <FiCode /> },
      { name: "Git", icon: <FiGitBranch /> },
    ],
  },
];

/* ---------- education timeline (reverse‑chronological) ---------- */
const education = [
  {
    id: 1,
    degree: "B.Tech. — Computer Science & Engineering",
    school: "Lovely Professional University, Punjab",
    duration: "2022 – Present",
    score: "CGPA 7.57 (till 6th sem)",
  },
  {
    id: 2,
    degree: "Intermediate (Class XII)",
    school: "Kendriya Vidyalaya, Patna",
    duration: "Jul 2020 – Mar 2022",
    score: "81 %",
  },
  {
    id: 3,
    degree: "Matriculation (Class X)",
    school: "Kendriya Vidyalaya, Patna",
    duration: "Apr 2019 – Mar 2020",
    score: "85 %",
  },
];

/* -------------------- COMPONENT -------------------- */
const ExperienceEducation = () => (
  <section
    id="experience"
    className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800"
  >
    <div className="container mx-auto px-6">

      {/* ========== HEADING ========== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Experience
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My professional journey so far
        </p>
      </motion.div>

      {/* ---------- EXPERIENCE CARDS ---------- */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all">
              {/* top row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FiCalendar />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* bullet points */}
              <ul className="space-y-3 mb-8">
                {exp.points.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-purple-400 mr-2 mt-1">▹</span>
                    <span className="text-gray-300">{pt}</span>
                  </motion.li>
                ))}
              </ul>

              {/* tech chips */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full text-sm"
                    >
                      <span className="text-purple-400">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------- LOR BUTTON ---------- */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">
            Letter of Recommendation
          </h3>
          <p className="text-gray-300 mb-6">
            This Letter of Recommendation highlights my work and achievements
            during my internship at Pixel Creatives. It showcases my
            contributions to the company and provides insights into my role as a
            Data Analyst Intern.
          </p>

          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/LOR.png" // change to /LOR.pdf if needed
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all"
            >
              View LOR
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* ======================  EDUCATION SECTION  ======================== */}
      {/* =================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          Education
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Formal qualifications and academic milestones
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-indigo-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* left */}
                <div>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <FiBookOpen className="text-indigo-400" /> {edu.degree}
                  </h3>
                  <p className="text-indigo-300">{edu.school}</p>
                </div>
                {/* right */}
                <div className="flex items-center gap-3 text-gray-400">
                  <FiCalendar />
                  <span>{edu.duration}</span>
                  <FiAward className="ml-4 text-indigo-400" />
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceEducation;
