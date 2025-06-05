import { motion } from 'framer-motion'
import { ydelser, skills } from '../config/portfolio'

const Ydelser = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-display text-gray-900 sm:text-5xl">
            Vores Ydelser
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {ydelser.subTitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 space-y-16">
          {skills.softwareSkills.map((skill, index) => (
            <motion.div
              key={skill.skillName}
              className="relative bg-white rounded-2xl shadow-smooth overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:items-center">
                <div className="relative p-8 lg:p-12">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-primary-100 rounded-full -mt-20 -ml-20 opacity-30" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center p-3 bg-primary-200 rounded-xl">
                      <img
                        src={skill.imagePath}
                        alt={skill.skillName}
                        className="w-12 h-12"
                      />
                    </div>
                    <h2 className="mt-6 text-2xl font-display text-gray-900">
                      {skill.skillName}
                    </h2>
                    <ul className="mt-8 space-y-4">
                      {skill.text.map((text, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0"
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
                          <span className="text-gray-600">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-white opacity-50" />
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={skill.imagePath}
                      alt={skill.skillName}
                      className="w-full h-full object-contain p-8"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl shadow-smooth-lg p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-display text-white sm:text-3xl">
            Har du brug for vores ekspertise?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Vi er klar til at hjælpe med at sikre jeres digitale løsninger.
            Kontakt os for en uforpligtende snak om jeres behov.
          </p>
          <div className="mt-8">
            <a
              href="/kontakt"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-800 transition-colors duration-200"
            >
              Kontakt os
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Ydelser
