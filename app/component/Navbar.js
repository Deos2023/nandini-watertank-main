

"use client"

import { GiWaterDrop } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // If using Next.js, otherwise use regular <a> tags

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close sidebar when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full bg-white ${scrolled ? 'bg-opacity-95 shadow-sm' : 'bg-opacity-90'} z-50 backdrop-filter backdrop-blur-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <GiWaterDrop className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-blue-800">Nandini Water Tank Cleaner</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Home</Link>
                <Link href="/about" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">About</Link>
                <Link href="/services" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Services</Link>
                <Link href="/#process" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Process</Link>
                <Link href="/#testimonials" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Reviews</Link>
                <Link href="/gallery" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Gallery</Link>
                <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">Contact</Link>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="menu-button inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:text-blue-600 focus:outline-none"
                aria-expanded="false"
              >
                {isOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`sidebar fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <GiWaterDrop className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-blue-800">Nandini</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 py-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={handleLinkClick} className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Home</Link>
            <Link href="/about" onClick={handleLinkClick} className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">About</Link>
            <Link href="/services" onClick={handleLinkClick} className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Services</Link>
            <Link href="/#process" onClick={handleLinkClick} className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Process</Link>
            <Link href="/#testimonials" onClick={handleLinkClick} className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Reviews</Link>
            <Link href="/gallery" onClick={handleLinkClick} className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Gallery</Link>
            <Link href="/contact" onClick={handleLinkClick} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-center">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}