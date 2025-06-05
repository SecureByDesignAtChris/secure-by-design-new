import { socialMediaLinks } from '../config/portfolio'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div>
            <Link to="/" className="flex items-center group">
              <img
                className="h-8 w-auto filter brightness-0 invert group-hover:opacity-90 transition-opacity"
                src="/images/securebydesign_logo.svg"
                alt="SecureByDesign"
              />
              <span className="ml-2 text-xl font-bold text-white group-hover:text-primary-100 transition-colors">
                SecureByDesign
              </span>
            </Link>
            <p className="mt-4 text-base text-gray-400">
              Vi specialiserer os i at sikre jeres digitale platforme og beskytte jeres data.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Hurtige Links
            </h3>
            <div className="mt-4 space-y-4">
              <Link to="/" className="block text-base text-gray-300 hover:text-white">
                Hjem
              </Link>
              <Link to="/ydelser" className="block text-base text-gray-300 hover:text-white">
                Ydelser
              </Link>
              <Link to="/kontakt" className="block text-base text-gray-300 hover:text-white">
                Kontakt
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Kontakt Os
            </h3>
            <div className="mt-4 space-y-4">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="flex items-center text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${social.icon} text-xl w-8`} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} SecureByDesign. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
