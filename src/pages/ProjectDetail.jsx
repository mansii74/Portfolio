import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back Button */}
        <motion.a
          href="/#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center text-purple-400 mb-8 hover:underline"
        >
          ← Back to Projects
        </motion.a>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FiGithub /> GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 rounded-xl overflow-hidden border border-gray-700"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Project Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Objective */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Objective</h2>
              <p className="text-gray-300">{project.objective}</p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">Key Features</h2>
              <ul className="space-y-3">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-2">▹</span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Tech Stack */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Key Insights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4">Key Insights</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.keyInsights.map((insight, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {insight.metric}
                    </div>
                    <div className="text-sm text-gray-300">
                      {insight.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Outcome</h2>
          <p className="text-gray-300">{project.outcome}</p>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail;