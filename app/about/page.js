
"use client"

import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaRecycle, FaUsers, FaAward, FaHandSparkles } from 'react-icons/fa';
import { GiWaterTank, GiWaterDrop } from 'react-icons/gi';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Floating Navbar - Same as Home Page */}
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50 backdrop-filter backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <GiWaterDrop className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-blue-800">Nandini Water Tank Cleaner</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="/" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
                <a href="/about" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">About</a>
                <a href="#services" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
                <a href="#process" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Process</a>
                <a href="#testimonials" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Reviews</a>
                <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* About Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6"
            >
              About Nandini Water Tank Cleaner
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-800 max-w-3xl mx-auto"
            >
              Your trusted partner for clean water and hygienic living spaces in Kolkata since 2013
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2013, Nandini Water Tank Cleaner began with a simple mission: to provide Kolkata residents with access to clean, safe water through professional tank cleaning services. What started as a small local operation in Uttar Para has grown into one of the most trusted cleaning service providers in North 24 Parganas.
                </p>
                <p>
                  Our founder, Mr. Subhas Sarkar, recognized the critical need for proper water tank maintenance after seeing how many families were unknowingly consuming contaminated water from poorly maintained storage tanks.
                </p>
                <p>
                  Today, we serve hundreds of homes, apartments, and commercial establishments across Kolkata, maintaining our commitment to quality, hygiene, and customer satisfaction.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-300 rounded-lg z-0"></div>
              <div className="relative z-10 bg-white p-2 rounded-lg shadow-lg">
                <img 
                  src="/about-story.jpg" 
                  alt="Nandini Water Tank Cleaner Team" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <GiWaterTank className="text-blue-500 text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-blue-800">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide exceptional water tank cleaning and maintenance services that ensure safe, clean water for every household and establishment in Kolkata. We aim to raise hygiene standards through professional service, eco-friendly practices, and continuous education about water storage safety.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <GiWaterDrop className="text-blue-500 text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-blue-800">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To become Kolkata's most trusted name in water hygiene and tank maintenance, expanding our services to reach every neighborhood while maintaining our commitment to quality, affordability, and environmental responsibility. We envision a city where no one drinks contaminated water from poorly maintained tanks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Integrity</h3>
              <p className="text-gray-700 text-center">
                We maintain the highest ethical standards in all our operations, ensuring honest recommendations and transparent pricing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHandSparkles className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Excellence</h3>
              <p className="text-gray-700 text-center">
                We strive for perfection in every service, using the best techniques and equipment to deliver outstanding results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaRecycle className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Sustainability</h3>
              <p className="text-gray-700 text-center">
                We prioritize eco-friendly cleaning solutions and water conservation in all our processes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Customer Focus</h3>
              <p className="text-gray-700 text-center">
                Your satisfaction is our priority. We listen carefully and tailor our services to meet your specific needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Reliability</h3>
              <p className="text-gray-700 text-center">
                We honor our commitments, arriving on time and completing work as promised, every time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Expertise</h3>
              <p className="text-gray-700 text-center">
                Our team undergoes continuous training to stay updated with the latest cleaning technologies and hygiene standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Team</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-blue-800 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Nandini Water Tank Cleaner exceptional
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                <img src="/team-founder.jpg" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">Subhas Sarkar</h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-700">
                With over 15 years of experience in cleaning services, Subhas established Nandini with a vision to improve water hygiene standards in Kolkata.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                <img src="/team-manager.jpg" alt="Operations Manager" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">Rahul Das</h3>
              <p className="text-blue-600 mb-4">Operations Manager</p>
              <p className="text-gray-700">
                Rahul oversees all field operations, ensuring every service meets our high standards of quality and efficiency.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                <img src="/team-technician.jpg" alt="Lead Technician" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-1">Amit Roy</h3>
              <p className="text-blue-600 mb-4">Lead Technician</p>
              <p className="text-gray-700">
                Certified in water hygiene, Amit leads our cleaning teams with expertise in all types of water tank systems.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
              <p className="mb-6">
                We're always looking for passionate individuals who share our commitment to clean water and excellent service.
              </p>
              <a 
                href="mailto:Subhasswarnakar015@gmail.com?subject=Job Application" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-block"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Nandini Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their water tank cleaning needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Book Your Cleaning Today
            </a>
            <a 
              href="tel:9875466090" 
              className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
            >
              Call: 9875466090
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}