//src/components/experience/experienceUI.js

"use client";

import { motion } from "framer-motion";
import { uiData } from "@/data/dataUI";
import { ArrowUpRight } from "lucide-react";

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

// ── Bullet point ─────────────────────────────────────────────────────────────
const Bullet = ({ text }) => (
  <li className="flex items-start gap-2.5 text-sm text-gray-500 leading-relaxed">
    <span className="mt-2 w-1 h-1 rounded-full bg-[#7B5CF0] flex-shrink-0" />
    {text}
  </li>
);

// ── Single experience card ────────────────────────────────────────────────────
const ExperienceCard = ({ item, index }) => {
  const isFirst = index === 0;

  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex gap-6 md:gap-10 ${index !== 0 ? "pt-8" : ""}`}
    >
      {/* Timeline spine + dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.1 }}
          className={`w-3 h-3 rounded-full border-2 mt-1.5 flex-shrink-0 ${
            isFirst
              ? "bg-[#FF4D00] border-[#FF4D00]"
              : "bg-white border-[#7B5CF0]"
          }`}
        />
        {/* Connecting line drawn by parent */}
      </div>

      {/* Card */}
      <div className="flex-1 group">
        <div
          className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100
            hover:border-[#7B5CF0]/30 hover:shadow-xl hover:shadow-violet-100/50
            transition-all duration-400"
        >
          {/* Header row */}
          <div
            className="flex flex-col sm:flex-row sm:items-start
            sm:justify-between gap-3 mb-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                {isFirst && (
                  <span
                    className="text-[10px] font-bold font-cinzel tracking-widest
                    uppercase px-2.5 py-1 rounded-full bg-[#FF4D00]/10 text-[#FF4D00]"
                  >
                    Current
                  </span>
                )}
                <span
                  className="text-[10px] font-semibold font-cinzel tracking-widest
                  uppercase px-2.5 py-1 rounded-full bg-[#7B5CF0]/10 text-[#7B5CF0]"
                >
                  {item.type}
                </span>
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-gray-900
                font-cinzel tracking-tight group-hover:text-[#7B5CF0]
                transition-colors duration-300"
              >
                {item.role}
              </h3>
              <p className="text-sm text-gray-400 mt-0.5 font-medium">
                {item.company}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className="text-xs text-gray-400 font-mono bg-gray-50
                border border-gray-100 px-3 py-1.5 rounded-full whitespace-nowrap"
              >
                {item.duration}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100
                    flex items-center justify-center hover:bg-[#7B5CF0]
                    hover:border-[#7B5CF0] hover:text-white transition-all duration-200"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Bullets */}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="space-y-2 mt-4 pt-4 border-t border-gray-50">
              {item.bullets.map((b, i) => (
                <Bullet key={i} text={b} />
              ))}
            </ul>
          )}

          {/* Tech tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-50">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold font-cinzel tracking-wide
                    uppercase px-2.5 py-1 rounded-full bg-gray-50 text-gray-400
                    border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ── Education card ────────────────────────────────────────────────────────────
const EducationCard = ({ item }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-2xl p-6 md:p-7
    border border-gray-100 hover:border-[#FF4D00]/20 hover:shadow-lg
    transition-all duration-300"
  >
    <div
      className="flex flex-col sm:flex-row sm:items-center
      sm:justify-between gap-3 mb-3"
    >
      <div>
        <h3 className="text-lg font-bold text-gray-900 font-cinzel tracking-tight">
          {item.institution}
        </h3>
        <p className="text-sm text-gray-400 mt-0.5">{item.credential}</p>
      </div>
      <span
        className="text-xs text-gray-400 font-mono bg-gray-50
        border border-gray-100 px-3 py-1.5 rounded-full whitespace-nowrap
        self-start sm:self-center"
      >
        {item.duration}
      </span>
    </div>
    {item.bullets && (
      <ul className="space-y-2 pt-3 border-t border-gray-50">
        {item.bullets.map((b, i) => (
          <Bullet key={i} text={b} />
        ))}
      </ul>
    )}
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
export default function ExperienceUI() {
  const { experience } = uiData;

  return (
    <section className="max-w-3xl mx-auto px-5 py-12 md:py-16">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p
          className="text-xs font-cinzel tracking-widest uppercase
          text-[#FF4D00] mb-3 flex items-center gap-2"
        >
          <span className="w-5 h-px bg-[#FF4D00]" />
          Career History
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900
          font-cinzel tracking-tight leading-tight mb-4"
        >
          {experience.heading}
        </h1>
        <p className="text-base text-gray-400 max-w-lg leading-relaxed">
          Senior Full Stack Engineer specialising in high-concurrency systems,
          scalable architecture, and intuitive interfaces.
        </p>
      </motion.div>

      {/* Experience timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-16"
      >
        <h2
          className="text-xs font-cinzel tracking-widest uppercase
          text-gray-300 mb-8 flex items-center gap-3"
        >
          <span>Professional History</span>
          <span className="flex-1 h-px bg-gray-100" />
        </h2>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical spine (desktop only) */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block absolute left-3 top-2 bottom-0
              w-px bg-gradient-to-b from-[#FF4D00] via-[#7B5CF0] to-transparent
              origin-top"
          />

          <div className="space-y-0">
            {experience.history.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education */}
      {experience.education && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            className="text-xs font-cinzel tracking-widest uppercase
            text-gray-300 mb-8 flex items-center gap-3"
          >
            <span>Academic Background</span>
            <span className="flex-1 h-px bg-gray-100" />
          </h2>
          <div className="space-y-4">
            {experience.education.map((item, i) => (
              <EducationCard key={i} item={item} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}