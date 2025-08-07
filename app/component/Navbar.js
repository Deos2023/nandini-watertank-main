import { GiWaterDrop } from 'react-icons/gi';

export default function Navbar() {
  return (
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
              <a href="/services" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Services</a>
              <a href="/#process" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Process</a>
              <a href="/#testimonials" className="text-blue-800 hover:text-blue-600 px-3 py-2 font-medium">Reviews</a>
              <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}