"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, FileDown } from "lucide-react";

interface ContactCard {
  title: string;
  value: string;
  subText: string;
  icon: any;
  link: string;
  download?: boolean;
  color: string;
  glow: string;
}

export default function Contact() {
  const contacts: ContactCard[] = [
    {
      title: "Address",
      value: "Punjab, India",
      subText: "Open in Maps",
      icon: MapPin,
      link: "https://maps.google.com/?q=Punjab,+India",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
      glow: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
    },
    {
      title: "Contact Number",
      value: "+91 9592850384",
      subText: "Call directly",
      icon: Phone,
      link: "tel:+919592850384",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      glow: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
    },
    {
      title: "Email Address",
      value: "maninder.karda@gmail.com",
      subText: "Send email",
      icon: Mail,
      link: "mailto:maninder.karda@gmail.com",
      color: "text-purple-400 border-purple-500/20 bg-purple-500/10",
      glow: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
    },
    {
      title: "Download Resume",
      value: "Resume.pdf",
      subText: "12 YOE PDF",
      icon: FileDown,
      link: "/resume/ManinderKarda_DataAnalyst_12 YOE.pdf",
      download: true,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/10",
      glow: "hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]"
    }
  ];

  return (
    <section id="contact" className="relative py-28 px-6 md:px-24 bg-zinc-900/50 overflow-hidden border-t border-white/5">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

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
            Contact Me
          </motion.h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.title}
                href={contact.link}
                download={contact.download ? "ManinderKarda_DataAnalyst_12_YOE.pdf" : undefined}
                target={!contact.download ? "_blank" : undefined}
                rel={!contact.download ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel p-6 rounded-3xl flex flex-col justify-between items-center text-center transition-all duration-300 cursor-pointer ${contact.glow}`}
              >
                {/* Glowing Icon Wrapper */}
                <div className={`p-4 rounded-2xl bg-zinc-900 border flex items-center justify-center mb-6 ${contact.color.split(" ")[1]}`}>
                  <Icon className={`w-6 h-6 ${contact.color.split(" ")[0]}`} />
                </div>

                {/* Card Title */}
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">
                  {contact.title}
                </span>

                {/* Primary Content (Value) */}
                <h3 className="text-sm md:text-base font-extrabold text-white mb-4 break-all max-w-full">
                  {contact.value}
                </h3>

                {/* Subtext CTA */}
                <span className={`text-xs font-semibold underline decoration-2 underline-offset-4 cursor-pointer hover:brightness-125 transition-all ${contact.color.split(" ")[0]}`}>
                  {contact.subText}
                </span>

              </motion.a>
            );
          })}
        </div>

        {/* Footer Signature */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-xs text-zinc-600 font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} Maninder Karda
          </p>
        </div>

      </div>
    </section>
  );
}
