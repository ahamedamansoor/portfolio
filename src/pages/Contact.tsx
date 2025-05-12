import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import TypewriterText from '../components/TypewriterText';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID =  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID =  import.meta.env.VITE_EMAILJS_USER_ID;
    try {
       await emailjs.sendForm(serviceID, templateID, e.currentTarget as HTMLFormElement, userID);

      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
        setSubmitStatus('error')
        if (error instanceof Error) {
            console.error('Error sending email:', error.message);
          } else {
            console.error('An unknown error occurred:', error);
          }

    } finally {
        setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }


  };

  return (
    <PageTransition>
      <div className="bg-white pt-16">
        <Section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
              <div className="text-xl text-gray-600">
                <TypewriterText 
                  texts={[
                    "Let's turn your ideas into reality",
                    "I'd love to hear about your project", 
                    "Looking forward to our collaboration"
                  ]} 
                />
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Contact information */}
                <div className="md:col-span-2 bg-gray-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                  <p className="text-gray-700 mb-8">
                    Feel free to reach out if you have any questions or want to discuss potential projects. I'm always open to new opportunities.
                  </p>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <Mail className="text-indigo-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <a href="mailto:hello@example.com" className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                          ahamedamansoor.dev@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <Phone className="text-indigo-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <a href="tel:+11234567890" className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                          +91-7010932552
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <MapPin className="text-indigo-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="font-medium text-gray-900">
                          Bengaluru, Karnataka, India
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Connect With Me</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.linkedin.com/in/ahamedamansoor/" target="_blank"
                        className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact form */}
                <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h2>
                  
                  {submitStatus === 'success' ? (
                    <motion.div 
                      className="bg-green-50 p-6 rounded-lg mb-6 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                      <p className="text-green-600">
                        Thank you for your message. I'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            placeholder="Ahamed Mansoor"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            placeholder="abc@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Project Inquiry"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Hello, I'd like to discuss a project..."
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Section>
        {/* Call to Action */}
        <Section className="bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to say hello, I'd love to hear from you!
            </p>
            <a 
              href="mailto:hello@example.com" 
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Email Me Directly
            </a>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default Contact;
