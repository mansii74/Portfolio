import { motion } from 'framer-motion';
import { 
  FaCode, FaServer, FaMobileAlt, FaDatabase, 
  FaTools, FaJava, FaRobot
} from 'react-icons/fa';
import { 
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiPython, SiCplusplus, SiFlutter,
  SiMongodb, SiMysql, SiFirebase, SiTailwindcss,
  SiGit, SiDocker, SiFigma,
  SiR,
  SiTableau,
  SiPowers,
  SiExoscale,
  SiAmazonwebservices
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-purple-400" size={24} />,
      skills: [
        { name: "C++", icon: <SiCplusplus size={20} />, level: 4 },
        { name: "Python", icon: <SiPython size={20} />, level: 4 },
        { name: "R", icon: <SiR size={20} />, level: 3 }, // Changed to FaJava
        { name: "SQL", icon: <SiMysql size={20} />, level: 3 },
      ]
    },
    {
      title: "Data Visualization",
      icon: <FaRobot className="text-blue-400" size={24} />,
      skills: [
        { name: "Tableau", icon: <SiTableau size={20} />, level: 4 },
        { name: "Power BI", icon: <SiPowers size={20} />, level: 3 },
        { name: "Excel", icon: <SiExoscale size={20} />, level: 3 },
      ]
    },
    {
      title: "Databases",
      icon: <FaServer className="text-green-400" size={24} />,
      skills: [
        { name: "MySQL", icon: <SiMysql size={20} />, level: 4 },
        { name: "AWS", icon:<span className="text-lg font-bold">EX</span>, level: 3 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="text-yellow-400" size={24} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={20} />, level: 4 },
        { name: "MySQL", icon: <SiMysql size={20} />, level: 3 },
        { name: "Firebase", icon: <SiFirebase size={20} />, level: 3 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaTools className="text-pink-400" size={24} />,
      skills: [
        { name: "Git", icon: <SiGit size={20} />, level: 4 },
        { name: "Docker", icon: <SiDocker size={20} />, level: 2 },
        { name: "Figma", icon: <SiFigma size={20} />, level: 3 },
      ]
    }
  ];

  const renderLevel = (level) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-full ${i < level ? 'bg-purple-500' : 'bg-gray-700'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 scroll-mt-20 ml-16 mr-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
        >
          My Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-700 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-300">
                        {skill.icon}
                      </div>
                      <span>{skill.name}</span>
                    </div>
                    {renderLevel(skill.level)}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex justify-center">
          <div className="bg-gray-800/50 rounded-lg p-4 flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-purple-500' : 'bg-gray-700'}`}/>
                ))}
              </div>
              <span className="text-sm">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-purple-500' : 'bg-gray-700'}`}/>
                ))}
              </div>
              <span className="text-sm">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-purple-500' : 'bg-gray-700'}`}/>
                ))}
              </div>
              <span className="text-sm">Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;