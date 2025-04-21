import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiCode, FiUsers, FiCalendar, FiExternalLink } from 'react-icons/fi';

const events = [
  {
    id: 1,
    title: "Microsoft Codestorm Hackathon",
    role: "First Runner Up",
    date: "Sep 2024",
    description: "Developed an AI-powered productivity tool that reduced task completion time by 40%",
    skills: ["AI/ML", "React", "Node.js"],
    link: "#",
    type: "hackathon",
    achievement: "top-3"
  },
  {
    id: 2,
    title: "Google Code Jam",
    role: "Finalist",
    date: "Jun 2024",
    description: "Advanced to final round among top 100 participants worldwide",
    skills: ["Algorithms", "Data Structures"],
    link: "#",
    type: "competitive",
    achievement: "finalist"
  },
  {
    id: 3,
    title: "BharatTech 2.0",
    role: "Best Startup Ready Project",
    date: "Feb 2025",
    description: "Awarded for most commercially viable tech solution in the competition",
    skills: ["Next.js", "Firebase", "Pitch"],
    link: "#",
    type: "hackathon",
    achievement: "winner"
  },
  {
    id: 4,
    title: "ACM ICPC Regional",
    role: "Team Lead",
    date: "Nov 2024",
    description: "Led university team to regional finals with optimized problem-solving approaches",
    skills: ["C++", "Teamwork", "Problem Solving"],
    link: "#",
    type: "competitive",
    achievement: "participant"
  }
];

const achievementColors = {
  "winner": "from-yellow-400 to-yellow-600",
  "top-3": "from-purple-400 to-pink-600",
  "finalist": "from-blue-400 to-cyan-600",
  "participant": "from-gray-400 to-gray-600"
};

const EventCard = ({ event }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-gray-800 rounded-xl overflow-hidden border-l-4 border-purple-500"
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-gradient-to-r ${achievementColors[event.achievement]}`}>
              {event.type === "hackathon" ? "Hackathon" : "Competitive Event"}
            </div>
            <h3 className="text-xl font-bold text-white">{event.title}</h3>
          </div>
          <div className="flex items-center bg-gray-700 rounded-full p-2">
            {event.type === "hackathon" ? (
              <FiCode className="text-purple-400" />
            ) : (
              <FiUsers className="text-blue-400" />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-300 mb-4">
          <FiAward className={`${event.achievement === "winner" ? "text-yellow-400" : event.achievement === "top-3" ? "text-purple-400" : "text-gray-400"}`} />
          <span>{event.role}</span>
          <span className="mx-1">•</span>
          <FiCalendar className="text-gray-400" />
          <span>{event.date}</span>
        </div>

        <p className="text-gray-300 mb-6 flex-grow">{event.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>

        <a 
          href={event.link} 
          className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Details</span>
          <FiExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.type === activeFilter);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className='mx-16'>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Competitive Events & Hackathons
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my participation and achievements in coding competitions and hackathons
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {["all", "hackathon", "competitive"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {filter === "all" ? "All" : filter === "hackathon" ? "Hackathons" : "Competitive"}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </AnimatePresence>
        </div>

        {/* Achievement Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >
          {Object.entries({
            "winner": "Winner",
            "top-3": "Top 3",
            "finalist": "Finalist",
            "participant": "Participant"
          }).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${achievementColors[key]}`}></div>
              <span className="text-gray-300 text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Events;