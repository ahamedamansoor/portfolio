import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import PageTransition from '../components/PageTransition';
import TypewriterText from '../components/TypewriterText';
import Section from '../components/Section';

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCv = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Ahamed Mansoor Cv';
    link.download = 'Ahamed Mansoor CV';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Hero section with floating particles */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0" style={{ height: '100%' }}>
            <ParticlesBackground />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="text-indigo-600">Ahamed Mansoor </span>
            </motion.h1>
            <motion.div
              className="text-xl md:text-3xl text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <TypewriterText 
                texts={[
                  "I'm a Frontend Developer",
                  "I build beautiful web experiences",
                  "I create digital solutions",
                  "I love clean design"
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg hover:bg-indigo-700 transition duration-300 mr-4"
                onClick={scrollToAbout}
              >
                View My Work
              </button>
              <button
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
                onClick={downloadCv}
              >
                Download CV
              </button>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={scrollToAbout}
          >
            <ArrowDown className="text-gray-700" size={32} />
          </motion.div>
        </div>

        {/* Introduction Section */}
        <div ref={aboutRef}>
          <Section className="bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Welcome to My Portfolio</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  I create engaging digital experiences with a focus on clean design and intuitive user interfaces.
                  With expertise in modern web technologies, I bring ideas to life through code and creativity.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/about" 
                    className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition duration-300"
                  >
                    About Me
                  </a>
                  <a 
                    href="/projects" 
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition duration-300"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </Section>
          
          {/* Featured Projects Preview */}
         { false && <Section className="bg-gray-50" delay={0.2}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video bg-gray-200"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Project {item}</h3>
                      <p className="text-gray-600 mb-4">
                        A brief description of this amazing project and the technologies used.
                      </p>
                      <a 
                        href="/projects" 
                        className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                      >
                        View Details →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <a 
                  href="/projects" 
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition duration-300"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </Section>}
          
          {/* Skills Preview */}
          <Section className="bg-white" delay={0.4}>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Skills & Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['HTML','CSS/SCSS','JavaScript','TypeScript' , 'Angular17+' ,  'React', 'UI/UX Design','Node.js', 'Ag-grid','Mermaid', 'D3' , 'Responsive Design'].map((skill) => (
                  <motion.div 
                    key={skill}
                    className="bg-gray-50 rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium text-gray-800">{skill}</span>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <a 
                  href="/skills" 
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition duration-300"
                >
                  Explore My Skills
                </a>
              </div>
            </div>
          </Section>
          
          {/* Contact CTA */}
          <Section className="bg-indigo-600 text-white" delay={0.6}>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? I'm currently available for freelance work.
              </p>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </Section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;