import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS, WEBSITE_CONTENT } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-b border-blue-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 rounded-full bg-blue-100/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {WEBSITE_CONTENT.faqSection.title.split(" Sering ")[0]} <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Sering {WEBSITE_CONTENT.faqSection.title.split(" Sering ")[1] || "Diajukan"}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            {WEBSITE_CONTENT.faqSection.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-500/40 shadow-md shadow-blue-100/50"
                    : "bg-white border-blue-100 hover:border-blue-300"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className={`h-5 w-5 flex-shrink-0 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 transition-all duration-300 ${isOpen ? 'rotate-180 border-blue-100 text-blue-600 bg-blue-50' : ''}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Expanded Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-50 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
