import React, { useState } from "react";
import { Menu, X, MessageSquare, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DeveloperConfig } from "../data";
import logoZenStore from "../assets/images/logo_zenstore.jpg";

interface NavbarProps {
  devConfig: DeveloperConfig | null;
}

export default function Navbar({ devConfig }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDevDropdown, setShowDevDropdown] = useState(false);

  const navLinks = [
    { name: "Harga Paket", href: "#pricing" },
    { name: "Fitur", href: "#features" },
    { name: "Kenapa Kami", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 opacity-20 blur group-hover:opacity-40 transition duration-300"></div>
              <div className="relative h-9 w-9 rounded-lg bg-white border border-blue-200 overflow-hidden flex items-center justify-center">
                <img 
                  src={`${logoZenStore}?v=1783331470098`} 
                  alt="ZenStore Mascot" 
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg font-extrabold tracking-wider font-display bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent leading-none">
                ZENSTORE
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-600 hover:text-blue-600 font-medium text-sm tracking-wide transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/628131469731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all cursor-pointer shadow-md shadow-blue-200 gap-1.5"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Hubungi Admin</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-blue-100 bg-white shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3">
                <a
                  href="https://wa.me/628131469731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  Hubungi Admin
                </a>
              </div>

              {devConfig && (
                <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <span>Developed by</span>
                  <a 
                    href={devConfig.website.portfolio || "https://sfl.gl/x2ic"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-500 hover:text-blue-600 font-bold transition-colors underline decoration-dotted"
                  >
                    {devConfig.name}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
