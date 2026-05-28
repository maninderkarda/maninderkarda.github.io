"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // --- Section 1 (Start) ---
  // Renders initially, disappears and stays hidden
  const s1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.20, 1], [1, 1, 0, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.15, 0.20, 1], [0, 0, -50, -50]);

  // --- Section 4 (End) ---
  // Reappears at the end, centered and larger
  const s4Opacity = useTransform(scrollYProgress, [0, 0.85, 0.90, 1], [0, 0, 1, 1]);
  const s4Y = useTransform(scrollYProgress, [0, 0.85, 0.90, 1], [50, 50, 0, 0]);

  // --- Section 2 (Middle First) ---
  // Renders left-aligned
  const s2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.30, 0.45, 0.50, 1], [0, 0, 1, 1, 0, 0]);
  const s2Y = useTransform(scrollYProgress, [0, 0.25, 0.30, 0.45, 0.50, 1], [50, 50, 0, 0, -50, -50]);

  // --- Section 3 (Middle Second) ---
  // Renders right-aligned
  const s3Opacity = useTransform(scrollYProgress, [0, 0.55, 0.60, 0.75, 0.80, 1], [0, 0, 1, 1, 0, 0]);
  const s3Y = useTransform(scrollYProgress, [0, 0.55, 0.60, 0.75, 0.80, 1], [50, 50, 0, 0, -50, -50]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">

      {/* Section 1: Hero Centered (Start) */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="absolute inset-0 flex flex-col items-center pt-[55vh] md:pt-[65vh] text-center px-4"
      >
        <div className="max-w-4xl space-y-3 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-4xl md:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            Maninder Karda
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-lg md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 tracking-wide uppercase drop-shadow-md py-2"
          >
            Data Analyst | 12+ Years of Experience
          </motion.h2>
        </div>
      </motion.div>

      {/* Section 4: Hero Centered (End) */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="max-w-5xl space-y-3 md:space-y-4">
          <h1
            className="text-5xl md:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            Maninder Karda
          </h1>
          <h2
            className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 tracking-wide uppercase drop-shadow-md py-2"
          >
            Data Analyst | 12+ Years of Experience
          </h2>
        </div>
      </motion.div>

      {/* Section 2: Business Goals Left-Aligned */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex items-center justify-start px-6 md:px-20 text-left"
      >
        <div className="max-w-xl md:max-w-2xl bg-zinc-950/40 border border-white/5 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Mission</span>
          <p className="text-3xl md:text-5xl font-extrabold leading-tight text-white mt-2">
            I empower decision makers to achieve their <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Business Goals</span>.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Data-Driven Decisions Right-Aligned */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex items-center justify-end px-6 md:px-20 text-right"
      >
        <div className="max-w-xl md:max-w-2xl bg-zinc-950/40 border border-white/5 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Vision</span>
          <p className="text-3xl md:text-5xl font-extrabold leading-tight text-white mt-2">
            Make <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-400">data-driven</span> Business Decisions.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
