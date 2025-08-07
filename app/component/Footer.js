import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GiWaterDrop, GiWaterTank } from 'react-icons/gi';

export default function Footer (){
    {/* Footer */}
    return (

<footer className="bg-blue-900 text-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid md:grid-cols-4 gap-8">
    <div>
      <div className="flex items-center mb-4">
        <GiWaterDrop className="h-8 w-8 text-blue-300" />
        <span className="ml-2 text-xl font-bold text-white">Nandini Water Tank Cleaner</span>
      </div>
      <p className="text-blue-200">
        Providing premium cleaning services in Kolkata for over 10 years. Your trusted partner for water tank cleaning and maintenance.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#home" className="text-blue-200 hover:text-white">Home</a></li>
        <li><a href="#about" className="text-blue-200 hover:text-white">About Us</a></li>
        <li><a href="#services" className="text-blue-200 hover:text-white">Services</a></li>
        <li><a href="#process" className="text-blue-200 hover:text-white">Cleaning Process</a></li>
        <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Services</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-200 hover:text-white">Water Tank Cleaning</a></li>
        <li><a href="#" className="text-blue-200 hover:text-white">Domestic Housekeeping</a></li>
        <li><a href="#" className="text-blue-200 hover:text-white">Pest Control</a></li>
        <li><a href="#" className="text-blue-200 hover:text-white">Society Cleaning</a></li>
        <li><a href="#" className="text-blue-200 hover:text-white">Building Maintenance</a></li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
      <ul className="space-y-2 text-blue-200">
        <li className="flex items-start">
          <FaMapMarkerAlt className="mt-1 mr-2" />
          Lohapool, Mahishbathan, Kolkata - 700102
        </li>
        <li className="flex items-center">
          <FaPhone className="mr-2" />
          9875466090 / 9143170883
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-2" />
          Subhasswarnakar015@gmail.com
        </li>
      </ul>
    </div>
  </div>
  
  <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
    <p>&copy; {new Date().getFullYear()} Nandini Water Tank Cleaner. All rights reserved.Website Developed and maintained by Digital Exposure Online Services</p>
  </div>
</div>
</footer>
    );

}