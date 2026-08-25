import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  MapPin,
  Mail,
  Facebook,
  Phone,
  Menu,
  X,
  ChevronRight,
  Archive,
  Users,
  Clock,
  Handshake,
  UserCheck,
  TrendingUp,
  PieChart,
  Globe,
  ShieldCheck,
  Quote
} from 'lucide-react';
import './styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-slate-900 text-gray-300 py-2 text-sm transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-blue-500" />
              <span>House-1263, Road-10, Ave 2, Mirpur DOHS, Dhaka</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={14} className="text-blue-500" />
              <a href="mailto:info@prestonwoodtrading.com" className="hover:text-blue-400 transition-colors">info@prestonwoodtrading.com</a>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Phone size={14} className="text-blue-500" />
              <a href="tel:+8801811810351" className="hover:text-blue-400 transition-colors">+880 1811-810351</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-slate-900 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-sky-900/20 py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Logo" className="w-16 h-16 object-cover drop-shadow-2xl rounded-full border-2 border-slate-700 bg-slate-900" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=P+W&background=2563EB&color=fff&rounded=true" }} />
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">PRESTONWOOD <span className="text-sky-400">TRADING LIMITED</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-sky-400 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-300 hover:text-sky-400 font-medium transition-colors">About Us</a>
            <a href="#investment" className="text-slate-300 hover:text-sky-400 font-medium transition-colors">Investment</a>
            <a href="#products" className="text-slate-300 hover:text-sky-400 font-medium transition-colors">Products</a>
            <a href="#services" className="text-slate-300 hover:text-sky-400 font-medium transition-colors">Services</a>
            <a href="#contact" className="text-slate-300 hover:text-sky-400 font-medium transition-colors">Contact</a>
            <a href="#contact" className="bg-sky-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/30">
              GET A QUOTE
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="xl:hidden bg-slate-900 shadow-xl absolute w-full left-0 border-t border-slate-800">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-slate-300 font-medium p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-slate-300 font-medium p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#investment" className="text-slate-300 font-medium p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(false)}>Investment</a>
            <a href="#products" className="text-slate-300 font-medium p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#services" className="text-slate-300 font-medium p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="text-slate-300 font-medium p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];
  
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden bg-[#0a1f18]">
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Background ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              idx === currentImg ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        {/* Greenish Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f18] via-[#0f2e24]/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center">
            GLOBAL <span className="mx-3 text-emerald-600/50">•</span> SOURCING <span className="mx-3 text-emerald-600/50">•</span> INVESTMENT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight tracking-wide">
            Elevating Trade with<br/>Global Reach.
          </h1>
          
          <p className="text-lg text-emerald-100/70 mb-12 max-w-2xl leading-relaxed">
            PRESTONWOOD TRADING LIMITED connects local demands with global supplies. Specializing in agro, garments, and essential commodities, we are your premium partner in strategic investments and secure trade.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-[#c59c38] text-white px-8 py-4 rounded-sm font-bold tracking-wider text-sm hover:bg-[#a8842c] transition-colors shadow-lg">
              EXPLORE OUR PRODUCTS
            </a>
            <a href="#contact" className="bg-transparent text-white border border-[#c59c38] px-8 py-4 rounded-sm font-bold tracking-wider text-sm hover:bg-white/10 transition-colors">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-white text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Corporate office" className="rounded-2xl shadow-2xl transform translate-y-8" />
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Global shipping" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-slate-700 min-w-[200px]">
              <span className="text-5xl font-extrabold text-sky-400">15+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-300 mt-2 text-center">Years of Global<br/>Trade Excellence</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-sky-500"></div>
              <h5 className="text-sky-600 font-extrabold tracking-widest uppercase text-sm">About The Company</h5>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              Bangladesh's Premier <br/> <span className="text-sky-600">Trading Conglomerate</span>
            </h2>
            <div className="prose prose-lg text-slate-600 mb-10 max-w-none">
              <p className="mb-4">
                <strong>PRESTONWOOD TRADING LIMITED</strong> stands at the forefront of the international commodity and logistics market. Headquartered in the commercial hub of Dhaka, Bangladesh, we execute high-volume, multi-national trade operations specializing in agro-commodities, industrial textiles, and critical relief supplies.
              </p>
              <p>
                Our operational infrastructure is built on rigorous compliance, deep-rooted local sourcing networks, and a vast global distribution matrix. We don't just facilitate transactions; we engineer secure, end-to-end supply chain architectures that guarantee absolute market dominance for our international partners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="text-4xl font-black text-slate-900 mb-1">40+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Export Destinations</p>
              </div>
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="text-4xl font-black text-slate-900 mb-1">500k+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tons Traded Annually</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Global Sourcing Network</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Unrivaled access to primary producers across Bangladesh and the ASEAN region, ensuring first-tier pricing and continuous supply.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Quality & Compliance</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Strict adherence to international trade standards. Every shipment undergoes rigorous multi-point inspection protocols.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Market Intelligence</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Proprietary data analytics driving strategic procurement. We forecast market shifts to secure highly profitable commodity positions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Investment = () => {
  return (
    <section id="investment" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-sky-500"></div>
              <h5 className="text-sky-400 font-extrabold tracking-widest uppercase text-sm">Investment Division</h5>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Strategic Trade Finance</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Partner with PRESTONWOOD TRADING LIMITED for high-yield, secure commodity investments. We leverage institutional-grade market intelligence to capitalize on global supply chain arbitrage.
            </p>
          </div>
          <a href="#contact" className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-400 transition-all flex items-center whitespace-nowrap">
            Request Prospectus
            <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Avg. Annual ROI</p>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-black text-emerald-400">24.5%</span>
                  <span className="text-emerald-500 text-sm font-bold mb-1">+2.1% YoY</span>
                </div>
              </div>
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Trade Volume</p>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-black text-sky-400">$120M</span>
                  <span className="text-sky-500 text-sm font-bold mb-1">+15% YoY</span>
                </div>
              </div>
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Risk Rating</p>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-black text-white">AAA</span>
                  <span className="text-slate-500 text-sm font-bold mb-1">Secured</span>
                </div>
              </div>
            </div>
            <div className="w-full h-48 bg-gradient-to-t from-sky-900/20 to-transparent border-b border-sky-500/50 relative flex items-end px-4 pb-4">
              <div className="flex justify-between items-end w-full h-full pt-8">
                {[40, 55, 45, 60, 75, 65, 85, 95].map((height, i) => (
                  <div key={i} className="w-[10%] bg-sky-500/80 hover:bg-sky-400 transition-colors rounded-t-sm" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl flex-grow shadow-2xl">
              <div className="w-12 h-12 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Institutional Security</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                We operate strictly on secured Letters of Credit (LC) and escrow frameworks. Our financial structures are underwritten by top-tier global banking institutions, ensuring zero counterparty risk.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl flex-grow shadow-2xl">
              <div className="w-12 h-12 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Arbitrage</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Exploiting structural price differentials between Southeast Asian manufacturing hubs and Western consumer markets. We secure commodities at true source-level pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="business" className="py-20 bg-rose-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/90 to-rose-950/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 text-white">
            <h5 className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-2">Our Business</h5>
            <h2 className="text-4xl font-bold mb-6">We Partner for Success</h2>
            <p className="text-amber-100/80 leading-relaxed mb-8 text-lg">
              We represent top industries and suppliers in the Bangladesh market for Commodities, Rice, Groceries, Relief Items, and Garments. With vast knowledge and connections in the local and ASEAN markets, we act as a strategic partner to our foreign suppliers.
            </p>
            <div className="flex items-center space-x-4 bg-amber-950/50 p-6 rounded-2xl border border-amber-800/50">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-amber-200 mb-1">Call for inquiries</p>
                <a href="tel:+8801811810351" className="text-2xl font-bold hover:text-amber-400 transition-colors block">+880 1811-810351</a>
                <a href="tel:+8801883079289" className="text-xl font-bold text-amber-300/80 hover:text-amber-400 transition-colors">+880 1883-079289</a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-amber-950/60 backdrop-blur border border-amber-700/50 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-amber-800/60 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <Archive size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
              <p className="text-amber-200/80 font-medium tracking-wide text-sm uppercase">Trading Items</p>
            </div>
            
            <div className="bg-amber-950/60 backdrop-blur border border-amber-700/50 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-amber-800/60 transition-colors group sm:mt-12">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-amber-200/80 font-medium tracking-wide text-sm uppercase">Happy Customers</p>
            </div>
            
            <div className="bg-amber-950/60 backdrop-blur border border-amber-700/50 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-amber-800/60 transition-colors group sm:-mt-12">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <Clock size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-amber-200/80 font-medium tracking-wide text-sm uppercase">Customer Services</p>
            </div>
            
            <div className="bg-amber-950/60 backdrop-blur border border-amber-700/50 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-amber-800/60 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <UserCheck size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
              <p className="text-amber-200/80 font-medium tracking-wide text-sm uppercase">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    { title: "Wheat Flour", img: "/wheat_flour.jpg" },
    { title: "Soybean Oil", img: "/new_soybean_oil.png" },
    { title: "Miniket Rice", img: "/miniket_rice_1787461306757.jpg" },
    { title: "White Sugar", img: "/white_sugar_1787461320006.jpg" },
    { title: "Namaz Hat", img: "/namaz_hat_1787461358262.jpg" },
    { title: "Cotton Lungi", img: "/cotton_lungi_1787461346163.jpg" },
    { title: "Red Lentils", img: "/red_lentils_1787461334052.jpg" },
    { title: "Chickpeas", img: "/chickpeas.jpg" },
    { title: "Dates", img: "/dates.jpg" },
    { title: "Relief Blankets", img: "/relief_blankets.jpg" },
  ];

  return (
    <section id="products" className="py-24 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h5 className="text-rose-600 font-bold tracking-wider uppercase text-sm mb-2">Our Portfolio</h5>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Premium Products</h2>
          <p className="text-slate-600">Discover our extensive range of high-quality agro-products, textiles, and daily commodities sourced from the best global suppliers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white relative z-10 -mt-2 rounded-t-3xl">
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  High-quality imported {item.title.toLowerCase()} ready for bulk supply.
                </p>
                <a href="#contact" className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl text-center font-semibold hover:bg-rose-600 transition-colors flex items-center justify-center">
                  Request for Quote
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-pink-50">
      {/* Dark left strip matching reference */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-[#1a1a1e] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-sky-400 p-6">
              <img src="/services.png" alt="Services Team" className="w-full h-auto object-contain rounded-2xl" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }} />
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-green-600"></div>
              <h5 className="text-green-600 font-extrabold tracking-widest uppercase text-sm">Services</h5>
            </div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-12 tracking-tight">Our Services</h2>
            
            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-6">
                  <Handshake size={48} className="text-green-600 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">Indenting & Supply</h4>
                  <p className="text-slate-500 leading-relaxed text-base">
                    We specialize in the bulk supply of Agro items, Soybean, Rice, Sugar, Lentils, Hats, and Lungis globally.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-6">
                  <UserCheck size={48} className="text-green-600 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">Consultancy & Logistics</h4>
                  <p className="text-slate-500 leading-relaxed text-base">
                    We provide expert guidance for Ocean Freight operations, LC Desk processing, Import & Export, and complex logistics projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cyan-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100">
          <div className="lg:w-2/5 p-0 h-[500px] lg:h-auto min-h-[500px] relative">
            <iframe
              src="https://maps.google.com/maps?q=23.836468,90.3695392&z=16&output=embed"
              className="w-full h-full border-0 absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="lg:w-3/5 p-10 lg:p-16 bg-cyan-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h5 className="text-rose-400 font-bold tracking-wider uppercase text-sm mb-2">Request A Quote</h5>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-800/80 border border-slate-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-inner" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-slate-800/80 border border-slate-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-inner" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" className="w-full bg-slate-800/80 border border-slate-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-inner" />
                  </div>
                  <div>
                    <select className="w-full bg-slate-800/80 border border-slate-700 text-slate-300 px-5 py-4 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-inner appearance-none">
                      <option value="">Select Product...</option>
                      <option value="wheat_flour">Wheat Flour</option>
                      <option value="soybean_oil">Soybean Oil</option>
                      <option value="miniket_rice">Miniket Rice</option>
                      <option value="white_sugar">White Sugar</option>
                      <option value="namaz_hat">Namaz Hat</option>
                      <option value="cotton_lungi">Cotton Lungi</option>
                      <option value="red_lentils">Red Lentils</option>
                      <option value="chickpeas">Chickpeas</option>
                      <option value="dates">Dates</option>
                      <option value="relief_blankets">Relief Blankets</option>
                      <option value="investment">Investment Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea placeholder="Your Message or Order Details" rows="4" className="w-full bg-slate-800/80 border border-slate-700 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all resize-none shadow-inner"></textarea>
                </div>
                <button type="submit" className="bg-rose-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/30 w-full sm:w-auto text-lg">
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h5 className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Process</h5>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">From origin to your warehouse.</h2>
          <p className="text-slate-400 text-lg">A four-step path designed for predictability.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line - Hidden on Mobile */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-slate-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-sky-400 font-serif text-xl mb-6 shadow-[0_0_15px_rgba(255,255,255,0.03)]">01</div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Sourcing</h4>
              <p className="text-sm text-slate-400 leading-relaxed px-2">Origin selection against your grade, volume and landing-cost brief.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-sky-400 font-serif text-xl mb-6 shadow-[0_0_15px_rgba(255,255,255,0.03)]">02</div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Quality Check</h4>
              <p className="text-sm text-slate-400 leading-relaxed px-2">Lot inspection and specification match before the cargo moves.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-sky-400 font-serif text-xl mb-6 shadow-[0_0_15px_rgba(255,255,255,0.03)]">03</div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Import / Export & Logistics</h4>
              <p className="text-sm text-slate-400 leading-relaxed px-2">Documentation, freight and customs handled as one movement.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-sky-400 font-serif text-xl mb-6 shadow-[0_0_15px_rgba(255,255,255,0.03)]">04</div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Delivery</h4>
              <p className="text-sm text-slate-400 leading-relaxed px-2">On-time release to wholesalers, plants and project sites.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Clear communication from booking to warehouse. Pricing holds up under volume.",
    author: "DIRECTOR, APEX FOOD PROCESSING INDUSTRY"
  },
  {
    quote: "PRESTONWOOD TRADING LIMITED consistently delivers on their promises. Their global reach and local expertise make them an invaluable partner.",
    author: "CEO, GLOBAL COMMODITIES LTD."
  },
  {
    quote: "Their quality control and logistics handling are unmatched. We never have to worry about our shipments.",
    author: "HEAD OF SOURCING, PRIME RETAIL GROUP"
  }
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-violet-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-sky-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">Client Voice</h5>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900">What partners say.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative text-center rounded-sm border border-slate-100 min-h-[350px] flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <Quote className="text-sky-500 w-12 h-12 fill-sky-500 opacity-20" />
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out w-full" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed mb-10">
                    "{t.quote}"
                  </p>
                  <p className="text-slate-500 text-xs font-bold tracking-[0.1em] uppercase">
                    {t.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentSlide === idx 
                  ? 'bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] scale-110' 
                  : 'bg-slate-300 hover:bg-sky-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-amber-50 text-amber-950 pt-8 pb-8 overflow-hidden border-t-4 border-amber-200">
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Footer bg" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg inline-block mb-4 shadow-md border border-amber-200">
              <div className="flex items-center space-x-2">
                 <img src="/logo.jpg" alt="Logo" className="w-20 h-20 object-cover rounded-full border border-amber-200 bg-white" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=P+W&background=2563EB&color=fff&rounded=true" }} />
                 <span className="text-2xl font-bold text-amber-950 tracking-tight uppercase">PRESTONWOOD <span className="text-sky-600">TRADING LIMITED</span></span>
              </div>
            </div>
            <p className="text-amber-900 leading-relaxed text-base mb-1 font-medium">Premium commodities. Trusted worldwide.</p>
            <p className="text-amber-900 leading-relaxed text-base font-medium">
              Import, export and wholesale distribution of food commodities and natural stone from Dhaka.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold text-amber-950 mb-4">Our Products</h4>
            <ul className="space-y-2 text-amber-900 text-base font-medium">
              <li><a href="#products" className="hover:text-sky-600 transition-colors">Rice</a></li>
              <li><a href="#products" className="hover:text-sky-600 transition-colors">Sugar</a></li>
              <li><a href="#products" className="hover:text-sky-600 transition-colors">Flour & Wheat</a></li>
              <li><a href="#products" className="hover:text-sky-600 transition-colors">Edible Oil</a></li>
              <li><a href="#products" className="hover:text-sky-600 transition-colors">Lentils</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-bold text-amber-950 mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start border-b border-amber-200/60 pb-2">
                <div className="w-24 text-sky-600 font-bold text-sm mt-1 uppercase tracking-wider">Office</div>
                <div className="flex-1 text-amber-900 text-base font-medium">
                  Dhaka Office: House-1263 (Level-3), Road-10, Avenue 2, Mirpur DOHS, Dhaka-1216, Bangladesh.
                </div>
              </div>
              <div className="flex items-center border-b border-amber-200/60 pb-2">
                <div className="w-24 text-sky-600 font-bold text-sm uppercase tracking-wider">Direct</div>
                <div className="flex-1 text-amber-900 text-base font-medium">+880 1811-810351</div>
              </div>
              <div className="flex items-center border-b border-amber-200/60 pb-2">
                <div className="w-24 text-sky-600 font-bold text-sm uppercase tracking-wider">Call</div>
                <div className="flex-1 text-amber-900 text-base font-medium">+880 1883-079289</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 text-sky-600 font-bold text-sm uppercase tracking-wider">Email</div>
                <div className="flex-1 text-amber-900 text-base font-medium break-all">info@prestonwoodtrading.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 z-20 hidden md:block">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-12 h-12 bg-sky-600 hover:bg-sky-500 text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

const WhatWeDo = () => {
  const activities = [
    {
      icon: <Globe size={32} className="text-sky-500" />,
      title: "Global Procurement",
      description: "Identifying and securing high-quality commodities from trusted international and local suppliers to ensure continuous availability.",
      bg: "bg-slate-800/50"
    },
    {
      icon: <Archive size={32} className="text-emerald-500" />,
      title: "Bulk Supply & Indenting",
      description: "Managing large-scale orders for agro-products, textiles, and daily necessities with competitive pricing and reliability.",
      bg: "bg-slate-800/50"
    },
    {
      icon: <ShieldCheck size={32} className="text-amber-500" />,
      title: "Quality Assurance",
      description: "Implementing rigorous multi-point inspections to guarantee that all products meet international trade standards.",
      bg: "bg-slate-800/50"
    },
    {
      icon: <TrendingUp size={32} className="text-rose-500" />,
      title: "Trade Finance & Investment",
      description: "Facilitating secure financial structures like Letters of Credit (LC) and escrow to minimize counterparty risk.",
      bg: "bg-slate-800/50"
    },
    {
      icon: <Clock size={32} className="text-blue-500" />,
      title: "Logistics & Freight",
      description: "Coordinating seamless ocean freight, customs clearance, and inland transportation for timely deliveries.",
      bg: "bg-slate-800/50"
    },
    {
      icon: <Handshake size={32} className="text-orange-500" />,
      title: "Strategic Partnerships",
      description: "Building long-term, mutually beneficial relationships between ASEAN manufacturers and global consumer markets.",
      bg: "bg-slate-800/50"
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[100px] -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-sky-500"></div>
            <h5 className="text-sky-400 font-extrabold tracking-widest uppercase text-sm">Work Focus</h5>
            <div className="w-8 h-0.5 bg-sky-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">What We Do</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We operate at the intersection of local expertise and global reach, orchestrating complex supply chains to deliver essential commodities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <div key={index} className={`p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all group backdrop-blur-sm ${item.bg}`}>
              <div className="w-16 h-16 rounded-2xl bg-slate-950/50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-100 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Investment />
        <Features />
        <Products />
        <Services />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
