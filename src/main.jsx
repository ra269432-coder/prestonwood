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
  Quote,
  Truck,
  Map,
  Flag
} from 'lucide-react';
import './styles.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 top-0 left-0">
      {/* Top Bar */}
      <div className={`hidden md:block transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'bg-slate-800/80 backdrop-blur-sm border-b border-white/10'}`}>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-2 text-sm text-slate-300">
          <div className="flex items-center space-x-6">
            <div className="flex items-center"><MapPin size={14} className="mr-2 text-white" /> <span className="text-white font-medium">Dhaka, Bangladesh</span></div>
            <div className="flex items-center"><Mail size={14} className="mr-2 text-white" /> <span className="text-white font-medium">info@prestonwoodtrading.com</span></div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-emerald-400 transition-colors"><Facebook size={16} /></a>
            <a href="#" className="text-white hover:text-emerald-400 transition-colors"><Phone size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'pt-0' : 'pt-4'}`}>
        <div className={`container mx-auto transition-all duration-300 ${isScrolled ? 'max-w-full px-0' : 'px-4 lg:px-8'}`}>
          <nav className={`bg-white flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3 px-6 shadow-lg' : 'py-3 px-6 shadow-2xl rounded-sm'}`}>
            
            {/* Logo and Text */}
            <a href="#" className="flex items-center space-x-3 group">
              <img src="/new_logo.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:opacity-90 transition-opacity" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=P+W&background=11392B&color=fff&rounded=true" }} />
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-[22px] font-black text-[#11392B] tracking-tight leading-none uppercase">Prestonwood Trading</span>
                <span className="text-[10px] md:text-xs font-bold text-[#059669] tracking-widest uppercase mt-1">Limited</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#" className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors">Home</a>
              <a href="#about" className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors">About Us</a>
              <a href="#products" className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors">Products</a>
              <a href="#services" className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors">Services</a>
              <a href="#investment" className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors">Investment</a>
              <a href="#contact" className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors">Contact Us</a>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <a href="#contact" className="bg-[#059669] text-white px-6 py-2.5 rounded-full hover:bg-[#047857] transition-colors text-sm font-bold shadow-md whitespace-nowrap">
                GET A QUOTE
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-slate-800 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 py-4 shadow-xl">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="font-nav text-slate-800 text-lg font-black uppercase tracking-widest">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-nav text-slate-800 text-lg font-black uppercase tracking-widest">About Us</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="font-nav text-slate-800 text-lg font-black uppercase tracking-widest">Products</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-nav text-slate-800 text-lg font-black uppercase tracking-widest">Services</a>
            <a href="#investment" onClick={() => setIsMenuOpen(false)} className="font-nav text-slate-800 text-lg font-black uppercase tracking-widest">Investment</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-nav text-[#059669] text-lg font-black uppercase tracking-widest">Contact Us</a>
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
    <section className="relative min-h-screen flex items-center pt-28 pb-10 overflow-hidden bg-[#064E3B]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center">
            GLOBAL <span className="mx-3 text-emerald-600/50">•</span> SOURCING <span className="mx-3 text-emerald-600/50">•</span> INVESTMENT
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-wide drop-shadow-xl">
            PRESTONWOOD TRADING<br/>LIMITED.
          </h1>
          
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            Elevating Trade with Global Reach. Specializing in agro, garments, and essential commodities, we are your premium partner in strategic investments and secure trade.
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
    <section id="about" className="py-10 bg-[#F3F4F6] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-10">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-8 leading-tight tracking-tight">
              Bangladesh's Premier <br/> <span className="text-sky-600">Trading Conglomerate</span>
            </h2>
            <div className="prose prose-lg text-[#1F2937] mb-10 max-w-none">
              <p className="mb-4">
                <strong>PRESTONWOOD TRADING LIMITED</strong> stands at the forefront of the international commodity and logistics market. Headquartered in the commercial hub of Dhaka, Bangladesh, we execute high-volume, multi-national trade operations specializing in agro-commodities, industrial textiles, and critical relief supplies.
              </p>
              <p>
                Our operational infrastructure is built on rigorous compliance, deep-rooted local sourcing networks, and a vast global distribution matrix. We don't just facilitate transactions; we engineer secure, end-to-end supply chain architectures that guarantee absolute market dominance for our international partners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="text-4xl font-black text-[#1F2937] mb-1">40+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Export Destinations</p>
              </div>
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="text-4xl font-black text-[#1F2937] mb-1">500k+</h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tons Traded Annually</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group flex flex-col bg-[#E5E7EB] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
            <div className="relative h-48 overflow-hidden">
              <img src="/global_sourcing.jpg" alt="Global Sourcing Network" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

            </div>
            <div className="p-8 flex flex-col flex-grow bg-[#F3F4F6] relative z-10">
              <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-sky-600 transition-colors">Global Sourcing Network</h3>
              <p className="text-[#1F2937] leading-relaxed text-sm flex-grow">Unrivaled access to primary producers across Bangladesh and the ASEAN region, ensuring first-tier pricing and continuous supply.</p>
            </div>
          </div>
          
          <div className="group flex flex-col bg-[#E5E7EB] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
            <div className="relative h-48 overflow-hidden">
              <img src="/quality_compliance.jpg" alt="Quality & Compliance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

            </div>
            <div className="p-8 flex flex-col flex-grow bg-[#F3F4F6] relative z-10">
              <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-sky-600 transition-colors">Quality & Compliance</h3>
              <p className="text-[#1F2937] leading-relaxed text-sm flex-grow">Strict adherence to international trade standards. Every shipment undergoes rigorous multi-point inspection protocols.</p>
            </div>
          </div>
          
          <div className="group flex flex-col bg-[#E5E7EB] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
            <div className="relative h-48 overflow-hidden">
              <img src="/market_intelligence.jpg" alt="Market Intelligence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

            </div>
            <div className="p-8 flex flex-col flex-grow bg-[#F3F4F6] relative z-10">
              <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-sky-600 transition-colors">Market Intelligence</h3>
              <p className="text-[#1F2937] leading-relaxed text-sm flex-grow">Proprietary data analytics driving strategic procurement. We forecast market shifts to secure highly profitable commodity positions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Investment = () => {
  return (
    <section id="investment" className="py-10 bg-[#4C0519] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#700b27] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#2a030d] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
              <h5 className="text-[#D4AF37] font-extrabold tracking-widest uppercase text-sm">Investment Division</h5>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Strategic Trade Finance</h2>
            <p className="text-emerald-100/70 text-lg leading-relaxed">
              Partner with PRESTONWOOD TRADING LIMITED for high-yield, secure commodity investments. We leverage institutional-grade market intelligence to capitalize on global supply chain arbitrage.
            </p>
          </div>
          <a href="#contact" className="bg-[#D4AF37] text-[#11392B] px-8 py-4 rounded-sm font-bold hover:bg-[#b5952f] transition-all flex items-center whitespace-nowrap shadow-lg">
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
            <div className="group flex flex-col bg-slate-900/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-slate-800 hover:-translate-y-1 transition-all flex-grow">
              <div className="relative h-40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Institutional Security" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>

              </div>
              <div className="p-6 pt-2 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">Institutional Security</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                  We operate strictly on secured Letters of Credit (LC) and escrow frameworks. Our financial structures are underwritten by top-tier global banking institutions, ensuring zero counterparty risk.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-slate-900/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-slate-800 hover:-translate-y-1 transition-all flex-grow">
              <div className="relative h-40 overflow-hidden">
                <img src="/global_procurement.jpg" alt="Global Arbitrage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>

              </div>
              <div className="p-6 pt-2 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">Global Arbitrage</h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                  Exploiting structural price differentials between Southeast Asian manufacturing hubs and Western consumer markets. We secure commodities at true source-level pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="business" className="py-10 bg-[#E7E5E4] relative overflow-hidden border-b border-[#D6D3D1]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 text-[#1F2937]">
            <h5 className="text-[#11392B] font-bold tracking-wider uppercase text-sm mb-2">Our Business</h5>
            <h2 className="text-4xl font-bold mb-6 text-[#1F2937]">We Partner for Success</h2>
            <p className="text-[#1F2937] leading-relaxed mb-8 text-lg">
              We represent top industries and suppliers in the Bangladesh market for Commodities, Rice, Groceries, Relief Items, and Garments. With vast knowledge and connections in the local and ASEAN markets, we act as a strategic partner to our foreign suppliers.
            </p>
            <div className="flex items-center space-x-4 bg-[#F5F5F4] p-6 rounded-2xl border border-[#D6D3D1]">
              <div className="w-16 h-16 rounded-full bg-[#11392B]/10 border border-[#11392B]/20 flex items-center justify-center text-[#11392B]">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1 font-semibold">Call for inquiries</p>
                <a href="tel:+8801811810351" className="text-2xl font-bold text-[#1F2937] hover:text-[#11392B] transition-colors block">+880 1811-810351</a>
                <a href="tel:+8801883079289" className="text-xl font-bold text-slate-700 hover:text-[#11392B] transition-colors">+880 1883-079289</a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group flex flex-col bg-[#F5F5F4] rounded-3xl overflow-hidden shadow-sm border border-[#D6D3D1] hover:shadow-md transition-all">
              <div className="relative h-32 overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Trading Items" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />

              </div>
              <div className="p-6 pt-4 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold text-[#1F2937] mb-2">100+</h3>
                <p className="text-slate-500 font-bold tracking-wide text-sm uppercase">Trading Items</p>
              </div>
            </div>
            
            <div className="group flex flex-col bg-[#F5F5F4] rounded-3xl overflow-hidden shadow-sm border border-[#D6D3D1] hover:shadow-md transition-all sm:mt-12">
              <div className="relative h-32 overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Happy Customers" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />

              </div>
              <div className="p-6 pt-4 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold text-[#1F2937] mb-2">500+</h3>
                <p className="text-slate-500 font-bold tracking-wide text-sm uppercase">Happy Customers</p>
              </div>
            </div>
            
            <div className="group flex flex-col bg-[#F5F5F4] rounded-3xl overflow-hidden shadow-sm border border-[#D6D3D1] hover:shadow-md transition-all sm:-mt-12">
              <div className="relative h-32 overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer Services" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />

              </div>
              <div className="p-6 pt-4 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold text-[#1F2937] mb-2">24/7</h3>
                <p className="text-slate-500 font-bold tracking-wide text-sm uppercase">Customer Services</p>
              </div>
            </div>
            
            <div className="group flex flex-col bg-[#F5F5F4] rounded-3xl overflow-hidden shadow-sm border border-[#D6D3D1] hover:shadow-md transition-all">
              <div className="relative h-32 overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Satisfaction" className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />

              </div>
              <div className="p-6 pt-4 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold text-[#1F2937] mb-2">90%</h3>
                <p className="text-slate-500 font-bold tracking-wide text-sm uppercase">Satisfaction</p>
              </div>
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
    { title: "Refined Salt", img: "/salt.png" },
    { title: "Mustard Oil", img: "/mustard_oil.png" },
  ];

  return (
    <section id="products" className="py-10 bg-[#FFFFFF] border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h5 className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm mb-2">Our Portfolio</h5>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Premium Products</h2>
          <p className="text-[#1F2937] leading-relaxed">Discover our extensive range of high-quality agro-products, textiles, and daily commodities sourced from the best global suppliers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200">
              <div className="relative h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                <h3 className="text-xl font-bold text-[#1F2937] mb-2 group-hover:hidden block">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
                  High-quality imported {item.title.toLowerCase()} ready for bulk supply.
                </p>
                <a href="#contact" className="w-full py-2 px-1 rounded-md text-left font-bold text-[#11392B] hover:text-[#1a4f3d] transition-colors flex items-center justify-between border-t border-slate-100 pt-4">
                  Request For Quote
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
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
    <section id="services" className="relative py-10 bg-[#1E293B] border-b border-slate-800">
      {/* Light left strip matching reference */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-[#1E293B] hidden lg:block border-r border-slate-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-800 bg-slate-800 p-2">
              <img src="/services.png" alt="Services Team" className="w-full h-auto object-contain rounded-xl mix-blend-multiply" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }} />
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-0.5 bg-[#11392B]"></div>
              <h5 className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm">Services</h5>
            </div>
            <h2 className="text-5xl font-bold text-[#FFFFFF] mb-12 tracking-tight">Our Services</h2>
            
            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-6">
                  <Handshake size={48} className="text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#FFFFFF] mb-3">Indenting & Supply</h4>
                  <p className="text-slate-300 leading-relaxed text-base">
                    We specialize in the bulk supply of Agro items, Soybean, Rice, Sugar, Lentils, Hats, and Lungis globally.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 mr-6">
                  <UserCheck size={48} className="text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#FFFFFF] mb-3">Consultancy & Logistics</h4>
                  <p className="text-slate-300 leading-relaxed text-base">
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
    <section id="contact" className="py-10 bg-[#134E4A] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-transparent rounded-2xl shadow-2xl overflow-hidden border border-[#1a4f3d]">
          <div className="lg:w-2/5 p-0 h-[500px] lg:h-auto min-h-[500px] relative">
            <iframe
              src="https://maps.google.com/maps?q=23.836468,90.3695392&z=16&output=embed"
              className="w-full h-full border-0 absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="lg:w-3/5 p-10 lg:p-16 bg-[#134E4A] text-[#FFFFFF] relative">
            
            <div className="relative z-10">
              <h5 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-2">Request A Quote</h5>
              <h2 className="text-5xl font-black mb-8 tracking-tight text-[#FFFFFF]">Get In Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full bg-[#F9FAFB] border border-slate-200 text-[#1F2937] placeholder-slate-400 px-5 py-4 rounded-lg focus:outline-none focus:border-[#11392B] focus:ring-1 focus:ring-[#11392B] transition-all" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-[#F9FAFB] border border-slate-200 text-[#1F2937] placeholder-slate-400 px-5 py-4 rounded-lg focus:outline-none focus:border-[#11392B] focus:ring-1 focus:ring-[#11392B] transition-all" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" className="w-full bg-[#F9FAFB] border border-slate-200 text-[#1F2937] placeholder-slate-400 px-5 py-4 rounded-lg focus:outline-none focus:border-[#11392B] focus:ring-1 focus:ring-[#11392B] transition-all" />
                  </div>
                  <div>
                    <select className="w-full bg-[#F9FAFB] border border-slate-200 text-[#1F2937] placeholder-slate-400 px-5 py-4 rounded-lg focus:outline-none focus:border-[#11392B] focus:ring-1 focus:ring-[#11392B] transition-all appearance-none">
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
                  <textarea placeholder="Your Message or Order Details" rows="4" className="w-full bg-[#F9FAFB] border border-slate-200 text-[#1F2937] placeholder-slate-400 px-5 py-4 rounded-lg focus:outline-none focus:border-[#11392B] focus:ring-1 focus:ring-[#11392B] transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="bg-[#D4AF37] text-white px-10 py-4 rounded-lg font-black uppercase tracking-widest hover:bg-[#b5952f] transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-lg">
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
    <section className="py-10 bg-[#27272A] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h5 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Process</h5>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">From origin to your warehouse.</h2>
          <p className="text-emerald-100/70 text-lg">A four-step path designed for predictability.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Wavy SVG Path - Hidden on Mobile */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[80px] -translate-y-1/2 z-0 opacity-20">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100" className="overflow-visible">
              <path 
                d="M 125,50 Q 250,150 375,50 T 625,50 T 875,50" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                vectorEffect="non-scaling-stroke" 
              />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-[#52525b] bg-[#3f3f46] flex items-center justify-center text-[#D4AF37] mb-6">
                <Map size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Sourcing</h4>
              <p className="text-sm text-emerald-100/60 leading-relaxed px-2">Origin selection against your grade, volume and landing-cost brief.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-[#52525b] bg-[#3f3f46] flex items-center justify-center text-[#D4AF37] mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Quality Check</h4>
              <p className="text-sm text-emerald-100/60 leading-relaxed px-2">Lot inspection and specification match before the cargo moves.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-[#52525b] bg-[#3f3f46] flex items-center justify-center text-[#D4AF37] mb-6">
                <Truck size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Import / Export & Logistics</h4>
              <p className="text-sm text-emerald-100/60 leading-relaxed px-2">Documentation, freight and customs handled as one movement.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 relative group">
                <Flag size={32} className="relative z-10" />
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full animate-ping"></div>
              </div>
              <h4 className="text-xl font-serif font-bold mb-3 text-white">Delivery</h4>
              <p className="text-sm text-emerald-100/60 leading-relaxed px-2">On-time release to wholesalers, plants and project sites.</p>
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
    <section className="py-10 bg-[#F0F9FF] overflow-hidden border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h5 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-6">Client Voice</h5>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1F2937]">What partners say.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 shadow-sm border border-slate-200 relative text-center rounded-2xl min-h-[350px] flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <Quote className="text-[#D4AF37] w-12 h-12 opacity-10" />
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out w-full" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <p className="text-2xl md:text-3xl font-serif text-[#1F2937] leading-relaxed mb-10">
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
                  ? 'bg-[#11392B] shadow-[0_0_10px_rgba(17,57,43,0.3)] scale-110' 
                  : 'bg-slate-300 hover:bg-slate-400'
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
    <footer className="relative bg-[#F8FAFC] text-[#475569] pt-16 pb-16 border-t border-slate-200">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="bg-transparent p-0 rounded-xl inline-block mb-6 shadow-sm">
              <div className="flex items-center space-x-2">
                 <img src="/new_logo.png" alt="Logo" className="w-20 h-20 object-cover rounded-full" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=P+W&background=11392B&color=fff&rounded=true" }} />
                 <span className="text-2xl font-black text-[#11392B] tracking-tighter uppercase leading-none">PRESTONWOOD <span className="text-[#D4AF37]">TRADING</span></span>
              </div>
            </div>
            <p className="text-[#475569] leading-relaxed text-base mb-2 font-medium">Premium commodities. Trusted worldwide.</p>
            <p className="text-[#475569] leading-relaxed text-base">
              Import, export and wholesale distribution of food commodities and natural stone from Dhaka.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-[#475569] mb-6 uppercase tracking-wider">Our Products</h4>
            <ul className="space-y-4 text-[#475569] text-base font-medium">
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors flex items-center"><ChevronRight size={16} className="mr-2 text-[#D4AF37]" />Rice</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors flex items-center"><ChevronRight size={16} className="mr-2 text-[#D4AF37]" />Sugar</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors flex items-center"><ChevronRight size={16} className="mr-2 text-[#D4AF37]" />Flour & Wheat</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors flex items-center"><ChevronRight size={16} className="mr-2 text-[#D4AF37]" />Edible Oil</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors flex items-center"><ChevronRight size={16} className="mr-2 text-[#D4AF37]" />Lentils</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-[#475569] mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 text-base">
              <div className="flex items-start border-b border-slate-200 pb-3">
                <div className="w-24 text-[#D4AF37] font-bold text-sm mt-1 uppercase tracking-wider">Office</div>
                <div className="flex-1 text-[#475569]">
                  Dhaka Office: House-1263 (Level-3), Road-10, Avenue 2, Mirpur DOHS, Dhaka-1216, Bangladesh.
                </div>
              </div>
              <div className="flex items-center border-b border-slate-200 pb-3 pt-1">
                <div className="w-24 text-[#D4AF37] font-bold text-sm uppercase tracking-wider">Direct</div>
                <div className="flex-1 text-[#475569]">+880 1811-810351</div>
              </div>
              <div className="flex items-center border-b border-slate-200 pb-3 pt-1">
                <div className="w-24 text-[#D4AF37] font-bold text-sm uppercase tracking-wider">Call</div>
                <div className="flex-1 text-[#475569]">+880 1883-079289</div>
              </div>
              <div className="flex items-center pt-1">
                <div className="w-24 text-[#D4AF37] font-bold text-sm uppercase tracking-wider">Email</div>
                <div className="flex-1 text-[#475569] break-all">info@prestonwoodtrading.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 z-20 hidden md:block">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-14 h-14 bg-[#D4AF37] hover:bg-[#b5952f] text-[#11392B] rounded-xl flex items-center justify-center transition-colors shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      icon: <Globe size={24} className="text-[#D4AF37]" />,
      title: "Global Procurement",
      description: "Identifying and securing high-quality commodities from trusted international and local suppliers to ensure continuous availability.",
      img: "/global_procurement.jpg"
    },
    {
      icon: <Archive size={24} className="text-[#D4AF37]" />,
      title: "Bulk Supply & Indenting",
      description: "Managing large-scale orders for agro-products, textiles, and daily necessities with competitive pricing and reliability.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <ShieldCheck size={24} className="text-[#D4AF37]" />,
      title: "Quality Assurance",
      description: "Implementing rigorous multi-point inspections to guarantee that all products meet international trade standards.",
      img: "/quality_compliance.jpg"
    },
    {
      icon: <TrendingUp size={24} className="text-[#D4AF37]" />,
      title: "Trade Finance & Investment",
      description: "Facilitating secure financial structures like Letters of Credit (LC) and escrow to minimize counterparty risk.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Clock size={24} className="text-[#D4AF37]" />,
      title: "Logistics & Freight",
      description: "Coordinating seamless ocean freight, customs clearance, and inland transportation for timely deliveries.",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Handshake size={24} className="text-[#D4AF37]" />,
      title: "Strategic Partnerships",
      description: "Building long-term, mutually beneficial relationships between ASEAN manufacturers and global consumer markets.",
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="what-we-do" className="py-10 bg-[#0F172A] text-[#FFFFFF] relative overflow-hidden border-b border-slate-800">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
            <h5 className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm">Work Focus</h5>
            <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#FFFFFF]">What We Do</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            We operate at the intersection of local expertise and global reach, orchestrating complex supply chains to deliver essential commodities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <div key={index} className="group flex flex-col bg-[#1E293B] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-800">
              <div className="relative h-48 overflow-hidden bg-[#0F172A]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-[#1E293B] relative z-10">
                <h3 className="text-xl font-bold mb-3 text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm flex-grow">
                  {item.description}
                </p>
              </div>
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
