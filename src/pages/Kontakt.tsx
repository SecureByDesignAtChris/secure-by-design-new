import { motion } from 'framer-motion'
import { socialMediaLinks } from '../config/portfolio'

const Kontakt = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt Os</h1>
          <p className="text-xl text-gray-600">
            Vi står klar til at hjælpe med dine sikkerhedsbehov
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialMediaLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: contact.backgroundColor }}
              >
                <i className={`fab ${contact.icon} text-2xl text-white`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {contact.name}
                </h3>
                <p className="text-gray-600">
                  {contact.name === 'LinkedIn'
                    ? 'Følg os på LinkedIn'
                    : 'Send os en mail'}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Lad os tale om dit projekt
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi er altid interesserede i at høre om nye projekter og hvordan vi kan
            hjælpe med at sikre jeres digitale løsninger. Kontakt os for en
            uforpligtende snak om jeres behov.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Kontakt
