// Suggested code may be subject to a license. Learn more: ~LicenseLog:2454924700.
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
                      <p className="font-medium">Ahamed Mansoor A</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="font-medium">ahamedamansoor.dev@gmail.com</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="font-medium">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">My Story</h2>
                  <div className="space-y-6 text-gray-700">
                    <p>
                      Hello, I'm Ahamed Mansoor! I'm a frontend developer with a passion for crafting compelling digital experiences. With over 5 years of experience, I specialize in creating intuitive and responsive websites and applications that prioritize exceptional user experiences.
                    </p>
                    <p>
                    My journey into web development took an exciting turn after working as an Electrical Engineer for 2.5 years. This shift allowed me to blend my technical background with a newfound love for coding and creating visually engaging interfaces. Discovering the joy of learning new technologies and building digital products truly invigorates me.
                    Throughout my career, I've had the opportunity to collaborate with a diverse range of companies, from startups to established enterprises, bringing their unique digital visions to fruition.
                    </p>
                    
                    <p>
                      When I'm not coding, you can find me exploring new techonology trends, play games, or hiking in the beautiful outdoors.
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
                        title: "Software Engineer(G8)",
                        company: "Cisco Systems",
                        period: "2023 - Present",
                        description: "Leading frontend features development for CNC - Crosswork product"
                      },
                      {
                        title: "Software Engineer (G6)",
                        company: "Cisco Systems",
                        period: "2021 - 2023",
                        description: "Developed responsive web applications for CNC - Crosswork product"
                      },
                      {
                        title: "Software Developer",
                        company: "Infrrd.ai",
                        period: "2020 - 2021",
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
                        degree: "Bachelor's in Electrical and Electronics Engineering",
                        school: "M.Kumarasamy college of Engineering",
                        period: "2013 - 2017",
                      },
                      {
                        degree: "Full stack developer Certification",
                        school: "Abc institute",
                        period: "2020",
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
                  { icon: <Award size={32} />, number: "50+", label: "Features developed" },
                  { icon: <Briefcase size={32} />, number: "5+", label: "Years Experience" },
                  { icon: <Award size={32} />, number: "19+", label: "Awards and Recoginitions" },
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