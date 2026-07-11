import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Hotel, Radio, Utensils, CreditCard, ShoppingBag, ShoppingCart, Terminal, Tv, HeartPulse, Factory, Gem, Truck, Globe, Smartphone, Palette, Cpu, Play, Code, Database, Cloud, Settings, Link as LinkIcon, Share2, MessageSquare, HardDrive, Users, Sliders, UserPlus, Archive, Receipt, Blocks, Zap, Search, Megaphone, ThumbsUp, Hash, Laptop, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SEO from './components/SEO';

export default function App() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <SEO />
      <div className="bg-background text-foreground antialiased min-h-screen flex flex-col justify-between transition-colors duration-200">
        
        {/* Minimal Navigation Header */}
        <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={theme === 'dark' ? "/Logo.svg" : "/Logo Dark.svg"} alt="Softmake.in" className="h-14 w-auto" />
            </Link>

            {/* Nav Links - Desktop only */}
            <nav className="hidden md:flex items-center gap-6">
              
              {/* Services Hover Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesHovered(!isServicesHovered)}
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 py-4 focus:outline-none cursor-pointer"
                >
                  Services
                  <ChevronDown size={11} className={`transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Hover Dropdown Menu */}
                {isServicesHovered && (
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1000px] bg-card border border-border shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 z-50 text-left mt-2">
                    
                    {/* Column 1: Web Development & Mobile App Development */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Web Development</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/web-application-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Globe size={13} className="text-primary mr-1.5 shrink-0" />Web Application Development</Link>
                          <Link to="/services/progressive-web-apps-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Smartphone size={13} className="text-primary mr-1.5 shrink-0" />Progressive Web Apps Development</Link>
                          <Link to="/services/ecommerce-web-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><ShoppingBag size={13} className="text-primary mr-1.5 shrink-0" />E-Commerce Web Development</Link>
                          <Link to="/services/web-designing" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Palette size={13} className="text-primary mr-1.5 shrink-0" />Web Designing</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Mobile App Development</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/native-app-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Cpu size={13} className="text-primary mr-1.5 shrink-0" />Native App Development</Link>
                          <Link to="/services/android-app-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Play size={13} className="text-primary mr-1.5 shrink-0" />Android App Development</Link>
                          <Link to="/services/ios-app-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Smartphone size={13} className="text-primary mr-1.5 shrink-0" />iOS App Development</Link>
                          <Link to="/services/flutter-app-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Code size={13} className="text-primary mr-1.5 shrink-0" />Flutter App Development</Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: ERP Software Implementation & Integration */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">ERP Software Implementation</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/sap-implementation" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Database size={13} className="text-primary mr-1.5 shrink-0" />SAP Implementation</Link>
                          <Link to="/services/microsoft-365-implementation" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Cloud size={13} className="text-primary mr-1.5 shrink-0" />Microsoft 365 Implementation</Link>
                          <Link to="/services/zoho-implementation" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Settings size={13} className="text-primary mr-1.5 shrink-0" />ZOHO Implementation</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">ERP Software Integration</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/sap-integration" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><LinkIcon size={13} className="text-primary mr-1.5 shrink-0" />SAP Integration</Link>
                          <Link to="/services/microsoft-365-integration" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Share2 size={13} className="text-primary mr-1.5 shrink-0" />Microsoft 365 Integration</Link>
                          <Link to="/services/zoho-integration" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Settings size={13} className="text-primary mr-1.5 shrink-0" />ZOHO Integration</Link>
                          <Link to="/services/whatsapp-business-api" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><MessageSquare size={13} className="text-primary mr-1.5 shrink-0" />WhatsApp Business API</Link>
                          <Link to="/services/hardware-integration" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><HardDrive size={13} className="text-primary mr-1.5 shrink-0" />Hardware Integration</Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: ERP Software Solution & Zoho Products */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">ERP Software Solution</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/saas-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Cloud size={13} className="text-primary mr-1.5 shrink-0" />SaaS Development</Link>
                          <Link to="/services/crm-development" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Users size={13} className="text-primary mr-1.5 shrink-0" />CRM Development</Link>
                          <Link to="/services/custom-erp-software" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Sliders size={13} className="text-primary mr-1.5 shrink-0" />Custom ERP Software</Link>
                          <Link to="/services/hr-management-software" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><UserPlus size={13} className="text-primary mr-1.5 shrink-0" />HR Management Software</Link>
                          <Link to="/services/inventory-management-software" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Archive size={13} className="text-primary mr-1.5 shrink-0" />Inventory Management Software</Link>
                          <Link to="/services/payroll-billing-software" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Receipt size={13} className="text-primary mr-1.5 shrink-0" />Payroll Billing Software</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">ZOHO</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/zoho-products" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Blocks size={13} className="text-primary mr-1.5 shrink-0" />Zoho Products</Link>
                          <Link to="/services/zoho-one" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Zap size={13} className="text-primary mr-1.5 shrink-0" />Zoho One</Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 4: Digital Marketing & Desktop Development */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Digital Marketing</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/seo-services" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Search size={13} className="text-primary mr-1.5 shrink-0" />SEO Services</Link>
                          <Link to="/services/search-engine-marketing-services" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Megaphone size={13} className="text-primary mr-1.5 shrink-0" />Search Engine Marketing Services</Link>
                          <Link to="/services/social-media-optimization" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><ThumbsUp size={13} className="text-primary mr-1.5 shrink-0" />Social Media Optimization</Link>
                          <Link to="/services/social-media-marketing-agency" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Hash size={13} className="text-primary mr-1.5 shrink-0" />Social Media Marketing Agency</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Desktop Development</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/services/desktop-development-tauri-electron" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Laptop size={13} className="text-primary mr-1.5 shrink-0" />Desktop Development (Tauri / Electron)</Link>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Industries Hover Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setIsIndustriesHovered(true)}
                onMouseLeave={() => setIsIndustriesHovered(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsIndustriesHovered(!isIndustriesHovered)}
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 py-4 focus:outline-none cursor-pointer"
                >
                  Industries
                  <ChevronDown size={11} className={`transition-transform duration-200 ${isIndustriesHovered ? 'rotate-180' : ''}`} />
                </button>

                {/* Industries Mega Dropdown Menu */}
                {isIndustriesHovered && (
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1000px] bg-card border border-border shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 z-50 text-left mt-2">
                    
                    {/* Column 1: Consumer & Media */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Consumer & Media</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/industries/hospitality-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Hotel size={13} className="text-primary mr-1.5 shrink-0" />Hospitality Industry</Link>
                          <Link to="/industries/food-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Utensils size={13} className="text-primary mr-1.5 shrink-0" />Food Industry</Link>
                          <Link to="/industries/media-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Tv size={13} className="text-primary mr-1.5 shrink-0" />Media Industry</Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Commerce & Finance */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Commerce & Finance</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/industries/fintech-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><CreditCard size={13} className="text-primary mr-1.5 shrink-0" />Fintech Industry</Link>
                          <Link to="/industries/retail-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><ShoppingBag size={13} className="text-primary mr-1.5 shrink-0" />Retail Industry</Link>
                          <Link to="/industries/ecommerce-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><ShoppingCart size={13} className="text-primary mr-1.5 shrink-0" />E-commerce Industry</Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Tech & Communications */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Tech & Communications</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/industries/telecom-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Radio size={13} className="text-primary mr-1.5 shrink-0" />Telecom Industry</Link>
                          <Link to="/industries/it-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Terminal size={13} className="text-primary mr-1.5 shrink-0" />IT Industry</Link>
                          <Link to="/industries/health-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><HeartPulse size={13} className="text-primary mr-1.5 shrink-0" />Health Industry</Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 4: Industrial & Logistics */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-[13px] md:text-sm font-black text-primary uppercase tracking-widest font-mono mb-3 hover:text-foreground transition-colors cursor-pointer">Industrial & Logistics</h4>
                        <div className="flex flex-col gap-2">
                          <Link to="/industries/manufacturing-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Factory size={13} className="text-primary mr-1.5 shrink-0" />Manufacturing Industry</Link>
                          <Link to="/industries/mining-industry" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Gem size={13} className="text-primary mr-1.5 shrink-0" />Mining Industry</Link>
                          <Link to="/industries/supply-chain" className="text-xs md:text-sm text-card-foreground/80 hover:text-foreground hover:translate-x-[2px] transition-all font-medium inline-flex items-center"><Truck size={13} className="text-primary mr-1.5 shrink-0" />Supply Chain</Link>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>
              <Link to="/blogs" className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              
              {/* Desktop Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all focus:outline-none cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
              </button>
            </nav>

            {/* Mobile Actions (Theme toggle + Hamburger) */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all focus:outline-none cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Menu Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden border-b border-border bg-card/95 backdrop-blur z-40 px-6 py-8 flex flex-col gap-6 text-left absolute top-20 left-0 w-full shadow-lg">
              
              {/* Collapsible Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors focus:outline-none"
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-4 pl-4 border-l border-neutral-100 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">Web Development</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/web-application-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Web Application Development</Link>
                        <Link to="/services/progressive-web-apps-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Progressive Web Apps Development</Link>
                        <Link to="/services/ecommerce-web-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">E-Commerce Web Development</Link>
                        <Link to="/services/web-designing" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Web Designing</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">Mobile App Development</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/native-app-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Native App Development</Link>
                        <Link to="/services/android-app-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Android App Development</Link>
                        <Link to="/services/ios-app-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">iOS App Development</Link>
                        <Link to="/services/flutter-app-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Flutter App Development</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">ERP Software Implementation</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/sap-implementation" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">SAP Implementation</Link>
                        <Link to="/services/microsoft-365-implementation" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Microsoft 365 Implementation</Link>
                        <Link to="/services/zoho-implementation" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">ZOHO Implementation</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">ERP Software Integration</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/sap-integration" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">SAP Integration</Link>
                        <Link to="/services/microsoft-365-integration" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Microsoft 365 Integration</Link>
                        <Link to="/services/zoho-integration" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">ZOHO Integration</Link>
                        <Link to="/services/whatsapp-business-api" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">WhatsApp Business API</Link>
                        <Link to="/services/hardware-integration" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Hardware Integration</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">ERP Software Solution</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/saas-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">SaaS Development</Link>
                        <Link to="/services/crm-development" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">CRM Development</Link>
                        <Link to="/services/custom-erp-software" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Custom ERP Software</Link>
                        <Link to="/services/hr-management-software" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">HR Management Software</Link>
                        <Link to="/services/inventory-management-software" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Inventory Management Software</Link>
                        <Link to="/services/payroll-billing-software" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Payroll Billing Software</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">ZOHO</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/zoho-products" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Zoho Products</Link>
                        <Link to="/services/zoho-one" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Zoho One</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">Digital Marketing</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/seo-services" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">SEO Services</Link>
                        <Link to="/services/search-engine-marketing-services" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Search Engine Marketing Services</Link>
                        <Link to="/services/social-media-optimization" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Social Media Optimization</Link>
                        <Link to="/services/social-media-marketing-agency" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Social Media Marketing Agency</Link>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-primary uppercase font-mono mb-2">Desktop Development</h5>
                      <div className="flex flex-col gap-2 pl-2">
                        <Link to="/services/desktop-development-tauri-electron" onClick={() => setMobileMenuOpen(false)} className="text-xs text-neutral-600">Desktop Development (Tauri / Electron)</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Collapsible Industries Accordion */}
              <div className="mt-2">
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors focus:outline-none"
                >
                  <span>Industries</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileIndustriesOpen && (
                  <div className="mt-4 pl-4 border-l border-neutral-100 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                    {[
                      { title: "Hospitality Industry", desc: "Next-Gen Hotel Management Software", slug: "hospitality-industry" },
                      { title: "Telecom Industry", desc: "Telecommunication Industry", slug: "telecom-industry" },
                      { title: "Food Industry", desc: "Custom order delivery portals", slug: "food-industry" },
                      { title: "Fintech Industry", desc: "Fintech Software Development Services", slug: "fintech-industry" },
                      { title: "Retail Industry", desc: "Retail Software Solutions", slug: "retail-industry" },
                      { title: "E-commerce Industry", desc: "E-commerce Software Development Company", slug: "ecommerce-industry" },
                      { title: "IT Industry", desc: "Software for IT Management", slug: "it-industry" },
                      { title: "Media Industry", desc: "Media Industry Software Solutions", slug: "media-industry" },
                      { title: "Health Industry", desc: "Healthcare Software Development Company", slug: "health-industry" },
                      { title: "Manufacturing Industry", desc: "Manufacturing Software Solutions", slug: "manufacturing-industry" },
                      { title: "Mining Industry", desc: "Custom Mining Industry Software Solutions", slug: "mining-industry" },
                      { title: "Supply Chain", desc: "Supply Chain Management Software Solutions", slug: "supply-chain" }
                    ].map((ind, i) => (
                      <Link
                        key={i}
                        to={`/industries/${ind.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-neutral-650 block text-left"
                      >
                        <span className="font-semibold text-neutral-800 block">{ind.title}</span>
                        <span className="text-[10px] text-neutral-400 block mt-0.5">{ind.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors">
                Blogs
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="flex-1 max-w-[1440px] w-full mx-auto py-12 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Designed Premium Dark Footer */}
        <footer className="border-t border-neutral-900 bg-neutral-950 pt-16 pb-8 mt-12 w-full text-neutral-300">
          <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-4 flex flex-col items-start text-left gap-4">
              <Link to="/">
                <img src="/Logo.svg" alt="Softmake.in Logo" className="h-12 w-auto" />
              </Link>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mt-2 font-medium">
                We engineer scalable, secure, and performance-driven custom software systems styled for durability. We design solutions that help organizations run smarter and scale faster.
              </p>
            </div>

            {/* Column 2: Capabilities Quick links */}
            <div className="md:col-span-3 flex flex-col items-start text-left">
              <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono mb-4">Capabilities</h4>
              <div className="flex flex-col gap-2">
                <Link to="/services" className="text-xs text-neutral-450 hover:text-white transition-colors">Web Applications</Link>
                <Link to="/services" className="text-xs text-neutral-450 hover:text-white transition-colors">Mobile Engineering</Link>
                <Link to="/services" className="text-xs text-neutral-450 hover:text-white transition-colors">Custom ERP Platforms</Link>
                <Link to="/services" className="text-xs text-neutral-450 hover:text-white transition-colors">API & Integrations</Link>
              </div>
            </div>

            {/* Column 3: Corporate Links */}
            <div className="md:col-span-2 flex flex-col items-start text-left">
              <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono mb-4">Company</h4>
              <div className="flex flex-col gap-2">
                <Link to="/services" className="text-xs text-neutral-450 hover:text-white transition-colors">Services</Link>
                <Link to="/industries" className="text-xs text-neutral-450 hover:text-white transition-colors">Industries</Link>
                <Link to="/blogs" className="text-xs text-neutral-450 hover:text-white transition-colors">Blogs</Link>
                <Link to="/contact" className="text-xs text-neutral-450 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            {/* Column 4: Contact details */}
            <div className="md:col-span-3 flex flex-col items-start text-left">
              <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-mono mb-4">Connect</h4>
              <div className="flex flex-col gap-2.5">
                <div>
                  <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider font-mono">Direct</div>
                  <a href="mailto:info@softmake.in" className="text-xs text-neutral-200 hover:text-primary transition-colors font-sans font-semibold">
                    info@softmake.in
                  </a>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider font-mono">Headquarters</div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans font-medium">
                    Davanagere, Karnataka
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="max-w-[1440px] mx-auto px-6 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-neutral-550 font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} Softmake.in IT Solutions. All rights reserved.
            </span>
            
            <div className="flex items-center gap-6 text-[10px] text-neutral-550 font-mono uppercase tracking-widest">
              <Link to="/privacy" className="hover:text-neutral-350 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-neutral-350 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}