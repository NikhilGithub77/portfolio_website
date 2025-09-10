import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-8 p-3 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Nikhil Reddy Kandadi</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Data Science Enthusiast about creating intelligent solutions for tomorrow's challenges.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of coffee ☕</span>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Nikhil Reddy Kandadi. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;