//src/app/Services/page.js
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode,
  FaGlobe,
  FaDatabase,
  FaMobileAlt,
  FaTasks,
  FaTools } from 'react-icons/fa';
import '../../css/servicesPage.css'; // Importing the CSS file

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="service-card-header">
        <div className="service-card-icon">
          <Icon className="service-icon" />
        </div>
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
      <motion.ul
        className="service-features"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
      >
        {features.map((feature, index) => (
          <li key={index} className="service-feature">
            <div className="feature-bullet" />
            {feature}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      icon: FaGlobe,
      title: "Web Development",
      description: "Building responsive, scalable web applications with modern technologies",
      features: [
        "React & Next.js Development",
        "Performance Optimization",
        "SEO-friendly Architecture",
        "Progressive Web Apps",
      ],
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      description: "Robust server-side solutions and database architecture",
      features: [
        "API Development",
        "Database Design",
        "Server Management",
        "Security Implementation",
      ],
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android",
      features: [
        "React Native Development",
        "Native App Integration",
        "Mobile UI/UX Design",
        "App Store Deployment",
      ],
    },
    {
      icon: FaCode,
      title: "Custom Solutions",
      description: "Tailored software solutions for specific business needs",
      features: [
        "Legacy System Integration",
        "Custom API Development",
        "Third-party Integrations",
        "Automation Solutions",
      ],
    },
    {
      icon: FaTasks,
      title: "Project Management",
      description: "Technical consultation on technology stack choices, scalability solutions, and best practices.",
      features: [
        "Estimate Timelines",
        "Defining Milestones",
        "Managing Sprints For Agile Dev",
        "Adherence To Coding Standards & Best Practices",
      ],
    },
    {
      icon: FaTools,
      title: "Maintenance & Support",
      description: "Resolving reported issues and updating functionality.",
      features: [
        "Performance Tuning",
        "Updates",
        "Documentation",
      ],
    },
  ];

  return (
    <div className="services-page">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="services-header"
        >
          <h1 className="services-title">My Services</h1>
          <p className="services-description">
            Delivering comprehensive solutions across the full stack development spectrum
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
