"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Layers, ArrowUpRight, TrendingUp, ShieldAlert, Award } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  icon: any;
  tech: string[];
  link: string;
  color: string;
  metric: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Sales & Revenue Operations Dashboard",
      category: "Business Intelligence",
      description: "Developed 15+ advanced Power BI dashboards for stock, sales, production, accounts, and purchase metrics. Reduced weekly executive reporting time by 50%.",
      icon: BarChart3,
      tech: ["Power BI", "DAX", "SQL Server"],
      link: "#",
      color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/20",
      metric: "50% Time Saved"
    },
    {
      title: "Supply Chain & Unsold Stock SOP Engine",
      category: "Data Science & Auditing",
      description: "Designed a PostgreSQL discrepancy discovery workflow, uncovering 2.8 crores in lost/unsold stock. Structured company-wide inventory tracking SOPs.",
      icon: ShieldAlert,
      tech: ["Python", "PostgreSQL", "Pandas", "SOPs"],
      link: "#",
      color: "from-red-500/20 to-orange-500/20 text-red-400 border-red-500/20",
      metric: "2.8Cr Saved"
    },
    {
      title: "Hero Cycles Purchase Excellence Suite",
      category: "Operations Analytics",
      description: "Engineered critical BI reports optimizing production and materials procurement. Supported SAP-HANA data migration with 100% data integrity.",
      icon: TrendingUp,
      tech: ["Power BI", "SAP-HANA", "Data Migration"],
      link: "#",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20",
      metric: "25% Process Efficiency"
    },
    {
      title: "JP Morgan Client Account Service Insights",
      category: "Client Analytics",
      description: "Built client service level agreement dashboards for JP Morgan (CAS), exceeding turnaround goals and earning Mphasis' Summit Individual Award.",
      icon: Award,
      tech: ["Power BI", "SQL Server", "Excel Analytics"],
      link: "#",
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/20",
      metric: "50% Reporting Turnaround"
    },
    {
      title: "Logistics Delivery & Adoptions Engine",
      category: "Supply Chain Optimization",
      description: "Optimized sheet dispatch routines to raise transit accuracy by 20%. Commenced corporate transition to Power BI workflows, improving report agility by 40%.",
      icon: Layers,
      tech: ["Google Sheets API", "App Script", "Power BI"],
      link: "#",
      color: "from-indigo-500/20 to-cyan-500/20 text-indigo-400 border-indigo-500/20",
      metric: "+20% Delivery Accuracy"
    },
    {
      title: "Oppo Goal Scheme Management App",
      category: "Retail Analytics",
      description: "Designed and launched the Oppo Goal application to enhance distributor scheme transparency. Boosted channel sales volumes by 15% across PB region.",
      icon: Database,
      tech: ["MIS Systems", "VBA & SQL", "Goal App", "Advanced Excel"],
      link: "#",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/20",
      metric: "15% Retailer Growth"
    }
  ];

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
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group glass-panel rounded-3xl p-8 flex flex-col justify-between glass-panel-hover"
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

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-5">
                    <div className={`p-3 rounded-2xl bg-zinc-900 border border-white/5 ${project.color.split(" ")[2]} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer: Tech Stack & Action Link */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
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
                  
                  <a
                    href={project.link}
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-center flex-shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
