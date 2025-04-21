import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiZoomIn, FiX } from 'react-icons/fi';

const certificates = [
  
  {
    id: 1,
    title: 'Certification Of Appreciation',
    issuer: 'Google developer group',
    image: '/certificates/certification of appreciation.png',
    date: 'Feb 2024'
  },
  {
    id: 2,
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Coursera',
    image: '/certificates/Prompt eng.png',
    date: 'Feb 2024'
  },
  {
    id: 3,
    title: 'Data Structures and Algorithms',
    issuer: 'Hitbullseye',
    image: '/certificates/dsa.jpg',
    date: 'Jul 2024'
  },
  {
    id: 4,
    title: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    image: '/certificates/mongodb.jpg',
    date: 'Aug 2024'
  },
  {
    id: 5,
    title: 'Introduction to Cloud Fundamentals',
    issuer: 'LinkedIn Learning',
    image: '/certificates/cloud.jpg',
    date: 'Feb 2023'
  },
  {
    id: 6,
    title: 'Building Web Applications With PHP',
    issuer: 'Coursera',
    image: '/certificates/php.jpg',
    date: 'Nov 2024'
  },
];

const Certifications = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isZoomed, setIsZoomed] = useState(false);

  const paginate = (newDirection) => {
    setCurrentIndex([(currentIndex + newDirection + certificates.length) % certificates.length, newDirection]);
  };

  const currentCert = certificates[currentIndex];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gray-900 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            My Certifications
          </motion.h2>
          <motion.div 
            layoutId="underline"
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 w-24"
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative h-[70vh] max-h-[700px] perspective-1000">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ 
                rotateY: direction > 0 ? 90 : -90,
                opacity: 0,
                z: -100
              }}
              animate={{ 
                rotateY: 0,
                opacity: 1,
                z: 0
              }}
              exit={{ 
                rotateY: direction < 0 ? 90 : -90,
                opacity: 0,
                z: -100
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 100,
                damping: 20,
                mass: 0.5
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`relative w-full h-full max-w-4xl mx-auto ${isZoomed ? 'fixed inset-0 z-50 m-4' : ''}`}
                style={{
                  overflow: 'hidden', // Prevent overflow during zooming
                }}
              >
                {/* Certificate Image */}
                <motion.div
                  layoutId={`cert-${currentIndex}`}
                  className={`relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  transition={{ type: 'spring', bounce: 0.2 }}
                  style={{
                    transformOrigin: 'center',
                    overflow: 'hidden', // Prevent overflow while zooming
                  }}
                >
                  <img 
                    src={currentCert.image} 
                    alt={currentCert.title}
                    className="w-full h-full object-contain bg-white"
                    style={{
                      transition: 'transform 0.3s ease-in-out',
                      transform: isZoomed ? 'scale(1.2)' : 'scale(1)',
                      willChange: 'transform', // Help with smoother transitions
                    }}
                  />
                  
                  {!isZoomed && (
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsZoomed(true);
                      }}
                      className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-purple-600 transition-colors shadow-lg"
                      aria-label="Zoom in"
                    >
                      <FiZoomIn size={24} />
                    </motion.button>
                  )}
                </motion.div>

                {/* Certificate Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3 }
                  }}
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-gray-900 to-transparent"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white">{currentCert.title}</h3>
                  <p className="text-gray-300 mt-2">
                    {currentCert.issuer} • {currentCert.date}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {!isZoomed && (
            <>
              <motion.button 
                whileHover={{ 
                  scale: 1.1,
                  x: -5,
                  transition: { type: 'spring', stiffness: 500 }
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-purple-600 p-3 md:p-4 rounded-full shadow-lg z-10"
                aria-label="Previous certificate"
              >
                <FiChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </motion.button>
              <motion.button 
                whileHover={{ 
                  scale: 1.1,
                  x: 5,
                  transition: { type: 'spring', stiffness: 500 }
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-gray-800/90 hover:bg-purple-600 p-3 md:p-4 rounded-full shadow-lg z-10"
                aria-label="Next certificate"
              >
                <FiChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </motion.button>
            </>
          )}
        </div>

        {/* Dot Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { delay: 0.5 }
          }}
          className="flex justify-center gap-3 mt-8 md:mt-12"
        >
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                paginate(index > currentIndex ? 1 : -1);
              }}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'}`}
              aria-label={`View ${cert.title}`}
              animate={{
                scale: currentIndex === index ? 1.3 : 1,
                transition: { type: 'spring', stiffness: 500 }
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/95 z-40 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              layoutId={`cert-${currentIndex}`}
              className="relative w-full h-full max-w-6xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentCert.image} 
                alt={currentCert.title}
                className="w-full h-full object-contain bg-white rounded-lg"
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-purple-600 transition-colors shadow-lg z-10"
                aria-label="Close zoom"
              >
                <FiX size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};



export default Certifications;