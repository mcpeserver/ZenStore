import * as Icons from "lucide-react";
import { WHY_CHOOSE_US, WEBSITE_CONTENT } from "../data";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden border-t border-b border-blue-50">
      {/* Background visual accents */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-blue-100/20 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {WEBSITE_CONTENT.whyChooseUsSection.title.split(" Memilih ")[0]} <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Memilih {WEBSITE_CONTENT.whyChooseUsSection.title.split(" Memilih ")[1] || "ZenStore?"}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            {WEBSITE_CONTENT.whyChooseUsSection.subtitle}
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = (Icons as any)[item.iconName] || Icons.CheckCircle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-slate-50 border border-blue-100 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300 group flex items-start gap-4 relative"
              >
                {/* Glowing Ambient hover ring */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="h-11 w-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-base font-bold font-display text-slate-800 tracking-wide mb-1.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
