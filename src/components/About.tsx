"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Briefcase, Globe, Award, BookOpen, Wrench } from "lucide-react";

export default function About() {
  const details = [
    { label: "Profile", value: "Data Science & Analytics", icon: User, color: "text-cyan-400 border-cyan-500/20" },
    { label: "Experience", value: "12 Years 8 Months", icon: Briefcase, color: "text-emerald-400 border-emerald-500/20" },
    { label: "Domain", value: "Retail, Manufacturing, Ecommerce & FMCG", icon: Globe, color: "text-purple-400 border-purple-500/20" },
    { label: "Education", value: "MBA", icon: BookOpen, color: "text-indigo-400 border-indigo-500/20" },
    { label: "Language", value: "English, Hindi, Punjabi", icon: Award, color: "text-pink-400 border-pink-500/20" },
  ];

  const tools = ["Power BI", "Looker", "SQL", "Python", "Excel"];

  return (
    <section id="about" className="relative py-28 px-6 md:px-24 bg-zinc-950/90 overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 flex items-center space-x-4">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white"
          >
            About
          </motion.h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Profile Picture with glowing border */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Pulsing Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              {/* Core Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <Image 
                  src="/profilepic/profile.png" 
                  alt="Maninder Karda" 
                  fill
                  sizes="(max-w-768px) 288px, 320px"
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Narrative and details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Narrative text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-wide">
                Senior Data Analyst & Power BI Developer
              </h3>
              <p className="text-zinc-300 font-medium leading-relaxed text-base md:text-lg">
                I am a Senior Data Analyst and Power BI Developer. With over 12 years of experience in Data Analytics and Business Intelligence, I help businesses turn raw data into growth opportunities.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                My expertise lies in Power BI dashboard development, advanced DAX, data modelling, SQL, and business reporting, with a strong focus on solving real-world business problems through data-driven insights.
              </p>
            </motion.div>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-panel p-5 rounded-2xl flex items-start space-x-4 border-l-2 border-l-cyan-500/50 hover:bg-zinc-900/60 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${detail.color.split(" ")[0]}`} />
                    </div>
                    <div>
                      <h4 className="text-zinc-500 font-bold uppercase tracking-wider text-xs">{detail.label}</h4>
                      <p className="text-zinc-200 text-sm font-semibold mt-1 leading-snug">{detail.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tools list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-6 rounded-2xl space-y-4"
            >
              <div className="flex items-center space-x-3 text-cyan-400">
                <Wrench className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Core Tools & Stack</h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-xs md:text-sm font-semibold bg-zinc-900 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
