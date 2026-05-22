"use client";
import { motion as m } from "framer-motion";
import { Download, Calendar, MapPin, Award, ShieldCheck } from "lucide-react";

interface Job {
  company: string;
  location: string;
  role: string;
  timeline: string;
  color: string;
  glow: string;
  bullets: string[];
}

export default function Resume() {
  const jobs: Job[] = [
    {
      company: "Supple Tek Industries Pvt. Ltd.",
      location: "Amritsar, PB, IN",
      role: "Manager, IT Department",
      timeline: "Oct 2022 - Present",
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      glow: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      bullets: [
        "Developed 15+ advanced Power BI reports and dashboards for sales, production, stocks, accounts, and purchase analysis, reducing reporting time by 50%.",
        "Led initiatives to data accuracy and mitigate errors in company processes, resulting in approximately 50 lakhs annually savings.",
        "Discovered unsold stock discrepancies, leading to the recovery of stock worth 2.8 crores and implementation of stock management SOPs.",
        "Utilized Python and PostgreSQL for API data retrieval, processing, and report generation, improving report generation efficiency by 40%."
      ]
    },
    {
      company: "Hero Cycles Ltd.",
      location: "Ludhiana, PB, IN",
      role: "Assistant Manager",
      timeline: "Dec 2020 - Sep 2022",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      glow: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      bullets: [
        "Enhanced multiple Power BI reports, improving decision-making processes for purchase and production planning by 25%.",
        "Actively participated in data migration for the Implementation of SAP-HANA, ensuring 100% data integrity.",
        "Identified cost-saving opportunities and contributed to business excellence initiatives, resulting in saved 45 lacs per year for the company & certification of appreciation from the CEO."
      ]
    },
    {
      company: "Mphasis",
      location: "Bangalore, KA, IN",
      role: "Data Analyst",
      timeline: "Jan 2020 - Oct 2020",
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      glow: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      bullets: [
        "Developed Power BI reports and dashboards for Client Account Service (CAS) for JP Morgan, delivering actionable insights that met tight deadlines and reduced reporting turnaround by 50%.",
        "Provided technical expertise in Excel and SQL, leading to increased productivity by 35%.",
        "Received The Summit Individual award for outstanding performance."
      ]
    },
    {
      company: "Eastern Mattress Pvt Ltd.",
      location: "Bangalore, KA, IN",
      role: "Senior MIS Analyst",
      timeline: "Aug 2019 - Oct 2019",
      color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
      glow: "group-hover:border-pink-500/40 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      bullets: [
        "Enhanced delivery process by optimizing google sheets, improving product delivery accuracy by 20%.",
        "Initiated Power BI adoption within the company, laying the groundwork for future analytics projects, accelerating reporting efficiency by 40%."
      ]
    },
    {
      company: "Oppo Mobiles Pvt. Ltd.",
      location: "Mohali, PB, IN",
      role: "MIS Analyst",
      timeline: "Jun 2016 - Jun 2019",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      glow: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      bullets: [
        "Developed and maintained MIS reports for sales, stock, and distributor schemes, increasing reporting accuracy by 30%.",
        "Designed and implemented the Oppo Goal App for enhancing retailer scheme transparency and boosting sales by 15%.",
        "Analyzed finance data, identified discrepancies, and implemented validation processes, resulting in cost savings of 2 Lakhs per month."
      ]
    },
    {
      company: "Connect Broadband",
      location: "Ludhiana, PB, IN",
      role: "MIS Executive",
      timeline: "Aug 2013 - May 2016",
      color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
      glow: "group-hover:border-indigo-500/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      bullets: [
        "Built daily and monthly MIS reports, enabling a 20% improvement in customer retention strategy effectiveness.",
        "Developed and implemented the 'Win Back' process, reducing customer retention process by 30%."
      ]
    }
  ];

  return (
    <section id="resume" className="relative py-28 px-6 md:px-24 bg-zinc-900/50 overflow-hidden border-t border-white/5">
      {/* Background neon glows */}
      <div className="absolute top-1/3 right-1/12 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/12 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 flex items-center space-x-4">
          <m.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white"
          >
            Experience
          </m.h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-emerald-500 to-transparent" />
        </div>

        {/* 2-Column Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {jobs.map((job, idx) => (
            <m.div
              key={job.company + job.timeline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group glass-panel rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${job.glow}`}
            >
              <div>
                {/* Timeline and Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold border tracking-wider flex items-center gap-1.5 ${job.color}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    {job.timeline}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {job.location}
                  </div>
                </div>

                {/* Role and Company */}
                <div className="space-y-1 mb-6">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                    {job.role}
                  </h3>
                  <p className="text-sm font-bold text-zinc-400 tracking-wide uppercase">
                    {job.company}
                  </p>
                </div>

                {/* Achievements list */}
                <ul className="space-y-3.5">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-zinc-400 text-xs md:text-sm leading-relaxed">
                      <span className="mr-2.5 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>

        {/* Download Resume Centered Button */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="/resume/ManinderKarda_DataAnalyst_12 YOE.pdf"
            download="ManinderKarda_DataAnalyst_12_YOE.pdf"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 font-bold rounded-2xl shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            {/* Hover visual flash */}
            <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </m.div>

      </div>
    </section>
  );
}
