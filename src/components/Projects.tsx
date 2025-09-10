import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'FinInsight: AI-Powered Financial Analysis Platform',
      period: 'Jan 2025 – May 2025',
      description: 'Developed an AI-powered financial analysis system by integrating news articles, Reddit discussions, and SEC filings, enabling automated insights into market sentiment and financial trends.',
      details: [
        'Applied Natural Language Processing (NLP) techniques for sentiment analysis and topic modeling on large-scale unstructured financial text data',
        'Designed and implemented machine learning pipelines in Python for data preprocessing, model training, and predictive analysis',
        'Built automated insights system for market sentiment analysis'
      ],
      technologies: ['Python', 'NLP', 'TensorFlow', 'Jupyter Notebook', 'Sentiment Analysis', 'Financial Data'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'AI & NLP',
    },
    {
      title: 'Multi-View Face Recognition System',
      period: 'Jan 2024 – May 2024',
      description: 'Developed a sophisticated face recognition system focusing on multi-view scenarios with advanced deep learning techniques.',
      details: [
        'Initially implemented K-Nearest Neighbors (KNN) algorithm but transitioned to advanced ArcFace algorithm for better accuracy',
        'ArcFace significantly improved accuracy to approximately 90%, showcasing its prowess in handling complex facial features',
        'Addressed gaps in traditional face recognition systems with advanced methodologies'
      ],
      technologies: ['Python', 'OpenCV', 'ArcFace', 'Deep Learning', 'Computer Vision', 'KNN'],
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Computer Vision',
    },
    {
      title: 'Deep Learning Malware Analysis',
      period: 'Aug 2023 – Dec 2023',
      description: 'Built advanced malware detection system using deep learning techniques for identifying malicious files through image-based analysis.',
      details: [
        'Developed CNN and LSTM models for malware image detection with comparative performance evaluation',
        'Optimized hyperparameters to enhance detection accuracy and robustness against adversarial inputs',
        'Achieved multi-class classification across 27 categories using 3-layer convolutional network with ReLU activation'
      ],
      technologies: ['Python', 'TensorFlow', 'CNN', 'LSTM', 'Deep Learning', 'Cybersecurity'],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Deep Learning',
    },
    {
      title: 'Rice Varieties Classification with ML',
      period: 'Jan 2023 – May 2023',
      description: 'Machine learning project for automated classification of rice varieties using advanced feature extraction and multiple ML algorithms.',
      details: [
        'Pre-processed rice grain images and extracted 106 features for comprehensive analysis',
        'Implemented and benchmarked multiple ML algorithms including Decision Tree, SVM, and Random Forest',
        'Achieved 97% accuracy using Decision Tree model on a dataset of 75,000 samples'
      ],
      technologies: ['Python', 'Scikit-learn', 'Decision Tree', 'SVM', 'Random Forest', 'Image Processing'],
      image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg',
      category: 'Machine Learning',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my expertise in AI, machine learning, and data science through hands-on projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors"
                    >
                      <Github size={16} className="text-gray-600 hover:text-primary-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-600 hover:text-primary-600" />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.details.slice(0, 2).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/NikhilGithub77/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;