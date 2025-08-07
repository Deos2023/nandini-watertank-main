

"use client"
import { 
    GiWaterTank, 
    GiBroom, 
    GiSpray 
  } from 'react-icons/gi';
  import { 
    MdCleaningServices, 
    MdPestControl,
    MdApartment 
  } from 'react-icons/md';
  import { 
    FaHandsWash,
    FaBuilding 
  } from 'react-icons/fa';
  import { motion } from 'framer-motion';
  
  const services = [
    {
      icon: <GiWaterTank className="text-4xl text-blue-500" />,
      title: "Water Tank Cleaning",
      description: "Professional cleaning of overhead and underground water tanks using eco-friendly disinfectants and high-pressure washing to ensure hygienic water storage.",
      highlights: [
        "Complete drainage and scrubbing",
        "High-pressure washing",
        "Food-grade disinfectants",
        "Algae and sediment removal"
      ]
    },
    {
      icon: <MdCleaningServices className="text-4xl text-blue-500" />,
      title: "Domestic Housekeeping",
      description: "Comprehensive home cleaning services for a spotless living environment, covering all areas of your residence.",
      highlights: [
        "Floor scrubbing and mopping",
        "Bathroom deep cleaning",
        "Kitchen sanitation",
        "Dusting and vacuuming"
      ]
    },
    {
      icon: <GiBroom className="text-4xl text-blue-500" />,
      title: "Vacuum Cleaning",
      description: "Advanced vacuum cleaning services to remove deep-seated dust, allergens, and debris from carpets and upholstery.",
      highlights: [
        "HEPA filtration systems",
        "Deep carpet cleaning",
        "Upholstery cleaning",
        "Pet hair removal"
      ]
    },
    {
      icon: <MdApartment className="text-4xl text-blue-500" />,
      title: "Society Cleaning",
      description: "Complete maintenance solutions for housing societies and residential complexes, including common areas and facilities.",
      highlights: [
        "Lobby and hallway cleaning",
        "Elevator sanitation",
        "Garden maintenance",
        "Waste disposal management"
      ]
    },
    {
      icon: <MdPestControl className="text-4xl text-blue-500" />,
      title: "Pest Control",
      description: "Effective pest management solutions to keep your property free from insects, rodents, and other pests.",
      highlights: [
        "Cockroach control",
        "Rodent management",
        "Termite treatment",
        "Mosquito fogging"
      ]
    },
    {
      icon: <FaHandsWash className="text-4xl text-blue-500" />,
      title: "Sofa Cleaning",
      description: "Professional upholstery cleaning to refresh and sanitize your furniture using specialized equipment.",
      highlights: [
        "Stain removal",
        "Fabric protection",
        "Deodorization",
        "Leather conditioning"
      ]
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-500" />,
      title: "Building Maintenance",
      description: "Comprehensive cleaning and maintenance services for commercial and residential buildings.",
      highlights: [
        "Window cleaning",
        "Facade washing",
        "Floor polishing",
        "Restroom maintenance"
      ]
    },
    {
      icon: <GiSpray className="text-4xl text-blue-500" />,
      title: "Disinfection Services",
      description: "Professional sanitization services to eliminate germs, bacteria, and viruses from your premises.",
      highlights: [
        "COVID-19 sanitation",
        "HVAC system cleaning",
        "High-touch area disinfection",
        "Odor neutralization"
      ]
    }
  ];

  export default function ServicesPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6"
              >
                Our Professional Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-blue-800 max-w-3xl mx-auto"
              >
                Comprehensive cleaning solutions tailored to your needs in Kolkata and North 24 Parganas
              </motion.p>
            </div>
          </div>
        </section>
  
        {/* Services Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Professional Cleaning?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book our services today and enjoy a cleaner, healthier living or working environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-medium transition duration-300"
              >
                Book Now
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