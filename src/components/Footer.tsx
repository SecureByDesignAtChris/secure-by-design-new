import { socialMediaLinks } from '../config/portfolio'

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="text-gray-400 hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <i
                className={`fab ${social.icon} text-2xl`}
                style={{ color: social.backgroundColor }}
              />
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} SecureByDesign. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
