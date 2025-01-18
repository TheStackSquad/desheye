import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import CustomProgressIndicator from '@/components/motionUtils/customProgressIndicator';

const RightColumn = ({ skills }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8"
    >
      <div className="space-y-6">
        <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors duration-200">
          <span>Available for freelance work</span>
          <Download size={16} className="ml-2" />
        </button>

        <div className="space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800"
          >
            Desheye Akalla
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-600 font-medium"
          >
            Full Stack Developer
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800">A Little Bit About Me</h3>
          <p className="text-gray-600 leading-relaxed">
            Passionate Full Stack Web Developer with expertise in creating
            dynamic, user-friendly web applications. Skilled in front-end
            technologies like React and backend frameworks like Node.js,
            I build scalable, efficient solutions.
            Dedicated to delivering seamless user
            experiences and clean, maintainable code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <CustomProgressIndicator
              key={skill.label}
              percentage={skill.percentage}
              label={skill.label}
              description={skill.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RightColumn;