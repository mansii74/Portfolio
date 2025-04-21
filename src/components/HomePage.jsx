
import profile from '../assets/IMG_0693.jpg';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import Skills from './Skills';
import ProjectsOverview from './ProjectsOverview';
import Certifications from './Certifications';
import Events from './Events';
import Contact from './Contact';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Experience', id: 'experience' },
    { name: 'Events', id: 'events' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            Mansi
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.05, color: '#a78bfa' }}
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800/95"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-purple-300 py-2 border-b border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 min-h-[90vh] flex items-center ml-16 mr-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <br></br><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Mansi Kumari</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'Data Analyst',
                  1000,
                  'Transforming Data into Strategic Decisions 💡',
                  1000,
                  'Competitive Programmer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
            I now transform raw data into compelling narratives and intelligent solutions.
             Currently pursuing Computer Science at LPU.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium shadow-lg"
              >
                Contact Me
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-gray-600 rounded-lg font-medium flex items-center gap-2"
              >
                <FiDownload /> Resume
              </motion.a>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/5"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur"></div>
              <div className="relative rounded-2xl bg-gray-800 p-1">
                <img 
                  src={profile}
                  alt="Mansi" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <ProjectsOverview />
      {/* Certifications Section */}
      <Certifications />
      {/* Events Section */}
      <Events />
      {/* Contact Section */}
      <Contact />
      

      {/* Social Links */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="fixed left-4 bottom-4 md:left-6 md:bottom-6 hidden md:flex flex-col gap-3 z-40"
      >
        {[
          { icon: <FiGithub size={24} />, url: "https://github.com/mansii74" },
          { icon: <FiLinkedin size={24} />, url: "https://www.linkedin.com/in/mansihere/" },
          { icon: <FiTwitter size={24} />, url: "#" },
          { icon: <FiMail size={24} />, url: "#contact" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            whileHover={{ y: -5, scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {item.icon}
          </motion.a>
        ))}
        <div className="h-16 w-px bg-gray-600 mx-auto mt-2"></div>
      </motion.div>
      
      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <div className="w-4 h-8 border-2 border-gray-400 rounded-full">
            <motion.div
              className="w-1 h-1 bg-white rounded-full mx-auto mt-1"
              animate={{ 
                y: [0, 4, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5
              }}
            />
          </div>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default HomePage;