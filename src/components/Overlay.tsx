"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // --- Section 1 (0% to 22% Scroll Progress) ---
  // Renders in center
  const s1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -60]);

  // --- Section 2 (28% to 52% Scroll Progress) ---
  // Renders left-aligned
  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.3, 0.45, 0.52], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.22, 0.3, 0.45, 0.52], [50, 0, 0, -50]);

  // --- Section 3 (58% to 82% Scroll Progress) ---
  // Renders right-aligned
  const s3Opacity = useTransform(scrollYProgress, [0.52, 0.6, 0.76, 0.83], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.52, 0.6, 0.76, 0.83], [50, 0, 0, -50]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">

      {/* Section 1: Hero Centered */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl space-y-4 md:space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          >
            Maninder Karda
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 tracking-wide uppercase drop-shadow-md py-2"
          >
            Data Analyst | 12+ Years of Experience
          </motion.h2>
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
