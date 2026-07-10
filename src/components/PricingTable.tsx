import { useState, useTransition } from "react";
import { MessageSquare, ShieldCheck, Server, Cpu, Smartphone, Database, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS, PricingPlanItem, WEBSITE_CONTENT } from "../data";

interface PricingTableProps {
  selectedId: string;
  setSelectedId: (id: string) => void;
}

export default function PricingTable({ selectedId, setSelectedId }: PricingTableProps) {
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setSelectedId(id);
    });
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[0];

  const getCheckoutLink = (item: PricingPlanItem) => {
    const message = `Halo ZenStore, saya ingin membeli paket:
- Layanan: ${selectedProduct.title}
- RAM: ${item.ram}
- CPU: ${item.cpu}
- Disk: ${item.disk}
- Harga: ${item.price}/bulan

Bagaimana prosedur pembayaran dan aktivasi selanjutnya? Terima kasih.`;
    
    return `https://wa.me/628131469731?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden border-t border-b border-blue-50">
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/30 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {WEBSITE_CONTENT.pricingSection.title.split(" & ")[0]} & <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">{WEBSITE_CONTENT.pricingSection.title.split(" & ")[1] || "Harga Server"}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            {WEBSITE_CONTENT.pricingSection.subtitle}
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {PRODUCTS.map((prod) => {
            const isActive = prod.id === selectedId;
            let themeColor = "border-slate-200 hover:border-blue-200 bg-slate-50/50 text-slate-600";
            if (isActive) {
              if (prod.type === "basic") themeColor = "border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100";
              if (prod.type === "premium") themeColor = "border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100";
              if (prod.type === "bot") themeColor = "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100";
            }

            return (
              <button
                key={prod.id}
                onClick={() => handleTabChange(prod.id)}
                className={`px-5 py-3.5 rounded-2xl border text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${themeColor}`}
              >
                {prod.type === "basic" && <Server className="h-4 w-4" />}
                {prod.type === "premium" && <Cpu className="h-4 w-4" />}
                {prod.type === "bot" && <Smartphone className="h-4 w-4" />}
                <span>{prod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Pricing Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isPending && (
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* Desktop Pricing Table Grid */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-blue-100 bg-slate-50 font-mono text-xs uppercase tracking-wider text-slate-500">
                        <th className="py-5 px-8">Spesifikasi RAM</th>
                        <th className="py-5 px-6">Alokasi CPU</th>
                        <th className="py-5 px-6">Penyimpanan Disk</th>
                        <th className="py-5 px-8 text-right">Harga Beli</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                      {selectedProduct.items.map((item, index) => (
                        <tr 
                          key={index}
                          className="hover:bg-blue-50/20 transition-colors group"
                        >
                          {/* RAM SPEC */}
                          <td className="py-4.5 px-8 font-bold text-slate-800 flex items-center gap-3">
                            <div className={`h-6 w-6 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:border-${selectedProduct.type === 'basic' ? 'sky' : selectedProduct.type === 'premium' ? 'blue' : 'indigo'}-500/50`}>
                              <Database className="h-3.5 w-3.5 text-blue-500" />
                            </div>
                            <span className="font-display tracking-wide">{item.ram} Memory</span>
                          </td>
                          {/* CPU SPEC */}
                          <td className="py-4.5 px-6 font-mono text-slate-600">
                            {item.cpu} Dedicated
                          </td>
                          {/* DISK SPEC */}
                          <td className="py-4.5 px-6 font-mono text-slate-600">
                            {item.disk} NVMe SSD
                          </td>
                          {/* PRICE SPEC & CTA */}
                          <td className="py-4.5 px-8 text-right">
                            <div className="flex items-center justify-end gap-6">
                              <div className="text-right">
                                <span className={`text-base font-black font-display text-${selectedProduct.type === 'basic' ? 'sky' : selectedProduct.type === 'premium' ? 'blue' : 'indigo'}-600`}>
                                  {item.price}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono ml-1">/bln</span>
                              </div>
                              <a
                                href={getCheckoutLink(item)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md ${
                                  selectedProduct.type === "basic" ? "bg-sky-500 hover:bg-sky-600 shadow-sky-200" :
                                  selectedProduct.type === "premium" ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200" :
                                  "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
                                }`}
                              >
                                <MessageSquare className="h-3.5 w-3.5 stroke-[2.5px]" />
                                Beli
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Spec Cards List */}
                <div className="block md:hidden space-y-4">
                  {selectedProduct.items.map((item, index) => (
                    <div 
                      key={index}
                      className="p-5 rounded-2xl bg-white border border-blue-100 space-y-4 shadow-md relative overflow-hidden"
                    >
                      {/* Gradient Ambient Tag on Card */}
                      <div className={`absolute top-0 right-0 h-1.5 w-24 bg-gradient-to-r ${selectedProduct.colorTheme.primary}`}></div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span className="text-base font-extrabold font-display text-slate-850">{item.ram} RAM</span>
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-xs">
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase">CPU Core</p>
                          <p className="text-slate-700 font-bold mt-0.5">{item.cpu}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] uppercase">NVMe Storage</p>
                          <p className="text-slate-700 font-bold mt-0.5">{item.disk}</p>
                        </div>
                      </div>

                      {/* Price and Checkout CTA */}
                      <div className="flex items-center justify-between pt-1">
                        <div>
                          <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Harga Per Bulan</p>
                          <p className={`text-xl font-black font-display text-${selectedProduct.type === 'basic' ? 'sky' : selectedProduct.type === 'premium' ? 'blue' : 'indigo'}-600`}>
                            {item.price}
                          </p>
                        </div>
                        <a
                          href={getCheckoutLink(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase text-white cursor-pointer shadow-md ${
                            selectedProduct.type === "basic" ? "bg-sky-500 hover:bg-sky-600 shadow-sky-200" :
                            selectedProduct.type === "premium" ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200" :
                            "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
                          }`}
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          Beli
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
