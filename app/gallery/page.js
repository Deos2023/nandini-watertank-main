'use client'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  const images = [
    { id: 1, src: '/1.jpeg', alt: 'Water Tank Cleaning Process', caption: 'Our team cleaning an overhead tank' },
    { id: 2, src: '/2.jpeg', alt: 'Tank Inspection', caption: 'Inspecting tank before cleaning' },
    { id: 3, src: '/3.jpeg', alt: 'Cleaning Equipment', caption: 'Professional cleaning equipment' },
    { id: 4, src: '/4.jpeg', alt: 'Completed Cleaning', caption: 'Spotless tank after our service' },
  ];

  const videos = [
    { id: 1, src: '/vid/vid (1).mp4', thumbnail: '/1.jpeg', title: 'Complete Tank Cleaning Process' },
    { id: 2, src: '/vid/vid (2).mp4', thumbnail: '/2.jpeg', title: 'Disinfection Technique' },
    { id: 3, src: '/vid/vid (3).mp4', thumbnail: '/3.jpeg', title: 'High Pressure Washing' },
    { id: 4, src: '/vid/vid (4).mp4', thumbnail: '/4.jpeg', title: 'Residential Tank Cleaning' },
    { id: 5, src: '/vid/vid (5).mp4', thumbnail: '/1.jpeg', title: 'Society Maintenance Work' },
    { id: 6, src: '/vid/vid (6).mp4', thumbnail: '/2.jpeg', title: 'Before & After Comparison' },
    { id: 7, src: '/vid/vid (7).mp4', thumbnail: '/3.jpeg', title: 'Pest Control Treatment' },
    { id: 8, src: '/vid/vid (8).mp4', thumbnail: '/4.jpeg', title: 'Sofa Cleaning Demo' },
    { id: 9, src: '/vid/vid (9).mp4', thumbnail: '/1.jpeg', title: 'Customer Testimonial' },
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white hover:text-blue-300 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            <video
              ref={videoRef}
              src={selectedVideo.src}
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
            <h3 className="text-white text-xl mt-4">{selectedVideo.title}</h3>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Our Work Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            See our professional cleaning services in action through photos and videos
          </motion.p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Photo Gallery</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-blue-800 max-w-2xl mx-auto">
              Capturing our cleaning process and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative group">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="bg-white text-blue-600 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700 text-center">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Video Gallery</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
            <p className="mt-4 text-blue-800 max-w-2xl mx-auto">
              Watch our cleaning process and customer testimonials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white"
              >
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => openVideoModal(video)}
                >
                  {/* Video thumbnail - using the first frame of the video would be better */}
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 rounded-full p-4 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                      <FaPlay className="text-lg" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Cleaning Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule your water tank cleaning or other maintenance services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/#contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Contact Us
            </a>
            <a 
              href="tel:9875466090" 
              className="border-2 border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}