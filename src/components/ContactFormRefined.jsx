import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight
} from "lucide-react";

// =============================================
// EMAILJS CONFIGURATION - From Environment Variables
// =============================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// =============================================

const ContactFormRefined = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    const userEmail = formData.get("user_email");
    const userName = formData.get("user_name");
    const userPhone = formData.get("user_phone");
    const userMessage = formData.get("message");

    // Email template params - MUST match your EmailJS template variables
    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      user_phone: userPhone,
      message: userMessage,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact-form" className="bg-white py-16 md:py-20 font-poppins relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-10">
          {/* Left Side: Badge and Heading */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black">
                GET <span className="text-[#FFCB0F]">STARTED</span>
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-5xl lg:text-5xl font-black text-[#1a1a1a] uppercase leading-[0.95] tracking-tighter"
            >
              GET IN TOUCH <br />
              WITH US.
            </motion.h2>
          </div>

          {/* Center-Right Side: Description and Icons */}
          <div className="flex flex-col md:flex-row items-start gap-12 lg:max-w-xl">
             <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed font-medium"
            >
              We're here to help and answer any question you might have. We look forward
              to hearing from you! Whether you need support, have a question about our
              services, or just want to say hello, feel free to reach out.
            </motion.p>

            {/* Vertical Social Sidebar */}
            <div className="flex flex-row md:flex-col gap-6 items-center">
              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/KrrishConstruction/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "#f8f9fa", color: "#FFCB0F" }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/krrish_construction/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "#f8f9fa", color: "#FFCB0F" }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.166.054 1.791.246 2.212.41.558.217.954.477 1.373.896.419.419.678.815.896 1.373.164.42.356 1.045.41 2.212.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.166-.247 1.792-.41 2.212-.218.558-.478.955-.896 1.373-.42.419-.816.679-1.373.896-.42.164-1.045.356-2.212.41-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.166-.056-1.792-.247-2.212-.41-.558-.218-.955-.478-1.373-.896-.419-.42-.679-.816-.896-1.373-.164-.42-.356-1.045-.41-2.212C2.012 15.584 2 15.204 2 12s.012-3.584.07-4.85c.054-1.166.246-1.792.41-2.212.217-.558.477-.955.896-1.373.419-.419.815-.679 1.373-.896.42-.164 1.045-.356 2.212-.41 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.117.6c-.793.273-1.474.646-2.155 1.327-.681.681-1.054 1.362-1.327 2.155-.267.788-.47 1.658-.535 2.936C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.062 1.278.261 2.148.535 2.936.273.793.646 1.474 1.327 2.155.681.681 1.362 1.054 2.155 1.327.788.267 1.658.47 2.936.535C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.062 2.148-.261 2.936-.535.793-.273 1.474-.646 2.155-1.327.681-.681 1.054-1.362 1.327-2.155.267-.788.47-1.658.535-2.936C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.062-1.278-.261-2.148-.535-2.936-.273-.793-.646-1.474-1.327-2.155-.681-.681-1.362-1.054-2.155-1.327-.788-.267-1.658-.47-2.936-.535C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://api.whatsapp.com/send/?phone=918610813419&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "#f8f9fa", color: "#FFCB0F" }}
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-900 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Refined Form Layout */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Row 1: Name, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-transparent border-b border-gray-200 py-3 text-lg text-gray-900 font-semibold outline-none focus:border-[#FFCB0F] transition-colors"
                placeholder="Ex. John Doe"
              />
            </div>
            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-transparent border-b border-gray-200 py-3 text-lg text-gray-900 font-semibold outline-none focus:border-[#FFCB0F] transition-colors"
                placeholder="Ex. john@example.com"
              />
            </div>
            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Phone Number (optional)</label>
              <input
                type="tel"
                name="user_phone"
                className="w-full bg-transparent border-b border-gray-200 py-3 text-lg text-gray-900 font-semibold outline-none focus:border-[#FFCB0F] transition-colors"
                placeholder="Ex. +1 234 567 890"
              />
            </div>
          </div>

          {/* Row 2: Message Field */}
          <div className="relative">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Message</label>
            <textarea
              name="message"
              required
              rows={2}
              className="w-full bg-transparent border-b border-gray-200 py-3 text-lg text-gray-900 font-semibold outline-none focus:border-[#FFCB0F] transition-colors resize-none overflow-hidden"
              placeholder="Tell us about your project or inquiry..."
            />
          </div>

          {/* Submit Button - Yellow Skewed */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative bg-[#FFCB0F] text-black px-10 py-5 font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl [transform:skewX(-15deg)] rounded-sm overflow-hidden"
            >
              <span className="relative z-10 [transform:skewX(15deg)] flex items-center gap-2">
                {status === "sending" ? "Processing..." : "Leave us a Message"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Glossy sheen effect on hover */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]"></div>
            </button>

            {/* Response Messages */}
            <div className="mt-4 h-6">
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                  <CheckCircle2 size={18} /> Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                  <AlertCircle size={18} /> Something went wrong. Please try again.
                </div>
              )}
            </div>
          </motion.div>
        </motion.form>
      </div>
      
      {/* Structural bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gray-100"></div>
    </section>
  );
};

export default ContactFormRefined;
