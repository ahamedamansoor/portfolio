import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Award, ThumbsUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import TypewriterText from '../components/TypewriterText';

const Recognitions: React.FC = () => {
  const testimonials = [
    {
      name: "Mirel Sprung",
      role: "Director, Software Engineering",
      company: "Cisco Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "Thanks for getting this done Mansoor!! Without your diligence, hard work, and excellent collaboration, we would not have been able to deliver such a rich accessibility and localization functionality. I appreciate all the time you’ve taken, on top of your committed CNC activities, to deliver this new functionality in tight schedule to ensure the success of the EPNM program. Keep it up! Thanks, Mirel.",
      highlight: "Successful Infra UI EPNM milestones delivery!"
    },
    {
      name: "Leena Gupta",
      role: "Leader, Software Engineering",
      company: "Cisco Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "Thanks for Ahamed Mansoor proactively and consistently deliver hight quality of work for Angular14 upgrade and other tasks. He always contributes with CAN DO sprite and work with passionate around clock. He is a valuable team player.",
      highlight: "Positive Attitude and getting things done!"
    },
    {
      name: "Henry Zhen",
      role: "Leader, Software Engineering",
      company: "Cisco Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "Mansoor, your positive attitude and willingness to take on any UI challenge has greatly helped us meet our deliverables for Hi-UI on time! No matter how many last minute design changes were proposed, you took them in stride and were able to quickly incorporate them into the UI, while also helping out with the localization changes in parallel! Numerous late nights and cross team collaborations were involved and without your diligence and hard work we would not have been able to meet the DTHO timelines. Truly appreciate your hard work and thank you for your dedication!",
      highlight: "High quality and consistent delivery on time"
    },
    {
      name: "Sunil Kumar Matham",
      role: "Principal Engineer",
      company: "Cisco Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "Mansoor played a crucial role in developing, thinking through various scenarios, and coordinating between development, U/X, and test teams for CAHI auto-remediation feature. The use case was complex that required iterating many times and changing the design. Mansoor worked through these many iterations bringing up corner cases and discussing with the team and addressing them accordingly. Mansoor has shown Cisco's values in doing the right thing for our customers.",
      highlight: "working through complexity of CAHI Remediation feature"
    },
    {
      name: "Fei Yang",
      role: "Product Designer",
      company: "Cisco Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "We want to express our sincere appreciation for your invaluable contributions to aligning the UI with the Magnetic design system. Your efforts in addressing the pending common components bugs were crucial in making the project successful. Thanks to your problem-solving skills, we were able to stay on track with the Magnetic design system, resulting in a more seamless and successful outcome. Your work has made a significant impact, and we are truly grateful for your contributions.",
      highlight: "Thanks for your excellent efforts!"
    },
    {
      name: "Priyanka Kumari",
      role: "Software Engineer",
      company: "Cisco Systems",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "Hi Mansoor, I wanted to take a moment to express my sincere appreciation for your exceptional contributions and your outstanding collaboration as a member of infra team.Your ability to foster a collaborative environment has been inspiring to all of us. Thank you so much.",
      highlight: "Exemplary Catalyst for a Collaborative Atmosphere"
    }
  ];

  const achievements = [
    {
      title: "Best Employee - CNC-UI ",
      company: "Cisco Systems",
      year: "2021",
      description: "Recognized as best employee in CNC infra-ui and got $10000 as reward"
    },
    {
      title: "Grade-8 Promotion",
      company: "Cisco Systems",
      year: "2022",
      description: "Got promoted as senior software engineer"
    },
  ];

  return (
    <PageTransition>
      <div className="bg-white pt-16">
        <Section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Recognition & Testimonials</h1>
              <div className="text-xl text-gray-600">
                <TypewriterText 
                  texts={[
                    "What others say about my work",
                    "Recognition from industry professionals",
                    "Making an impact in the tech community"
                  ]} 
                />
              </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Quote className="text-indigo-600 mb-4" size={32} />
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-indigo-600">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <Star className="text-yellow-400" size={16} />
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Professional Achievements</h2>
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Award className="text-indigo-600 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mr-3">{achievement.title}</h3>
                        <span className="text-sm font-medium text-indigo-600">{achievement.year}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{achievement.company}</p>
                      <p className="text-gray-700">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Skills Endorsements */}
        <Section className="bg-gray-50">
          <div className="container mx-auto px-4" style={{display: 'none'}}>
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Skill Endorsements</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { skill: "React Development", count: 28 },
                { skill: "TypeScript", count: 24 },
                { skill: "UI/UX Implementation", count: 31 },
                { skill: "Problem Solving", count: 35 },
                { skill: "Team Leadership", count: 22 },
                { skill: "Code Quality", count: 29 }
              ].map((endorsement, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ThumbsUp className="text-indigo-600 mx-auto mb-3" size={24} />
                  <h3 className="font-bold text-gray-900 mb-2">{endorsement.skill}</h3>
                  <p className="text-indigo-600 font-medium">{endorsement.count} endorsements</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Want to work together?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something amazing together.
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

export default Recognitions;