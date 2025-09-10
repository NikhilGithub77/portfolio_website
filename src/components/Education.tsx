import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University of Michigan',
      location: 'Dearborn, MI',
      period: 'Jan 2025 – Dec 2026',
      status: 'In Progress',
      description: 'Advanced coursework in machine learning, statistical analysis, data mining, and artificial intelligence applications.',
      highlights: ['Advanced Machine Learning', 'Statistical Analysis', 'Data Mining', 'AI Applications'],
    },
    {
      degree: 'Bachelor of Technology in Artificial Intelligence',
      institution: 'Mahindra University',
      location: 'Hyderabad, India',
      period: 'Aug 2020 – Aug 2024',
      status: 'Completed',
      description: 'Comprehensive program covering AI fundamentals, machine learning algorithms, deep learning, and practical applications.',
      highlights: ['Deep Learning', 'Computer Vision', 'Natural Language Processing', 'AI Ethics'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation in data science and artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-200"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-xl shadow-lg p-8 ml-16 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-10 top-8 w-4 h-4 ${
                    edu.status === 'In Progress' ? 'bg-secondary-600' : 'bg-primary-600'
                  } rounded-full border-4 border-white shadow-lg`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-secondary-100 text-secondary-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-primary-600 mb-2">
                        <GraduationCap size={18} />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                      <Award size={18} />
                      <span>Key Areas of Study:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <motion.span
                          key={highlightIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, delay: 0.5 + highlightIndex * 0.1 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'In Progress'
                              ? 'bg-secondary-100 text-secondary-700'
                              : 'bg-primary-100 text-primary-700'
                          }`}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;