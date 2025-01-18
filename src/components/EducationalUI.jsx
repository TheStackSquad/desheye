'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown,
  Book,
  Award } from 'lucide-react';

  //eslint-disable-next-line
const EducationalUI = ({ loading = false }) => {
  const [showCertificate, setShowCertificate] = React.useState(false);

  const educationData = {
    school: "ALX Software Engineering",
    period: "2023 - 2024",
    description: "Intensive full-stack software engineering program focusing on practical projects and real-world applications. Learned modern web development technologies and best practices through hands-on experience.",
    highlights: [
      "Developed full-stack applications using React and Node.js",
      "Collaborated with international teams on complex projects",
      "Mastered Git workflow and agile methodologies",
      "Built scalable backend systems with Nodejs"
    ],
    certificateUrl: "/asset/img/Alx_SE_Certificate.webp"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Educational Journey
          </h1>
          <div className="inline-flex items-center space-x-2 text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
            <Book className="w-5 h-5" />
            <span className="font-medium">{educationData.period}</span>
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6"
        >
          {/* School Info */}
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {educationData.school}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {educationData.description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-4">
            {educationData.highlights.map((highlight, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </motion.li>
            ))}
          </ul>

          {/* Certificate Toggle */}
          <div className="space-y-4">
            <motion.button
              onClick={() => setShowCertificate(!showCertificate)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl font-medium text-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span>{showCertificate ? 'Hide Certificate' : 'View Certificate'}</span>
              <motion.div
                animate={{ rotate: showCertificate ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>

            {/* Certificate Viewer */}
            <motion.div
              initial={false}
              animate={{
                height: showCertificate ? 'auto' : 0,
                opacity: showCertificate ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="relative aspect-[1.4] w-full overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={educationData.certificateUrl}
                    alt="ALX Certificate"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationalUI;