import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experience = {
    title: 'Data Analyst Intern',
    company: 'MeriSKILL',
    location: 'Hyderabad, India',
    period: 'Sep 2023 – Oct 2023',
    description: [
      'Gained hands-on experience with Power BI by creating dashboards and visual reports for effective data analysis',
      'Deepened knowledge of SQL and Python by learning and applying advanced concepts for data manipulation and analytics',
      'Collaborated with cross-functional teams to deliver data-driven insights that improved business decision-making',
    ],
    technologies: ['Power BI', 'SQL', 'Python', 'Data Visualization', 'Analytics'],
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional experience in data analysis and business intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            {/* Experience card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-xl shadow-lg p-8 ml-16 hover:shadow-xl transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-10 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-primary-600 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{experience.company}</span>
                    <ExternalLink size={16} />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {experience.description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;