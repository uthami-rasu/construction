import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, DollarSign, Calendar, ArrowUpRight, ChevronDown } from "lucide-react";

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Newest First");

  const categories = ["ALL PROJECTS", "RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL"];

  const projects = [
    {
      id: 1,
      title: "Corporate Headquarters Tower",
      category: "COMMERCIAL",
      location: "Downtown Financial District",
      budget: "$45M",
      timeline: "24 Months",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Lakeside Luxury Residence",
      category: "RESIDENTIAL",
      location: "Westlake Hills",
      budget: "$8.5M",
      timeline: "18 Months",
      year: "2024",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Distribution Center Complex",
      category: "INDUSTRIAL",
      location: "Industrial Park East",
      budget: "$32M",
      timeline: "16 Months",
      year: "2023",
      image: "https://i.pinimg.com/1200x/8f/b3/aa/8fb3aaa6493b9b57c20e6e918809169c.jpg",
    },
    {
      id: 4,
      title: "Urban Living Apartments",
      category: "RESIDENTIAL",
      location: "Midtown District",
      budget: "$11.8M",
      timeline: "22 Months",
      year: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Advanced Manufacturing Hub",
      category: "INDUSTRIAL",
      location: "Tech Valley",
      budget: "$15.2M",
      timeline: "28 Months",
      year: "2024",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Heritage Townhomes",
      category: "RESIDENTIAL",
      location: "Historic Quarter",
      budget: "$12M",
      timeline: "14 Months",
      year: "2024",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredProjects = activeFilter === "ALL PROJECTS" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-sm font-black tracking-[0.3em] uppercase text-[#00C2FF] mb-3">
              OUR <span className="text-gray-900">PORTFOLIO</span>
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 uppercase leading-none tracking-tighter">
              PROVEN <br />
              EXCELLENCE
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-lg mb-2"
          >
            Explore our portfolio of completed projects spanning residential, commercial, and industrial sectors. Each project showcases our commitment to quality, precision, and innovation.
          </motion.p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          {/* Categories with Premium Sliding Tab Animation */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-7 py-3.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-sm z-10 ${
                  activeFilter === cat ? "text-white scale-105" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#00C2FF] shadow-[0_10px_20px_rgba(0,194,255,0.3)] z-[-1]"
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      mass: 0.8
                    }}
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex items-center gap-4">
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Sort by</span>
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="px-6 py-3 bg-white border border-gray-100 rounded-sm text-[11px] font-black text-gray-800 uppercase flex items-center gap-8 group hover:border-[#00C2FF]/30 transition-all shadow-sm"
            >
              {sortBy}
              <ChevronDown className={`w-4 h-4 text-gray-300 transition-transform duration-500 ${isSortOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute top-full right-0 mt-3 w-56 bg-white border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-sm z-50 overflow-hidden origin-top-right backdrop-blur-sm"
                >
                  {["Newest First", "Oldest First", "Budget: High to Low", "Budget: Low to High"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setIsSortOpen(false); }}
                      className="w-full px-6 py-4 text-left text-[11px] font-black text-gray-500 hover:bg-[#00C2FF]/5 hover:text-[#00C2FF] transition-colors border-b border-gray-50 last:border-none"
                    >
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Project Grid with Agency-Level Layout Physics */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]"
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  layout: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: { duration: 0.5, delay: idx * 0.04 }
                }}
                className="group bg-white rounded-sm overflow-hidden border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge - Forced SkyBlue */}
                  <div className="absolute top-4 right-4 bg-[#00C2FF] text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-xl">
                    {project.category}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-white text-[#00C2FF] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-black text-gray-900 mb-1.5 leading-tight group-hover:text-[#00C2FF] transition-colors uppercase">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-4 font-poppins">
                    <MapPin className="w-3.5 h-3.5 text-[#00C2FF]" />
                    {project.location}
                  </div>

                  {/* Info Table */}
                  <div className="grid grid-cols-2 gap-y-3 border-t border-gray-50 pt-4 mb-4">
                    <div>
                      <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Budget</span>
                      <span className="text-xs font-black text-gray-700">{project.budget}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-xs font-black text-gray-700">{project.timeline}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                      Completed {project.year}
                    </span>
                    <button className="text-[#00C2FF] transform group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
