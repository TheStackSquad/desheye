//src/components/contact/contactUI.js
"use client";
import React from "react";
import { Mail, Linkedin, X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const uiData = {
  contact: {
    heading: "Let's Connect and Create",
    description:
      "Whether you have a project in mind or just want to say hi, feel free to reach out. I'm always open to new opportunities and collaborations.",
    email: "thestaccsessions@gmail.com",
    linkedin: "adesheye",
    twitter: "@TheStacSessions",
    whatsapp: "+2348167118379",
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ContactUI = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${uiData.contact.email}`,
      color: "from-red-500 to-pink-600",
      hoverColor: "hover:text-red-400",
      label: uiData.contact.email,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/in/${uiData.contact.linkedin}`,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:text-blue-400",
      label: "Connect on LinkedIn",
      external: true,
    },
    {
      name: "Twitter",
      icon: X,
      href: `https://x.com/${uiData.contact.twitter.replace("@", "")}`,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:text-gray-600",
      label: uiData.contact.twitter,
      external: true,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${uiData.contact.whatsapp.replace(/\+/g, "")}`,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:text-green-500",
      label: "Send a message",
      external: true,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <motion.div
          className="flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-xl w-full">
            {/* Small Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Get in Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {uiData.contact.heading}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mb-12 leading-relaxed"
            >
              {uiData.contact.description}
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  variants={iconVariants}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <link.icon size={20} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                      {link.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {link.label}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              ))}
            </motion.div>

            {/* Footer Note */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500">
                Available for freelance projects and collaborations
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-600 font-medium">
                  Usually responds within 24 hours
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="relative h-[40vh] sm:h-[50vh] lg:h-full min-h-[400px] order-1 lg:order-2"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image Container */}
          <div className="relative w-full h-full">
            <Image
              src="/img/head.jpg"
              alt="Contact"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              quality={90}
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-gray-50/20" />
          </div>

          {/* Decorative Element - Desktop Only */}
          <div className="hidden lg:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl" />
        </motion.div>
      </div>

      {/* Mobile Decorative Line */}
      <div className="lg:hidden absolute top-[40vh] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  );
};

export default ContactUI;
