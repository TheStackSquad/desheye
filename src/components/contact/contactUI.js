//src/components/contact/contactUI.js
import React from "react";
import { Mail, Linkedin, X, MessageCircle } from "lucide-react";

// Placeholder for uiData. This should be a file you provide.
const uiData = {
  contact: {
    heading: "Let's Connect and Create",
    description:
      "Whether you have a project in mind or just want to say hi, feel free to reach out. I'm always open to new opportunities and collaborations.",
    email: "your.email@gmail.com",
    linkedin: "your_linkedin_profile",
    twitter: "your_x_profile",
    whatsapp: "+1234567890",
  },
};

const ContactUI = () => (
  <div
    className="relative w-full min-h-screen flex items-center justify-center text-white p-4 sm:p-8"
    style={{
      backgroundImage: "url('/img/contact.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-80 z-0"></div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto text-center bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 sm:p-16 border border-gray-700 shadow-2xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
        {uiData.contact.heading}
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        {uiData.contact.description}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6">
        {/* Email/Gmail */}
        <a
          href={`mailto:${uiData.contact.email}`}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="Email"
        >
          <Mail size={32} className="text-red-400" />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/in/${uiData.contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="LinkedIn"
        >
          <Linkedin size={32} className="text-blue-400" />
        </a>

        {/* X (Twitter) */}
        <a
          href={`https://x.com/${uiData.contact.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="X (Twitter)"
        >
          <X size={32} className="text-gray-300" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${uiData.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="WhatsApp"
        >
          <MessageCircle size={32} className="text-green-400" />
        </a>
      </div>
    </div>
  </div>
);

export default ContactUI;
