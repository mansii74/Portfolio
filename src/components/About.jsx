import { motion } from "framer-motion";
import {
  FiAward,
  FiBarChart2,
  FiTool,
  FiCode,
  FiUsers,
  FiSmile,
  FiMessageCircle,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

/* ------------ DATA ------------- */
const techUSPs = [
  {
    icon: <FiBarChart2 className="text-purple-400" size={20} />,
    title: "Data Analyst",
    description: "Turning raw data into insights",
  },
  {
    icon: <FiCode className="text-blue-400" size={20} />,
    title: "Full‑Stack Dev",
    description: "React‑based web apps & APIs",
  },
  {
    icon: <FiTool className="text-yellow-400" size={20} />,
    title: "BI & Visualisation",
    description: "Tableau • Excel • Power BI",
  },
  {
    icon: <FiUsers className="text-pink-400" size={20} />,
    title: "Hackathon Winner",
    description: "Podium finishes at Code‑Storm",
  },
];

const softSkills = [
  { icon: <FiSmile className="text-green-400" size={18} />, title: "Adaptability" },
  { icon: <FiMessageCircle className="text-indigo-400" size={18} />, title: "Communication" },
  { icon: <FiTrendingUp className="text-orange-400" size={18} />, title: "Growth Mindset" },
  { icon: <FiLayers className="text-teal-400" size={18} />, title: "Collaboration" },
];

/* ---------- Shine bar variants ---------- */
const shine = {
  initial: { width: 0 },
  animate: {
    width: "100%",
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
  },
};

/* ------------ COMPONENT ------------- */
const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 py-12"
  >
    <div className="container mx-auto px-4">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About&nbsp;Me
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        {/* Intro */}
        <p className="text-gray-300 mb-8 text-center lg:text-left">
          Pre‑final year <span className="text-purple-400">Computer&nbsp;Science</span> undergrad at
          Lovely Professional University, passionate about{" "}
          <span className="text-purple-400">data analytics</span> &amp; problem‑solving.
          Skilled in <strong>Python, SQL, Tableau, R</strong>; I craft dashboards and full‑stack
          solutions that turn complex datasets into clear stories. Hackathon lover,
          lifelong learner, and community anchor.
        </p>

        {/* Tech USP grid */}
        <h3 className="text-white font-semibold text-sm mb-3">Core Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {techUSPs.map((usp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-700 rounded-md">{usp.icon}</div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    {usp.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{usp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills grid with lifecycle view‑transition */}
        <h3 className="text-white font-semibold text-sm mb-3">Soft Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {softSkills.map((skill, idx) => (
            /* LIFECYCLE VIEW‑TRANSITION WRAPPER */
            <div
              key={idx}
              className="enter enter-start"
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove("enter-start");
                e.currentTarget.classList.add("enter-end");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.add("leave", "leave-start");
                requestAnimationFrame(() =>
                  e.currentTarget.classList.replace("leave-start", "leave-end")
                );
                setTimeout(
                  () => e.currentTarget.classList.remove("leave", "leave-end"),
                  200
                );
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col items-center bg-gray-800/40 p-3 rounded-lg border border-gray-700 overflow-hidden"
              >
                {skill.icon}
                <span className="text-gray-300 text-xs mt-1 text-center">
                  {skill.title}
                </span>

                {/* Shine bar */}
                <motion.span
                  variants={shine}
                  initial="initial"
                  whileHover="animate"
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false }}
          className="p-4 bg-gray-800/30 rounded-lg border border-gray-700"
        >
          <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
            <FiAward className="text-yellow-400" size={16} /> Notable
            Achievements
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▹</span>
              Runner‑Up – Microsoft&nbsp;Code Storm 2024
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▹</span>
              3<sup>rd</sup> Place – Code‑a‑FestX Hackathon
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">▹</span>
              Anchor – GDG WTM Jalandhar 2024
            </li>
            
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
