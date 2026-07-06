import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppAndScroll() {
  const [showScroll, setShowScroll] = useState(false);
  const [hoveredWA, setHoveredWA] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 select-none font-sans">
      
      {/* Floating WhatsApp Admin Chat Trigger */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHoveredWA(true)}
        onMouseLeave={() => setHoveredWA(false)}
      >
        <AnimatePresence>
          {hoveredWA && (
            <motion.a
              href="https://wa.me/628131469731"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mr-3 px-4 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-bold text-emerald-400 whitespace-nowrap shadow-2xl tracking-wider uppercase flex items-center gap-1.5 glow-emerald"
            >
              <Zap className="h-3 w-3 text-emerald-400 animate-pulse" />
              Tanya Admin ZenStore
            </motion.a>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/628131469731"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group h-14 w-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:scale-110 hover:rotate-6 active:scale-90 transition-all duration-300 cursor-pointer"
        >
          {/* Glowing Ring Border */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-20 blur group-hover:opacity-40 animate-pulse"></span>
          <MessageSquare className="h-6 w-6 stroke-[2.5px]" />
        </a>
      </div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="group h-11 w-11 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-white flex items-center justify-center shadow-2xl hover:scale-115 active:scale-90 transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="h-4.5 w-4.5 stroke-[2.5px] group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
