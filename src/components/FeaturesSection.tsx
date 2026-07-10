import * as Icons from "lucide-react";
import { FEATURES, WEBSITE_CONTENT } from "../data";
import { motion } from "motion/react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-slate-50 border-t border-b border-blue-100 grid-pattern-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {WEBSITE_CONTENT.featuresSection.title.split(" Server ")[0]} <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Server {WEBSITE_CONTENT.featuresSection.title.split(" Server ")[1] || "Hosting"}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            {WEBSITE_CONTENT.featuresSection.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feat, index) => {
            // Resolve Lucide Icon dynamically
            const IconComponent = (Icons as any)[feat.iconName] || Icons.HelpCircle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 rounded-2xl border border-blue-100 bg-white hover:bg-blue-50/10 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Neon Highlight on Top of Card */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent transition-all group-hover:via-blue-500"></div>

                {/* Icon Container with Custom Glowing Colors */}
                <div className="mb-5 relative inline-block">
                  <div className="absolute inset-0 rounded-xl bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="h-12 w-12 rounded-xl bg-slate-50 border border-blue-100 flex items-center justify-center text-slate-600 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className={`h-6 w-6 ${feat.color}`} />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-base font-extrabold font-display text-slate-800 tracking-wide mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
