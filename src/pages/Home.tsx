import { motion } from 'framer-motion'
import { greeting, skills } from '../config/portfolio'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
{/* Main Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-secondary-900 z-0" />
        <div className="absolute inset-0 bg-[url('/images/secure_design.svg')] opacity-10 bg-center bg-no-repeat bg-contain" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:pr-12">
              <motion.h1
                className="text-4xl tracking-tight font-display sm:text-5xl md:text-6xl lg:leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block text-white">{greeting.title}</span>
                <span className="block text-3xl sm:text-4xl mt-3 text-primary-100 font-sans">
                  Sikkerhed i første række
                </span>
              </motion.h1>
              <motion.p
                className="mt-6 text-lg text-primary-50 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {greeting.subTitle}
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="/ydelser"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg shadow-lg text-white bg-accent-500 hover:bg-accent-600 transition-all duration-200"
                >
                  Se vores ydelser
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary-100 text-base font-medium rounded-lg shadow-sm text-primary-50 hover:bg-primary-700/50 transition-all duration-200"
                >
                  Kontakt os
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/secure_design.svg"
                alt="Security Illustration"
                className="w-full max-w-lg mx-auto filter brightness-0 invert opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-display text-primary-800 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Vores Ekspertiseområder
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-primary-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Vi tilbyder specialiserede sikkerhedsløsninger tilpasset jeres behov
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {skills.softwareSkills.map((skill, index) => (
              <motion.div
                key={skill.skillName}
                className="group relative bg-white rounded-2xl shadow-smooth hover:shadow-smooth-lg p-8 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-secondary-100 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.imagePath}
                        alt={skill.skillName}
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-primary-800 group-hover:text-accent-600 transition-colors duration-200">
                      {skill.skillName}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {skill.text.map((text, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-primary-700">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-primary-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-secondary-900 opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-3xl font-display text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Klar til at sikre din virksomhed?
            </motion.h2>
            <motion.p
              className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Lad os tale om, hvordan vi kan hjælpe med at beskytte jeres digitale aktiver
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-3 border-2 border-accent-400 text-base font-medium rounded-lg text-white bg-accent-500 hover:bg-accent-600 transition-all duration-200"
              >
                Kontakt os i dag
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
