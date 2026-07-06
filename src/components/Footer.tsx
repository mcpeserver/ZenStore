import React from "react";
import { Shield, ExternalLink, Terminal, MessageSquare, Heart } from "lucide-react";
import { DeveloperConfig } from "../data";
import logoZenStore from "../assets/images/logo_zenstore.jpg";

interface FooterProps {
  devConfig: DeveloperConfig | null;
}

export default function Footer({ devConfig }: FooterProps) {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Produk", href: "#products" },
    { name: "Harga Paket", href: "#pricing" },
    { name: "Fitur Server", href: "#features" },
    { name: "Kenapa Kami", href: "#why-us" },
    { name: "Pertanyaan Umum", href: "#faq" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-slate-50 border-t border-blue-100 pt-16 pb-8 relative overflow-hidden font-sans">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-blue-100">
          
          {/* ZenStore Info (4 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-white border border-blue-200 overflow-hidden flex items-center justify-center shadow-sm">
                <img 
                  src={logoZenStore} 
                  alt="ZenStore Mascot" 
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-extrabold tracking-wider font-display bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent leading-none">
                  ZENSTORE
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              ZenStore menyediakan layanan Minecraft Server Hosting serta Panel Bot WhatsApp dengan harga terjangkau, performa stabil, dan aktivasi cepat. Kami berdedikasi memberikan kualitas premium tanpa membebani dompet Anda.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Primary Node: Jakarta Core, ID</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-extrabold font-display text-slate-800 uppercase tracking-wider">
              Menu Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Column (4 Cols) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-sm font-extrabold font-display text-blue-600 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span>Developer & Community</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Layanan digital ini dikembangkan dan dipelihara oleh partner rekayasa perangkat lunak kami. Hubungi pengembang untuk integrasi kustom dan komunitas.
            </p>
            
            {/* Developer Contact Links */}
            <ul className="space-y-2.5 text-xs text-slate-700 font-mono">
              <li>
                <span className="text-slate-400">Developer:</span>{" "}
                <span className="text-slate-800 font-bold">{devConfig?.name || "Ran Dev"}</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${devConfig?.contact.phone || "0895602592430"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Dev: +{devConfig?.contact.phone || "0895602592430"}</span>
                </a>
              </li>
              <li>
                <a
                  href={devConfig?.website.portfolio || "https://sfl.gl/x2ic"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Website Server Lain / Portfolio</span>
                </a>
              </li>
              <li>
                <a
                  href={devConfig?.community.discord || "https://discord.gg/9KUN2byKRM"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Discord Komunitas Developer</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-mono text-slate-600 space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} <span className="text-slate-800 font-bold">ZenStore</span>. Digital Hosting & Panel Solution. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            <span>by</span>
            <a 
              href={devConfig?.website.portfolio || "https://sfl.gl/x2ic"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-500 hover:text-blue-600 font-semibold transition-colors"
            >
              {devConfig?.name || "Ran Dev"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
