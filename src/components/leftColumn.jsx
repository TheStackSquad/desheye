import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const LeftColumn = () => {
  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "thefelainme@gmail.com", link: "mailto:thefelainme@gmail.com" },
    { icon: <Phone size={20} />, label: "Tel", value: "+234-815764221" },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "+234 816 711 8379" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/adesheye", link: "https://linkedin.com/in/adesheye" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
    >
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 overflow-hidden">
          <Image
          src='/asset/img/desheyeHeader.webp'
          className="rounded-full mx-auto object-cover w-56 h-36"
  width={150}
  height={150}
  loading="lazy"
          alt='desheye'
          />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">General Information</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"/>
        </div>

        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">{item.label}:</div>
                {item.link ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-gray-800 font-medium">{item.value}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LeftColumn;