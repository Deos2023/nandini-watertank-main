

"use client"
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, message } = formData;
    const url = `https://wa.me/919875466090?text=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Contact Nandini Water Tank Cleaner
            </h1>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Get in touch with our team for professional cleaning services in Kolkata
            </p>
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.415932434045!2d88.3687223153426!3d22.64256058514928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e4a6a3e3a49%3A0x5b2a4a3b3b3b3b3b!2sLohapool%2C%20Mahishbathan%2C%20Near%20Polenite%20Uttar%20Para%20Shiv%20Kali%20Mandir%2C%20Kolkata%2C%20North%2024%20Parganas%2C%20West%20Bengal%20700102!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                title="Nandini Water Tank Cleaner Location"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Address</h3>
                      <p className="text-gray-700">
                        Lohapool, Mahishbathan, Near Polenite Uttar Para Shiv Kali Mandir<br />
                        Kolkata, North 24 Parganas, West Bengal - 700102
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-blue-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:9875466090" className="hover:text-blue-600">9875466090</a> / <a href="tel:9143170883" className="hover:text-blue-600">9143170883</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:Subhasswarnakar015@gmail.com" className="hover:text-blue-600">Subhasswarnakar015@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaClock className="text-blue-500 text-xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Working Hours</h3>
                      <p className="text-gray-700">
                        Monday - Sunday: 8:00 AM - 8:00 PM<br />
                        Emergency services available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900">Send Us a Message</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-blue-800">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="button"
                    onClick={sendWhatsAppMessage}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition duration-300"
                  >
                    <FaWhatsapp className="mr-2 text-xl" /> Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}