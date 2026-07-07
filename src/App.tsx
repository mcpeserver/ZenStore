import { useState, useEffect } from "react";
import { Terminal, Shield, Sparkles, MessageSquare, Flame, Server, Smartphone, Users } from "lucide-react";
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
import { motion } from "motion/react";
import logoZenStore from "./assets/images/logo_zenstore.jpg";

export default function App() {
  const [devConfig, setDevConfig] = useState<DeveloperConfig | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string>("minecraft-premium");
  const [mascotError, setMascotError] = useState(false);

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

      </main>

      {/* Footer Column with Dev info */}
      <Footer devConfig={devConfig} />

      {/* Floating Buttons: WhatsApp & Scroll Up */}
      <WhatsAppAndScroll />

    </div>
  );
}
