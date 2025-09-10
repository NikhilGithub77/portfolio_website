import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Brain, Code, Database } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Advanced Education',
      description: 'MS in Data Science at University of Michigan, Bachelor\'s in AI from Mahindra University',
    },
    {
      icon: <Brain size={24} />,
      title: 'AI & ML Expertise',
      description: 'Specialized in deep learning, computer vision, and neural networks with practical applications',
    },
    {
      icon: <Code size={24} />,
      title: 'Technical Proficiency',
      description: 'Expert in Python, TensorFlow, SQL, and modern data science frameworks',
    },
    {
      icon: <Database size={24} />,
      title: 'Data Analysis',
      description: 'Experienced in financial analytics, sentiment analysis, and large-scale data processing',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate AI enthusiast currently pursuing my Master's degree at the University of Michigan. 
            With a strong foundation in artificial intelligence and hands-on experience in machine learning projects, 
            I love turning complex data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  My fascination with artificial intelligence began during my undergraduate studies at Mahindra University, 
                  where I specialized in AI and gained hands-on experience with cutting-edge technologies.
                </p>
                <p>
                  Currently pursuing my Master's in Data Science at the University of Michigan, I'm deepening my expertise 
                  in advanced analytics, machine learning algorithms, and their real-world applications.
                </p>
                <p>
                  Through internships and personal projects, I've worked on everything from malware detection using deep learning 
                  to financial market analysis using NLP, always striving to bridge the gap between theoretical knowledge and practical solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Major Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-600">Certifications</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-secondary-600 mb-2">97%</div>
                <div className="text-gray-600">Best Accuracy</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;