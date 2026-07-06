import { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Zap, Cpu, Database, Server, Smartphone, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard as ProductType } from "../data";

interface ProductCardProps {
  key?: string;
  product: ProductType;
  onSelect: (productId: string) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  // Map product type to localized subtitle and icons
  const getBannerDetails = () => {
    switch (product.type) {
      case "basic":
        return {
          badge: "POPULAR & AFFORDABLE",
          icon: <Server className="h-10 w-10 text-sky-400" />,
          glowClass: "glow-blue",
          accentColor: "sky",
          imageSrc: "/src/assets/images/minecraft_basic_portrait_1783332535855.jpg", // high fidelity generated portrait image
        };
      case "premium":
        return {
          badge: "RECOMMENDED FOR COMMUNITIES",
          icon: <Cpu className="h-10 w-10 text-blue-400" />,
          glowClass: "glow-blue",
          accentColor: "blue",
          imageSrc: "/src/assets/images/minecraft_premium_portrait_1783332553071.jpg",
        };
      case "bot":
        return {
          badge: "WHATSAPP AUTOMATION",
          icon: <Smartphone className="h-10 w-10 text-indigo-400" />,
          glowClass: "glow-blue",
          accentColor: "indigo",
          imageSrc: "/src/assets/images/bot_panel_portrait_1783332565084.jpg",
        };
    }
  };

  const details = getBannerDetails();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-3xl overflow-hidden border bg-gradient-to-b ${product.colorTheme.gradient} ${product.colorTheme.border} ${product.colorTheme.glow} transition-all duration-300 flex flex-col h-full`}
    >
      {/* Immersive Edge-to-Edge Portrait Screen Header */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-50 border-b border-blue-100 group/screen">
        {/* Full-bleed Portrait Art */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {!imageError ? (
            <img
              src={details.imageSrc}
              alt={product.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/screen:scale-105"
            />
          ) : (
            /* Custom SVG/CSS Rich Gaming Banner Fallback */
            <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 bg-slate-100">
              <div className="absolute inset-0 grid-pattern opacity-30"></div>
              <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 bg-${details.accentColor}-400`}></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl opacity-10 bg-slate-300"></div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative group p-5 bg-white rounded-3xl border border-slate-100 shadow-xl">
                  <div className={`absolute -inset-2 rounded-3xl opacity-40 blur bg-gradient-to-r ${product.colorTheme.primary}`}></div>
                  <div className="relative">
                    {details.icon}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Ambient Overlays for Deep Immersiveness */}
        {/* Top Vignette - keeping it light/subtle */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-900/20 via-slate-900/5 to-transparent pointer-events-none z-10"></div>
        
        {/* Bottom Vignette to blend seamlessly with the card's body */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>

        {/* Glossy Sheen Reflection Overlay across the entire screen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none z-10 transition-opacity duration-500 opacity-60 group-hover/screen:opacity-90"></div>

        {/* Beautiful Floating Interactive Price Badge at Bottom */}
        <div className="absolute bottom-4 right-4 z-20">
          <div className="py-2.5 px-4.5 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 shadow-md flex flex-col items-end transition-transform duration-300 group-hover/screen:translate-y-[-2px]">
            <p className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">Mulai Dari</p>
            <p className={`text-base font-black font-display bg-gradient-to-r ${product.colorTheme.primary} bg-clip-text text-transparent mt-0.5`}>
              {product.priceRange}<span className="text-[9px] text-slate-500 font-mono font-medium">/bln</span>
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col bg-white">
        {/* Title & Price */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 tracking-wide">
            {product.title}
          </h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3 my-6 flex-grow">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Fitur Utama Termasuk</p>
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
              <div className={`h-5 w-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-${details.accentColor}-600`}>
                <Check className="h-3.5 w-3.5 stroke-[3px]" />
              </div>
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button
            onClick={() => onSelect(product.id)}
            className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border border-transparent shadow-md shadow-blue-100 hover:shadow-lg`}
          >
            <span>Lihat Paket Lengkap</span>
            <ArrowRight className={`h-4 w-4 text-white group-hover:translate-x-1.5 transition-transform`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
