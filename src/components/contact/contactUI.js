//src/components/contact/contactUI.js
import React from "react";
import { Mail, Linkedin, X, MessageCircle, Sparkles } from "lucide-react";

// Placeholder for uiData. This should be a file you provide.
const uiData = {
  contact: {
    heading: "Let's Connect and Create",
    description:
      "Whether you have a project in mind or just want to say hi, feel free to reach out. I'm always open to new opportunities and collaborations.",
    email: "thestaccsessions@gmail.com",
    linkedin: "https://www.linkedin.com/in/adesheye/",
    twitter: "@TheStacSessions",
    whatsapp: "+2348167118379",
  },
};

const ContactUI = () => (
  <div className="relative w-full min-h-screen flex items-center justify-center text-white p-4 sm:p-8 overflow-hidden">
    {/* Enhanced Background Image with Parallax Effect */}
    <div
      className="absolute inset-0 scale-110 transform"
      style={{
        backgroundImage: "url('/img/head.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "brightness(0.4) contrast(1.2) saturate(0.8)",
      }}
    />

    {/* Sophisticated Multi-Layer Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-black/80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent" />

    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/15 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-blue-600/5 rounded-full blur-3xl animate-pulse delay-2000" />
    </div>

    {/* Enhanced Content Container */}
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Glassmorphism Card with Enhanced Backdrop */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-16 border border-white/10 shadow-2xl">
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl" />

        {/* Subtle Border Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-xl opacity-50" />

        {/* Content */}
        <div className="relative z-10">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-400/80 animate-pulse" />
              <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-lg" />
            </div>
          </div>

          {/* Enhanced Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              {uiData.contact.heading}
            </span>
          </h2>

          {/* Enhanced Description */}
          <div className="relative mb-16">
            <p className="text-lg md:text-xl text-gray-200/90 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              {uiData.contact.description}
            </p>
          </div>

          {/* Enhanced Social Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-md mx-auto">
            {/* Email/Gmail */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-red-500/30 to-pink-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <a
                href={`mailto:${uiData.contact.email}`}
                className="relative block p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-red-400/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-red-500/25"
                aria-label="Email"
              >
                <Mail
                  size={32}
                  className="mx-auto text-red-400 group-hover:text-red-300 transition-colors duration-300"
                />
                <div className="mt-2 text-xs text-gray-300/80 group-hover:text-white/90 transition-colors duration-300">
                  Email
                </div>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <a
                href={`https://www.linkedin.com/in/${uiData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/25"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={32}
                  className="mx-auto text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                />
                <div className="mt-2 text-xs text-gray-300/80 group-hover:text-white/90 transition-colors duration-300">
                  LinkedIn
                </div>
              </a>
            </div>

            {/* X (Twitter) */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <a
                href={`https://x.com/${uiData.contact.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-gray-400/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-gray-500/25"
                aria-label="X (Twitter)"
              >
                <X
                  size={32}
                  className="mx-auto text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                />
                <div className="mt-2 text-xs text-gray-300/80 group-hover:text-white/90 transition-colors duration-300">
                  Twitter
                </div>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <a
                href={`https://wa.me/${uiData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-green-500/25"
                aria-label="WhatsApp"
              >
                <MessageCircle
                  size={32}
                  className="mx-auto text-green-400 group-hover:text-green-300 transition-colors duration-300"
                />
                <div className="mt-2 text-xs text-gray-300/80 group-hover:text-white/90 transition-colors duration-300">
                  WhatsApp
                </div>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <p className="text-sm text-gray-400/80 font-light">
              Let&apos;s build something amazing together
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Subtle Animation Elements */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30">
      <div className="w-1 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
    </div>
  </div>
);

export default ContactUI;
