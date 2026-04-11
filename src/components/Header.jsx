import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  Home,
  Info,
  Hammer,
  Briefcase,
  Mail,
} from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    if (item.path) {
      // It's a page link
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    const href = item.href;
    const id = href.replace("#", "");

    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      navigate("/" + href);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", icon: Home, href: "#home", path: "/" },
    { label: "About Us", icon: Info, href: "#about-us", path: "/about" },
    { label: "Services", icon: Hammer, href: "#services", path: "/services" },
    { label: "Portfolio", icon: Briefcase, href: "#portfolio", path: "/portfolio" },
    { label: "Pricing", icon: Hammer, href: "#pricing", path: "/pricing" },
    { label: "Contact Us", icon: Mail, href: "#contact-us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-visible ${isScrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between overflow-visible">
        <Link 
          to="/" 
          className="flex flex-col items-start pt-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={logo} 
            alt="Krrish Construction" 
            className={`transition-all duration-500 origin-left drop-shadow-[0_2px_10px_rgba(255,203,15,0.2)] group-hover:drop-shadow-[0_2px_15px_rgba(255,203,15,0.4)] relative z-20 w-auto ${
              isScrolled 
                ? "h-10 md:h-12 scale-[1.4] translate-y-0.5 ml-4" 
                : "h-10 md:h-12 ml-0 md:ml-4 scale-[1.8] md:scale-[2]"
            }`} 
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`group flex items-center gap-1 xl:gap-3 text-xs xl:text-sm font-bold transition-all uppercase tracking-[0.15em] whitespace-nowrap ${
                  location.pathname === item.path ? "text-[#FFCB0F]" : "text-white hover:text-[#FFCB0F]"
                }`}
              >
                <item.icon className="w-4 xl:w-5 h-4 xl:h-5 transition-transform group-hover:scale-110 shadow-sm flex-shrink-0" />
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="group flex items-center gap-1 xl:gap-3 text-xs xl:text-sm font-bold text-white hover:text-[#FFCB0F] transition-all uppercase tracking-[0.15em] whitespace-nowrap"
              >
                <item.icon className="w-4 xl:w-5 h-4 xl:h-5 transition-transform group-hover:scale-110 shadow-sm flex-shrink-0" />
                {item.label}
              </a>
            )
          ))}
          <div className="h-6 w-px bg-white/20 mx-2 xl:mx-4"></div>
          <button className="text-white hover:text-[#FFCB0F] transition-all p-2 hover:bg-white/10 rounded-full">
            <Search className="w-6 h-6" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/10 py-10 px-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-5 text-lg font-black uppercase tracking-widest ${
                    location.pathname === item.path ? "text-[#FFCB0F]" : "text-white hover:text-[#FFCB0F]"
                  }`}
                >
                  <item.icon className="w-6 h-6 text-[#FFCB0F]" />
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center gap-5 text-lg font-black text-white hover:text-[#FFCB0F] transition-colors uppercase tracking-widest"
                >
                  <item.icon className="w-6 h-6 text-[#FFCB0F]" />
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
