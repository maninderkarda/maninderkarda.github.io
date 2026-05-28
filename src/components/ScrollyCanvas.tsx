"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const totalFrames = 75;

  // Monitor scroll progress of the entire 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fade out scroll indicator as scroll starts
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const indicatorScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.05], [0, -20]);

  // Canvas cover-resize and redraw logic
  const renderCanvas = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const container = stickyRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    // Set high-DPI sizing based on sticky container to avoid mobile URL bar resize jumps
    const pixelRatio = window.devicePixelRatio || 1;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Only resize and reset scale if dimensions have actually changed
    if (canvas.width !== Math.floor(width * pixelRatio) || canvas.height !== Math.floor(height * pixelRatio)) {
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scaling must only happen when the canvas is resized (which resets the context)
      // Otherwise on high-DPI screens, it scales exponentially every frame!
      ctx.scale(pixelRatio, pixelRatio);
    }

    // object-fit: cover logic
    const canvasAspect = width / height;
    const imgAspect = img.width / img.height;

    let drawWidth = width;
    let drawHeight = height;
    let drawX = 0;
    let drawY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = width / imgAspect;
      drawY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgAspect;
      drawX = (width - drawWidth) / 2;
    }

    // Clear previous frame
    ctx.clearRect(0, 0, width, height);

    // Disable image smoothing for sharper rendering if needed, or keep it enabled
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Preload all 75 PNG images sequentially/concurrently
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      const promises = Array.from({ length: totalFrames }).map((_, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const frameNum = index.toString().padStart(2, "0");
          img.src = `/sequence/frame_${frameNum}_delay-0.067s.png`;

          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
            resolve(); // Resolve anyway to not break loader
          };
          imagesRef.current[index] = img;
        });
      });

      await Promise.all(promises);
      setLoading(false);
    };

    preloadImages();
  }, []);

  // Initial draw and window resizing listener
  useEffect(() => {
    if (loading) return;

    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      // Debounce resize to prevent stuttering on mobile orientation change
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const currentScroll = scrollYProgress.get();
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.floor(currentScroll * totalFrames)
        );
        renderCanvas(frameIndex);
      }, 100);
    };

    // Draw frame 0 immediately
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [loading, renderCanvas, scrollYProgress]);

  // Hook scroll updates to redrawing specific canvas frames
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (loading) return;

    const frameIndex = Math.min(
      totalFrames - 1,
      Math.floor(latest * totalFrames)
    );

    requestAnimationFrame(() => renderCanvas(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-zinc-950 w-full" id="canvas-scroll-section">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950">
          <div className="text-center space-y-4 max-w-xs w-full px-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white tracking-widest uppercase font-sans"
            >
              Loading Experience
            </motion.h2>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                style={{ width: `${loadProgress}%` }}
                layoutId="loaderProgress"
              />
            </div>
            <p className="text-zinc-500 font-mono text-xs">{loadProgress}% loaded</p>
          </div>
        </div>
      )}

      {/* Sticky Scroll Container */}
      <div ref={stickyRef} className="sticky top-0 h-[100svh] w-full overflow-hidden bg-zinc-950">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Parallax Overlay Text Sections */}
        {!loading && <Overlay scrollYProgress={scrollYProgress} />}

        {/* Scroll down mouse/bounce animation */}
        {!loading && (
          <motion.div
            style={{ opacity: indicatorOpacity, scale: indicatorScale, y: indicatorY }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer pointer-events-none"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                Scroll to Explore
              </span>
              <div className="w-6 h-10 border-2 border-zinc-500/50 rounded-full flex justify-center p-1.5">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-2 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
