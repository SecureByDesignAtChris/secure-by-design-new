import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { greeting } from '../config/portfolio'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-smooth' : 'bg-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="group flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <img
                className="h-10 w-auto transform group-hover:scale-105 transition-transform"
                src="/images/securebydesign_logo.svg"
                alt={greeting.title}
              />
              <span className="hidden sm:block ml-2 text-xl font-display text-gray-900">
                {greeting.title}
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                to="/ydelser"
                className="text-gray-700 hover:text-primary-600 px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                Ydelser
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg shadow-sm hover:bg-primary-800 transition-all duration-200"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
            <Link
              to="/ydelser"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Ydelser
            </Link>
            <Link
              to="/kontakt"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
