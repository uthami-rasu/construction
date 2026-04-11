import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// =============================================
// EMAILJS CONFIGURATION - From Environment Variables
// =============================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
// =============================================

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    const userEmail = formData.get("user_email");
    const userName = formData.get("user_name");
    const userMessage = formData.get("message");

    // Email template params - MUST match your EmailJS template variables
    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      message: userMessage,
    };

    // Send email to user
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
    <section
      id="contact-us"
      className="relative w-full overflow-hidden py-28 md:py-16"
      style={{ background: 'linear-gradient(135deg, #080229 0%, #120b4a 100%)' }}
    >
      {/* Main bg: Dark Charcoal with Yellow/Gold Accents */}
      <div className="p-10 md:p-14 lg:p-20 flex flex-col items-center text-center relative overflow-hidden">
        {/* White grid overlay — matches reference */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,184,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,184,0,0.05) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow blobs - Yellow/Gold theme */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#FFB800]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#FFCB0F]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 relative z-10"
        >
          <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.5em]">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-black text-white uppercase leading-tight mt-3">
            Do You Have Any <span className="text-white/80">Questions?</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 tracking-widest uppercase">
            Feel free to contact us — we respond fast
          </p>
        </motion.div>

        {/* Form — centered, matches reference layout */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-3xl relative z-10 space-y-4"
        >
          {/* Row 1: Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="flex-1 px-7 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/50 text-base font-medium outline-none focus:bg-white/30 focus:ring-2 focus:ring-[#FFB800]/40 transition-all"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="flex-1 px-7 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/50 text-base font-medium outline-none focus:bg-white/30 focus:ring-2 focus:ring-[#FFB800]/40 transition-all"
            />
          </div>

          {/* Row 2: Message + Submit */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={3}
              className="flex-1 px-7 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/50 text-base font-medium outline-none focus:bg-white/30 focus:ring-2 focus:ring-[#FFB800]/40 transition-all resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative w-full sm:w-auto bg-[#ffcb0f] text-black px-10 py-5 font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 flex items-center gap-3 justify-center shadow-2xl [transform:skewX(-15deg)] rounded-sm overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 [transform:skewX(15deg)] flex items-center gap-2">
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </span>
              {/* Glossy sheen effect on hover */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[15deg]"></div>
            </button>
          </div>

          {/* Feedback messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-white font-semibold text-sm"
            >
              <CheckCircle2 className="w-5 h-5" /> Message sent! We'll get back
              to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-100 font-semibold text-sm"
            >
              <AlertCircle className="w-5 h-5" /> Something went wrong. Please
              try again.
            </motion.div>
          )}
        </motion.form>
      </div>

      {/* Footer bar */}
      {/* <div className="bg-gray-950 py-5 text-center">
        <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Krrish Construction. All Rights Reserved.
        </p>
      </div> */}
    </section>
  );
};

export default ContactSection;
