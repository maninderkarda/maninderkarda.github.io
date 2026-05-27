"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-24 bg-zinc-950/90 overflow-hidden border-t border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

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
            Projects
          </motion.h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            
            const cardContent = (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group glass-panel rounded-3xl p-8 flex flex-col justify-between glass-panel-hover h-full cursor-pointer"
              >
                <div>
                  {/* Card Header: Category & Metric */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${project.color.split(" ")[2]} bg-zinc-900`}>
                      {project.metric}
                    </span>
                  </div>

                  {/* Thumbnail / Icon */}
                  {project.powerBiLink ? (
                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative border border-white/5 bg-zinc-900/50">
                      {/* Scale down iframe to act as thumbnail */}
                      <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <iframe
                          title={project.title}
                          width="100%"
                          height="100%"
                          src={project.powerBiLink}
                          frameBorder="0"
                          allowFullScreen={true}
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-4 mb-5">
                      <div className={`p-3 rounded-2xl bg-zinc-900 border border-white/5 ${project.color.split(" ")[2]} flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer: Tech Stack & Action Link */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-semibold bg-zinc-900 text-zinc-400 rounded-lg border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" && (
                    <div className="p-2 rounded-xl bg-zinc-900 group-hover:bg-zinc-800 text-zinc-400 group-hover:text-white border border-white/5 group-hover:border-white/10 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return project.link !== "#" ? (
              <Link href={project.link} key={project.id} target="_blank">
                {cardContent}
              </Link>
            ) : (
              <div key={project.id} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
