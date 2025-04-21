import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiExternalLink, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const contactItems = [
    {
      icon: <FiMail size={24} />,
      name: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiGithub size={24} />,
      name: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <FiLinkedin size={24} />,
      name: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <SiLeetcode size={24} />,
      name: "LeetCode",
      value: "leetcode.com/yourprofile",
      link: "https://leetcode.com/yourprofile",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FiExternalLink size={24} />,
      name: "Portfolio",
      value: "yourportfolio.com",
      link: "https://yourportfolio.com",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 flex items-start gap-4 hover:bg-gray-700/50 transition-all border border-gray-700 hover:border-purple-500/30"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* CV Download Card */}
            <motion.a
              href="/path-to-your-cv.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: contactItems.length * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 flex items-start gap-4 hover:bg-gray-700/50 transition-all border border-gray-700 hover:border-purple-500/30 col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                <FiDownload size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white">Download CV</h3>
                <p className="text-gray-400 text-sm">Get a copy of my resume</p>
              </div>
            </motion.a>
          </div>

          {/* Contact Form (Optional) */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;