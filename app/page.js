
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaClock, FaRecycle, FaBroom, FaSprayCan, FaHandsWash } from 'react-icons/fa';
import { GiWaterDrop, GiWaterTank } from 'react-icons/gi';
import { MdCleaningServices, MdPestControl } from 'react-icons/md';
import { BsHouseDoor, BsBuilding } from 'react-icons/bs';

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const services = [
    { icon: <GiWaterTank className="text-4xl text-blue-500" />, title: "Water Tank Cleaning", desc: "Professional cleaning of overhead and underground water tanks" },
    { icon: <BsHouseDoor className="text-4xl text-blue-500" />, title: "Domestic Housekeeping", desc: "Complete home cleaning services for a spotless living space" },
    { icon: <FaBroom className="text-4xl text-blue-500" />, title: "Vacuum Cleaning", desc: "Deep cleaning with advanced vacuum technology" },
    { icon: <BsBuilding className="text-4xl text-blue-500" />, title: "Society Cleaning", desc: "Complete maintenance for housing societies and complexes" },
    { icon: <MdPestControl className="text-4xl text-blue-500" />, title: "Pest Control", desc: "Effective solutions for all types of pest problems" },
    { icon: <FaHandsWash className="text-4xl text-blue-500" />, title: "Sofa Cleaning", desc: "Professional upholstery cleaning for your furniture" },
    { icon: <MdCleaningServices className="text-4xl text-blue-500" />, title: "Building Maintenance", desc: "Comprehensive cleaning and maintenance services" },
  ];

  const steps = [
    { number: "01", title: "Drainage", desc: "Complete draining of the water tank" },
    { number: "02", title: "Scrubbing", desc: "Thorough scrubbing of walls and floor" },
    { number: "03", title: "Disinfection", desc: "Application of safe disinfectants" },
    { number: "04", title: "High-Pressure Wash", desc: "Removing all debris and residues" },
    { number: "05", title: "Final Rinse", desc: "Clean water rinse of the entire tank" },
    { number: "06", title: "Refilling", desc: "Fresh water refill with quality check" },
  ];

  const testimonials = [
    { name: "Rajesh Sharma", role: "Resident, Uttar Para", quote: "Nandini's tank cleaning service was exceptional. Our water has never been cleaner!" },
    { name: "Priya Banerjee", role: "Society Secretary", quote: "Regular maintenance by Nandini has improved our water quality significantly." },
    { name: "Amit Kumar", role: "Home Owner", quote: "Professional, punctual, and thorough. Highly recommended for tank cleaning." },
  ];

  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/919875466090?text=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 md:grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
              >
                Premium Water Tank Cleaning Services in Kolkata
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-lg text-blue-800"
              >
                Trusted by homeowners and societies for over 10 years. We provide professional, hygienic water tank cleaning and maintenance services.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
                >
                  Book Service Now
                </a>
                <a 
                  href="tel:9875466090" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
                >
                  <FaPhone className="mr-2" /> Call: 9875466090
                </a>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-200 rounded-2xl transform rotate-6"></div>
                <img 
                  src="/img1.jpg" 
                  alt="Water Tank Cleaning" 
                  className="relative rounded-2xl shadow-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">About Nandini Water Tank Cleaner</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">10 Years of Trusted Service in Kolkata</h3>
              <p className="text-gray-700 mb-4">
                Since 2013, Nandini Water Tank Cleaner has been providing top-quality cleaning and maintenance services to residential and commercial properties across Kolkata and North 24 Parganas.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of trained professionals uses eco-friendly cleaning agents and modern equipment to ensure your water tanks are thoroughly cleaned without harming your health or the environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <FaShieldAlt className="text-blue-500 text-2xl mb-2" />
                  <h4 className="font-semibold text-blue-800">Certified Professionals</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <FaClock className="text-blue-500 text-2xl mb-2" />
                  <h4 className="font-semibold text-blue-800">Timely Service</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <FaRecycle className="text-blue-500 text-2xl mb-2" />
                  <h4 className="font-semibold text-blue-800">Eco-Friendly</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <GiWaterDrop className="text-blue-500 text-2xl mb-2" />
                  <h4 className="font-semibold text-blue-800">Hygienic Water</h4>
                </div>
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
                  src="/about-water-tank.jpg" 
                  alt="About Nandini Water Tank Cleaner" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Premium Services</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-blue-800 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for your home and society
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Nandini?</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Certified Professionals</h3>
              <p className="text-gray-700">
                Our team consists of trained and certified cleaning experts who follow strict hygiene protocols.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSprayCan className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-700">
                We use only environmentally safe cleaning agents that are tough on dirt but gentle on your tanks.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Prompt Service</h3>
              <p className="text-gray-700">
                We value your time and ensure our services are completed efficiently without compromising quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Tank Cleaning Process */}
      <section id="process" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our 6-Step Water Tank Cleaning Process</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-blue-800 max-w-2xl mx-auto">
              Ensuring complete hygiene and safety with our systematic approach
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-xl">Years Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-xl">Tanks Cleaned</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-xl">Societies Served</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl">Happy Customers</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-full px-4"
                >
                  <div className="bg-blue-50 p-8 rounded-xl">
                    <div className="mb-4 text-blue-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
                    <div className="font-semibold text-blue-800">{testimonial.name}</div>
                    <div className="text-blue-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-blue-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Cleaner, Healthier Water?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book our professional water tank cleaning service today and ensure safe, hygienic water for your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Schedule Cleaning
            </a>
            <a 
              href="tel:9875466090" 
              className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
            >
              <FaPhone className="mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Our Address</h3>
                    <p className="text-gray-700">
                      Lohapool, Mahishbathan, Near Polenite Uttar Para Shiv Kali Mandir<br />
                      Kolkata, North 24 Parganas, West Bengal - 700102
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-blue-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Call Us</h3>
                    <p className="text-gray-700">
                      <a href="tel:9875466090" className="hover:text-blue-600">9875466090</a> / <a href="tel:9143170883" className="hover:text-blue-600">9143170883</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Email Us</h3>
                    <p className="text-gray-700">
                      <a href="mailto:Subhasswarnakar015@gmail.com" className="hover:text-blue-600">Subhasswarnakar015@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={sendWhatsAppMessage}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition duration-300"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}