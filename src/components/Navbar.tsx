import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { greeting } from '../config/portfolio'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/images/securebydesign_logo.svg"
                alt={greeting.title}
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                {greeting.title}
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/ydelser"
                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Ydelser
              </Link>
              <Link
                to="/kontakt"
                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
