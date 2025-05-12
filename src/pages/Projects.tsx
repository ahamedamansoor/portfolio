import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import TypewriterText from '../components/TypewriterText';

// Project data
const projects = [
  {
    id: 1,
    title: "Portfolio Template",
    category: "Web Design",
    image: "https://img.freepik.com/premium-photo/top-view-work-desk-with-coffee-drawing-pad_23-2148397875.jpg?w=360",
    description: "A responsive portfolio template for creative professionals with smooth animations and modern design.",
    technologies: ["React", "Tailwind CSS", "EmailJS"],
    link: "https://portfolio-mansoor.web.app/",
    github: ""
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web Application",
    image: "https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.jpg?s=612x612&w=0&k=20&c=lqbzWDBLxqRe99kOz2GwfWDRzkVduf2BvUzn1NBGh7Q=",
    description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "https://schedule-my-task-901da.web.app/",
    github: "https://github.com/ahamedamansoor/task-scheduler"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "Web Application",
    image: "https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?semt=ais_hybrid&w=740",
    description: "A weather application showing current conditions and forecasts with beautiful visualizations.",
    technologies: ["React", "OpenWeather API", "D3.js"],
    link: "https://web-climate-check.web.app/",
    github: "https://github.com/ahamedamansoor/weather-check"
  },
];

const categories = [
  "All", 
  ...Array.from(new Set(projects.map(project => project.category)))
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      <div className="bg-white pt-16">
        <Section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">My Projects</h1>
              <div className="text-xl text-gray-600">
                <TypewriterText 
                  texts={[
                    "A showcase of my best work",
                    "Bringing ideas to life through code", 
                    "From concept to deployment"
                  ]} 
                />
              </div>
            </div>
            
            {/* Filter categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-gray-900">{project.title}</h3>
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                          View Details
                        </button>
                        <div className="flex space-x-2 z-index-2">
                          { project?.github && <a href={project.github} target="_blank" className="text-gray-700 hover:text-indigo-600 transition-colors">
                            <Github size={20} />
                          </a>
                          }
                          <a href={project.link} target="_blank" className="text-gray-700 hover:text-indigo-600 transition-colors">
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Project modal */}
            <AnimatePresence>
              {selectedProject !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {(() => {
                      const project = projects.find(p => p.id === selectedProject);
                      if (!project) return null;
                      
                      return (
                        <>
                          <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-8">
                            <div className="flex flex-wrap justify-between items-start mb-6">
                              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                                {project.category}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {project.description}
          
                            </p>
                            <div className="mb-6">
                              <h4 className="text-lg font-bold mb-2 text-gray-900">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <span 
                                    key={index}
                                    className="text-sm px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <button 
                                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
                                onClick={() => setSelectedProject(null)}
                              >
                                Close
                              </button>
                              <div className="flex space-x-3">
                                {project?.github && <a target="_blank"
                                  href={project.github}
                                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center"
                                >
                                  <Github size={18} className="mr-2" /> GitHub
                                </a>
                                }
                                <a 
                                  href={project.link} target="_blank"
                                  className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center"
                                >
                                  <ExternalLink size={18} className="mr-2" /> Visit Site
                                </a>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>
        
        {/* Call to Action */}
        <Section className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              I'm always looking for interesting projects to work on. If you have a project you'd like to discuss, let's get in touch!
            </p>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default Projects;