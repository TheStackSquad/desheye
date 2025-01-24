'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaGlobe,
  FaDatabase,
  FaMobileAlt,
  FaTasks,
  FaTools,
} from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <div className=" p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-blue-500 text-4xl">
            <Icon />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.ul
          className="space-y-2 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-700 text-sm"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {feature}
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      icon: FaGlobe,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern technologies',
      features: [
        'React & Next.js Development',
        'Performance Optimization',
        'SEO-friendly Architecture',
        'Progressive Web Apps',
      ],
    },
    {
      icon: FaDatabase,
      title: 'Backend Development',
      description: 'Robust server-side solutions and database architecture',
      features: [
        'API Development',
        'Database Design',
        'Server Management',
        'Security Implementation',
      ],
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: [
        'React Native Development',
        'Native App Integration',
        'Mobile UI/UX Design',
        'App Store Deployment',
      ],
    },
    {
      icon: FaCode,
      title: 'Custom Solutions',
      description: 'Tailored software solutions for specific business needs',
      features: [
        'Legacy System Integration',
        'Custom API Development',
        'Third-party Integrations',
        'Automation Solutions',
      ],
    },
    {
      icon: FaTasks,
      title: 'Project Management',
      description: 'Technical consultation on technology stack choices, scalability solutions, and best practices.',
      features: [
        'Estimate Timelines',
        'Defining Milestones',
        'Managing Sprints For Agile Dev',
        'Adherence To Coding Standards & Best Practices',
      ],
    },
    {
      icon: FaTools,
      title: 'Maintenance & Support',
      description: 'Resolving reported issues and updating functionality.',
      features: [
        'Performance Tuning',
        'Updates',
        'Documentation',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 py-16">
      <div className="serviceUI container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">My Services</h1>
          <p className="text-gray-600">
            Delivering comprehensive solutions across the full stack development spectrum
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
