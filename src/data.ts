export interface PricingPlanItem {
  ram: string;
  cpu: string;
  disk: string;
  price: string;
  priceNum: number;
}

export interface ProductCard {
  id: string;
  title: string;
  type: 'basic' | 'premium' | 'bot';
  priceRange: string;
  description: string;
  features: string[];
  colorTheme: {
    primary: string;
    glow: string;
    text: string;
    border: string;
    badgeBg: string;
    gradient: string;
  };
  items: PricingPlanItem[];
}

export interface DeveloperConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
  };
  website: {
    portfolio: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  links: {
    portfolio: string;
    discord: string;
    github: string;
    youtube: string;
    instagram: string;
  };
  status: {
    maintenance: boolean;
    online: boolean;
  };
  updated_at: string;
  version: string;
}

export const MINECRAFT_BASIC_ITEMS: PricingPlanItem[] = [
  { ram: "1 GB", cpu: "100%", disk: "5 GB", price: "Rp5.000", priceNum: 5000 },
  { ram: "2 GB", cpu: "200%", disk: "10 GB", price: "Rp10.000", priceNum: 10000 },
  { ram: "3 GB", cpu: "300%", disk: "15 GB", price: "Rp15.000", priceNum: 15000 },
  { ram: "4 GB", cpu: "400%", disk: "20 GB", price: "Rp20.000", priceNum: 20000 },
  { ram: "5 GB", cpu: "500%", disk: "25 GB", price: "Rp25.000", priceNum: 25000 },
  { ram: "6 GB", cpu: "500%", disk: "30 GB", price: "Rp30.000", priceNum: 30000 },
  { ram: "7 GB", cpu: "500%", disk: "35 GB", price: "Rp35.000", priceNum: 35000 },
  { ram: "8 GB", cpu: "500%", disk: "40 GB", price: "Rp40.000", priceNum: 40000 },
];

export const MINECRAFT_PREMIUM_ITEMS: PricingPlanItem[] = [
  { ram: "1 GB", cpu: "100%", disk: "5 GB", price: "Rp10.000", priceNum: 10000 },
  { ram: "2 GB", cpu: "200%", disk: "10 GB", price: "Rp20.000", priceNum: 20000 },
  { ram: "3 GB", cpu: "300%", disk: "15 GB", price: "Rp30.000", priceNum: 30000 },
  { ram: "4 GB", cpu: "400%", disk: "20 GB", price: "Rp40.000", priceNum: 40000 },
  { ram: "5 GB", cpu: "500%", disk: "25 GB", price: "Rp50.000", priceNum: 50000 },
  { ram: "6 GB", cpu: "500%", disk: "30 GB", price: "Rp60.000", priceNum: 60000 },
  { ram: "7 GB", cpu: "500%", disk: "35 GB", price: "Rp70.000", priceNum: 70000 },
  { ram: "8 GB", cpu: "500%", disk: "40 GB", price: "Rp80.000", priceNum: 80000 },
];

export const PANEL_BOT_ITEMS: PricingPlanItem[] = [
  { ram: "1 GB", cpu: "100%", disk: "5 GB", price: "Rp1.000", priceNum: 1000 },
  { ram: "2 GB", cpu: "200%", disk: "10 GB", price: "Rp2.000", priceNum: 2000 },
  { ram: "3 GB", cpu: "300%", disk: "15 GB", price: "Rp3.000", priceNum: 3000 },
  { ram: "4 GB", cpu: "400%", disk: "20 GB", price: "Rp4.000", priceNum: 4000 },
  { ram: "5 GB", cpu: "500%", disk: "25 GB", price: "Rp5.000", priceNum: 5000 },
  { ram: "6 GB", cpu: "600%", disk: "30 GB", price: "Rp6.000", priceNum: 6000 },
  { ram: "7 GB", cpu: "700%", disk: "35 GB", price: "Rp7.000", priceNum: 7000 },
  { ram: "8 GB", cpu: "800%", disk: "40 GB", price: "Rp8.000", priceNum: 8000 },
  { ram: "9 GB", cpu: "900%", disk: "45 GB", price: "Rp9.000", priceNum: 9000 },
  { ram: "10 GB", cpu: "1000%", disk: "50 GB", price: "Rp10.000", priceNum: 10000 },
];

export const PRODUCTS: ProductCard[] = [
  {
    id: "minecraft-basic",
    title: "Minecraft Hosting Basic",
    type: "basic",
    priceRange: "Rp5.000",
    description: "Layanan server Minecraft dengan performa stabil untuk bermain bersama teman dengan budget bersahabat.",
    features: [
      "Online 24/7",
      "Anti Lag",
      "Lokasi Indonesia",
      "Gratis Setup",
      "Support",
    ],
    colorTheme: {
      primary: "from-blue-600 to-sky-500",
      glow: "shadow-lg shadow-sky-100 border-sky-100 hover:shadow-sky-200/50",
      text: "text-sky-600",
      border: "border-sky-100 hover:border-sky-300",
      badgeBg: "bg-sky-50 text-sky-600 border-sky-100",
      gradient: "from-white to-sky-50/20",
    },
    items: MINECRAFT_BASIC_ITEMS,
  },
  {
    id: "minecraft-premium",
    title: "Minecraft Hosting Premium",
    type: "premium",
    priceRange: "Rp10.000",
    description: "Performa prioritas tinggi dengan CPU kelas atas untuk server komunitas besar yang bebas hambatan.",
    features: [
      "Performa Premium",
      "CPU Prioritas",
      "Anti Lag",
      "Lokasi Indonesia",
      "Support 24/7",
    ],
    colorTheme: {
      primary: "from-blue-700 to-sky-500",
      glow: "shadow-lg shadow-blue-100 border-blue-100 hover:shadow-blue-200/50",
      text: "text-blue-600",
      border: "border-blue-100 hover:border-blue-300",
      badgeBg: "bg-blue-50 text-blue-600 border-blue-100",
      gradient: "from-white to-blue-50/20",
    },
    items: MINECRAFT_PREMIUM_ITEMS,
  },
  {
    id: "panel-bot",
    title: "Panel Bot WhatsApp",
    type: "bot",
    priceRange: "Rp1.000",
    description: "Layanan panel bot WhatsApp berkecepatan tinggi untuk otomatisasi, asisten grup, dan chatbot stabil.",
    features: [
      "Mudah Digunakan",
      "Aktif 24/7",
      "Gratis Instalasi",
      "Uptime Tinggi",
      "Template Bot",
    ],
    colorTheme: {
      primary: "from-indigo-600 to-blue-500",
      glow: "shadow-lg shadow-indigo-100 border-indigo-100 hover:shadow-indigo-200/50",
      text: "text-indigo-600",
      border: "border-indigo-100 hover:border-indigo-300",
      badgeBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      gradient: "from-white to-indigo-50/20",
    },
    items: PANEL_BOT_ITEMS,
  },
];

export const FEATURES = [
  {
    title: "Performa Stabil",
    description: "Infrastruktur modern menjamin performa server tetap maksimal walau banyak pemain.",
    iconName: "Zap",
    color: "text-blue-600"
  },
  {
    title: "Anti Lag",
    description: "Alokasi RAM murni dan CPU dedicated menjamin pengalaman bermain yang super mulus.",
    iconName: "Cpu",
    color: "text-sky-600"
  },
  {
    title: "Aktivasi Instan",
    description: "Server langsung aktif otomatis beberapa detik setelah pembayaran dikonfirmasi.",
    iconName: "Flame",
    color: "text-cyan-600"
  },
  {
    title: "Support 24/7",
    description: "Tim ahli kami siap melayani pertanyaan dan bantuan teknis Anda kapan saja.",
    iconName: "Headphones",
    color: "text-indigo-600"
  },
  {
    title: "Lokasi Indonesia",
    description: "Server berbasis di datacenter Jakarta dengan latensi terendah untuk koneksi lokal.",
    iconName: "Globe",
    color: "text-sky-600"
  },
  {
    title: "Gratis Setup",
    description: "Tanpa biaya tambahan! Server Minecraft dan Panel Bot Anda disiapkan secara gratis.",
    iconName: "Settings",
    color: "text-teal-400"
  },
  {
    title: "Responsive",
    description: "Website kami sangat responsif dan mudah diakses dari HP, Tablet, maupun PC.",
    iconName: "Smartphone",
    color: "text-blue-500"
  },
  {
    title: "Harga Terjangkau",
    description: "Dapatkan kualitas hosting premium dengan harga ekonomis mulai dari Rp1.000 saja.",
    iconName: "BadgePercent",
    color: "text-sky-400"
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Harga Bersaing",
    description: "Paket termurah dengan spesifikasi murni, cocok untuk pelajar dan pengembang pemula.",
    iconName: "TrendingDown"
  },
  {
    title: "Performa Tinggi",
    description: "Didukung prosesor premium berkecepatan tinggi demi latensi ping terendah.",
    iconName: "Gauge"
  },
  {
    title: "Server Stabil",
    description: "Uptime garansi hingga 99.9% dengan sistem backup berkala dan keamanan DDoS.",
    iconName: "ShieldCheck"
  },
  {
    title: "Aktivasi Cepat",
    description: "Layanan instan tanpa menunggu berjam-jam, kendali penuh langsung di tangan Anda.",
    iconName: "Clock"
  },
  {
    title: "Support Ramah",
    description: "Layanan bantuan cepat tanggap yang ramah, siap memandu Anda hingga paham.",
    iconName: "HeartHandshake"
  },
  {
    title: "Panel Mudah Digunakan",
    description: "Akses panel modern Pterodactyl atau Bot Panel yang intuitif dan sangat ringan.",
    iconName: "Sliders"
  }
];

export const FAQS = [
  {
    question: "Apakah server online 24 jam?",
    answer: "Ya, seluruh server hosting dan bot panel kami berjalan 24 jam penuh tanpa henti, didukung oleh infrastruktur pusat data yang andal dan sistem pendingin mutakhir."
  },
  {
    question: "Apakah support membantu instalasi?",
    answer: "Ya, kami menawarkan gratis instalasi dan konfigurasi awal. Jika Anda mengalami kesulitan memasukkan plugin, sitemap bot, atau modpack, tim support kami siap memandu sampai selesai."
  },
  {
    question: "Apakah bisa upgrade paket?",
    answer: "Ya, Anda bisa melakukan upgrade spesifikasi RAM, CPU, atau kapasitas disk kapan saja tanpa perlu khawatir data Anda terhapus. Cukup hubungi admin untuk melakukan kalkulasi selisih harga."
  },
  {
    question: "Apakah lokasi server Indonesia?",
    answer: "Ya, server utama kami berlokasi di Jakarta, Indonesia, untuk memberikan ping super rendah dan koneksi paling stabil untuk para pemain dan pengguna di tanah air."
  }
];

export const DEFAULT_DEVELOPER_CONFIG: DeveloperConfig = {
  name: "Ran Dev",
  contact: {
    phone: "0895602592430",
    whatsapp: "0895602592430",
    email: ""
  },
  website: {
    portfolio: "https://sfl.gl/x2ic"
  },
  community: {
    name: "Ran Dev",
    website: "https://sfl.gl/x2ic",
    discord: "https://discord.gg/9KUN2byKRM"
  },
  links: {
    portfolio: "https://sfl.gl/x2ic",
    discord: "https://discord.gg/9KUN2byKRM",
    github: "",
    youtube: "",
    instagram: ""
  },
  status: {
    maintenance: false,
    online: true
  },
  updated_at: "2026-07-06T00:00:00Z",
  version: "1.0.0"
};
