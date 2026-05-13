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
import logo from "../assets/images/svg/kc-white.svg";


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
    { label: "Pricing", icon: Hammer, href: "#pricing", path: "/pricing" },
    { label: "Contact Us", icon: Mail, href: "#contact-us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-visible ${
        isScrolled
          ? "border-b border-white/[0.06] bg-[#0a0a0a]/70 py-3.5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent py-5 sm:py-6 lg:py-6"
      }`}
    >
      <div
        className={`container mx-auto px-6 relative flex w-full gap-3 sm:gap-4 overflow-visible ${
          isScrolled
            ? "items-center min-h-0"
            : "items-center lg:items-end lg:min-h-[3.25rem]"
        }`}
      >
        {/* Reserves space on lg so links stay clear of the overlapping logo (hero / top of page only) */}
        {!isScrolled && (
          <div
            className="hidden lg:block shrink-0 w-[12.5rem] xl:w-[15.5rem] 2xl:w-[17rem] pointer-events-none"
            aria-hidden
          />
        )}

        <Link
          to="/"
          className={`flex flex-col items-start shrink-0 group outline-none focus-visible:ring-2 focus-visible:ring-[#3EB1A4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm ${
            isScrolled
              ? "relative z-20"
              : "relative z-30 max-lg:relative max-lg:self-start max-lg:-translate-y-2 lg:absolute lg:left-6 lg:-top-2 xl:-top-3"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="Krrish Construction"
            className={`transition-all duration-500 origin-left relative w-auto max-w-[min(92vw,420px)] object-contain object-left shrink-0 drop-shadow-[0_2px_12px_rgba(62,177,164,0.35)] group-hover:drop-shadow-[0_4px_20px_rgba(62,177,164,0.45)] ${
              isScrolled
                ? "h-[5rem] sm:h-[6.75rem] md:h-28 lg:h-32"
                : "h-[5.25rem] sm:h-28 md:h-32 lg:h-36"
            }`}
          />
        </Link>

        <div className="flex flex-1 min-w-0 justify-end items-center gap-2 lg:pb-0.5">
        {/* Navigation */}
        <nav
          className={`hidden lg:flex items-center ${
            isScrolled ? "gap-4 xl:gap-10" : "gap-5 xl:gap-9 2xl:gap-10"
          }`}
        >
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`group flex items-center font-bold transition-all uppercase tracking-[0.12em] whitespace-nowrap ${
                  isScrolled
                    ? "gap-1 xl:gap-3 text-xs xl:text-sm"
                    : "gap-2 xl:gap-2.5 text-sm xl:text-[0.9375rem]"
                } ${
                  location.pathname === item.path ? "text-[#FFCB0F]" : "text-white hover:text-[#FFCB0F]"
                }`}
              >
                <item.icon
                  className={`transition-transform group-hover:scale-110 shadow-sm flex-shrink-0 ${
                    isScrolled ? "w-4 xl:w-5 h-4 xl:h-5" : "w-5 h-5 xl:w-[1.35rem] xl:h-[1.35rem]"
                  }`}
                />
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`group flex items-center font-bold text-white hover:text-[#FFCB0F] transition-all uppercase tracking-[0.12em] whitespace-nowrap ${
                  isScrolled
                    ? "gap-1 xl:gap-3 text-xs xl:text-sm"
                    : "gap-2 xl:gap-2.5 text-sm xl:text-[0.9375rem]"
                }`}
              >
                <item.icon
                  className={`transition-transform group-hover:scale-110 shadow-sm flex-shrink-0 ${
                    isScrolled ? "w-4 xl:w-5 h-4 xl:h-5" : "w-5 h-5 xl:w-[1.35rem] xl:h-[1.35rem]"
                  }`}
                />
                {item.label}
              </a>
            )
          ))}
          <div className="h-6 w-px bg-white/20 mx-2 xl:mx-4"></div>
          {/* <button className="text-white hover:text-[#FFCB0F] transition-all p-2 hover:bg-white/10 rounded-full">
            <Search className="w-6 h-6" />
          </button> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
        </div>
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
                  className={`flex items-center gap-5 text-lg font-black uppercase tracking-widest transition-colors ${
                    location.pathname === item.path ? "text-[#FFCB0F]" : "text-white hover:text-[#FFCB0F]"
                  }`}
                >
                  <item.icon className={`w-6 h-6 transition-colors ${location.pathname === item.path ? "text-[#FFCB0F]" : "text-white group-hover:text-[#FFCB0F]"}`} />
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="group flex items-center gap-5 text-lg font-black text-white hover:text-[#FFCB0F] transition-colors uppercase tracking-widest"
                >
                  <item.icon className="w-6 h-6 text-white group-hover:text-[#FFCB0F] transition-colors" />
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
