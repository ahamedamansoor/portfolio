import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Coffee } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import TypewriterText from '../components/TypewriterText';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-white pt-16">
        <Section>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h1>
                <div className="text-xl text-gray-600">
                  <TypewriterText 
                    texts={[
                      "Developer. Designer. Problem Solver.", 
                      "Creating digital experiences since 2015.",
                      "Turning ideas into reality."
                    ]} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                <div className="col-span-1 md:col-span-1">
                  <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mb-6">
                    {/* Profile Image Placeholder */}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Name</h3>
                      <p className="font-medium">Alex Johnson</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="font-medium">hello@example.com</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">My Story</h2>
                  <div className="space-y-6 text-gray-700">
                    <p>
                      Hello! I'm Alex, a passionate frontend developer with over 5 years of experience crafting engaging digital experiences.
                      I specialize in building intuitive, responsive websites and applications that not only look great but also deliver exceptional user experiences.
                    </p>
                    <p>
                      My journey into the world of web development began during my college years, where I discovered my passion for combining creative design with technical problem-solving.
                      Over the years, I've had the privilege of working with startups, agencies, and established companies, helping them bring their digital visions to life.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the beautiful outdoors.
                      I believe in continuous learning and am always excited to tackle new challenges in the ever-evolving world of web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Experience & Education */}
        <Section className="bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Experience & Education</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Experience */}
                <div>
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-indigo-600 mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Senior Frontend Developer",
                        company: "Tech Innovations Inc.",
                        period: "2020 - Present",
                        description: "Lead frontend development for client projects, implementing modern web technologies and best practices."
                      },
                      {
                        title: "Web Developer",
                        company: "Digital Agency Co.",
                        period: "2018 - 2020",
                        description: "Developed responsive websites and web applications for various clients in e-commerce and SaaS industries."
                      },
                      {
                        title: "Junior Developer",
                        company: "Startup Studio",
                        period: "2016 - 2018",
                        description: "Contributed to frontend development for early-stage startups, focusing on user interface implementation."
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="border-l-2 border-indigo-600 pl-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                        <p className="text-indigo-600 font-medium">{item.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Education */}
                <div>
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-indigo-600 mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        degree: "Master's in Computer Science",
                        school: "Tech University",
                        period: "2015 - 2017",
                        description: "Specialized in Human-Computer Interaction and Web Technologies."
                      },
                      {
                        degree: "Bachelor's in Information Technology",
                        school: "State University",
                        period: "2011 - 2015",
                        description: "Graduated with honors. Focused on web development and design principles."
                      },
                      {
                        degree: "Web Development Bootcamp",
                        school: "Code Academy",
                        period: "Summer 2014",
                        description: "Intensive program covering frontend and backend development technologies."
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="border-l-2 border-indigo-600 pl-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="text-lg font-bold text-gray-900">{item.degree}</h4>
                        <p className="text-indigo-600 font-medium">{item.school}</p>
                        <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Fun Facts */}
        <Section>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Fun Facts</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Coffee size={32} />, number: "1,200+", label: "Cups of Coffee" },
                  { icon: <Award size={32} />, number: "15+", label: "Projects Completed" },
                  { icon: <Briefcase size={32} />, number: "5+", label: "Years Experience" },
                  { icon: <GraduationCap size={32} />, number: "3", label: "Degrees & Certificates" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-indigo-600 mb-3 flex justify-center">{item.icon}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{item.number}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
        
        {/* Call to Action */}
        <Section className="bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Want to work together?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default About;