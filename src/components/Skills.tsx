import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        'Python',
        'JavaScript',
        'SQL',
        'C',
        'HTML/CSS',
      ],
      color: 'primary',
    },
    {
      title: 'AI/ML Frameworks',
      icon: <Brain size={24} />,
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Pandas',
        'NumPy',
      ],
      color: 'secondary',
    },
    {
      title: 'Data & Analytics',
      icon: <Database size={24} />,
      skills: [
        'Power BI',
        'SQL (PostgreSQL)',
        'NoSQL',
        'Excel',
        'Data Visualization',
      ],
      color: 'primary',
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: [
        'Git',
        'Google Cloud Platform',
        'VS Code',
        'PyCharm',
        'Flask',
      ],
      color: 'secondary',
    },
  ];

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: 'Jun 2025',
      description: 'Completed comprehensive course covering supervised learning, neural networks, decision trees, and reinforcement learning with practical applications.',
    },
    {
      title: 'Generative AI for Data Analysts',
      issuer: 'Coursera',
      date: 'Jun 2025',
      description: 'Mastered generative AI tools like ChatGPT and DALL-E, specializing in prompt engineering and applying AI to enhance data analytics.',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical proficiency across the full spectrum of data science and AI technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`text-${category.color}-600`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      category.color === 'primary'
                        ? 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-primary-600">
                      <span className="font-semibold">{cert.issuer}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{cert.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;