'use client';
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex flex-col antialiased">
      {/* Floating Glassmorphic Navigation */}
      <Navbar />

      {/* Hero Canvas Scrollytelling (500vh container) */}
      <ScrollyCanvas />

      {/* Sub-Scroll Sections */}
      <div className="relative z-25 bg-zinc-950">
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
