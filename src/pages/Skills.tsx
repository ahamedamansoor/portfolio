import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import TypewriterText from '../components/TypewriterText';

const Skills: React.FC = () => {
  // Technical skills with proficiency levels
  const technicalSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3/SASS", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Node.js", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "UI/UX Design", level: 78 }
  ];

  // Design tools
  const designTools = [
    { name: "Figma", level: 90 },
    { name: "Adobe XD", level: 85 },
    { name: "Photoshop", level: 70 },
    { name: "Illustrator", level: 65 }
  ];

  // Soft skills
  const softSkills = [
    "Problem Solving",
    "Communication",
    "Time Management",
    "Team Collaboration",
    "Adaptability",
    "Creativity",
    "Critical Thinking",
    "Attention to Detail"
  ];

  // Services I offer
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and performant websites using modern technologies and best practices."
    },
    {
      title: "Frontend Development",
      description: "Creating interactive user interfaces with React and other modern JavaScript frameworks."
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces and experiences."
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed and performance for better user experience and SEO."
    }
  ];

  return (
    <PageTransition>
      <div className="bg-white pt-16">
        <Section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Services</h1>
              <div className="text-xl text-gray-600">
                <TypewriterText 
                  texts={[
                    "What I bring to the table",
                    "My technical toolkit", 
                    "How I can help your project succeed"
                  ]} 
                />
              </div>
            </div>
            
            {/* Technical Skills */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Technical Skills</h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-indigo-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Design Tools */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Design Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designTools.map((tool, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{tool.name}</span>
                      <span className="text-indigo-600 font-medium">{tool.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Soft Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, backgroundColor: "#EEF2FF" }}
                  >
                    <span className="font-medium text-gray-800">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
        
        {/* Services */}
        <Section className="bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Services I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
        
        {/* Work Process */}
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">My Work Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process timeline */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-indigo-200 transform md:translate-x-px"></div>
                
                {/* Process steps */}
                {[
                  {
                    title: "Discovery",
                    description: "I start by understanding your goals, target audience, and project requirements."
                  },
                  {
                    title: "Planning",
                    description: "Creating a detailed roadmap including site architecture, features, and timeline."
                  },
                  {
                    title: "Design",
                    description: "Developing UI/UX design concepts focused on both aesthetics and usability."
                  },
                  {
                    title: "Development",
                    description: "Building the project with clean, efficient code following best practices."
                  },
                  {
                    title: "Testing",
                    description: "Thorough testing across devices and browsers to ensure quality."
                  },
                  {
                    title: "Deployment",
                    description: "Launching the project and providing support for a smooth transition."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex flex-col md:flex-row items-center mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 mb-4 md:mb-0`}>
                      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
        
        {/* Call to Action */}
        <Section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how my skills and services can help bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default Skills;