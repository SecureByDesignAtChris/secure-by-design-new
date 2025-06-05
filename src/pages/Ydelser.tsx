import { motion } from 'framer-motion'
import { ydelser, skills } from '../config/portfolio'

const Ydelser = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vores Ydelser
          </h1>
          <p className="text-xl text-gray-600">{ydelser.subTitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {skills.softwareSkills.map((skill, index) => (
            <motion.div
              key={skill.skillName}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/3 p-8 flex justify-center items-center bg-gray-50">
                <img
                  src={skill.imagePath}
                  alt={skill.skillName}
                  className="w-24 h-24"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {skill.skillName}
                </h3>
                <ul className="space-y-4">
                  {skill.text.map((text, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ydelser
