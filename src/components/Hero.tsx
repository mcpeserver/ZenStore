import { Shield, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-36 pb-20 md:pt-44 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 grid-pattern-fine">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px]"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-500/5 blur-[140px]"></div>
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-[130px]"></div>

      {/* Grid Overlay with Radial Gradient Mask */}
      <div className="absolute inset-0 grid-pattern opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-slate-50"></div>

      {/* Floating Sparkles & Particles */}
      <div className="absolute top-1/4 right-1/3 animate-particle opacity-35 text-sky-400">
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-particle opacity-20 text-blue-400" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-5 w-5" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        <div className="flex flex-col items-center justify-center">
          
          {/* Glowing Brand Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Shield className="h-3.5 w-3.5 text-blue-500 fill-blue-500/10" />
            <span>STABLE & HIGH PERFORMANCES HOSTING</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-slate-900 mb-6 leading-none text-center"
          >
            Minecraft Hosting & <br />
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Panel Bot Terbaik
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-8 mx-auto text-center"
          >
            Hosting cepat, stabil, anti lag, dan panel bot WhatsApp berkualitas dengan harga mulai dari <span className="text-blue-600 font-bold">Rp1.000</span>. Aktivasi instan, lokasi Indonesia, dan garansi uptime tertinggi.
          </motion.p>

          {/* Call To Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScroll("#products")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Lihat Paket
            </button>
            
            <a
              href="https://wa.me/628131469731"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-blue-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wider uppercase hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              <MessageSquare className="h-4 w-4 text-blue-500" />
              Hubungi Admin
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
