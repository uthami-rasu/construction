import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// =============================================
// EMAILJS CONFIGURATION
// Replace these with your actual EmailJS IDs
// =============================================
const EMAILJS_SERVICE_ID = "service_gf1d0qc";
const EMAILJS_TEMPLATE_ID = "template_65za207";
const EMAILJS_PUBLIC_KEY = "J-p_0VaO_aCdom3V3";
const ADMIN_EMAIL = "krrishconstruction95@gmail.com";
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
    <section id="contact" className="relative overflow-hidden font-poppins">
      {/* Main bg gradient */}
      <div className="relative bg-linear-to-br from-[#0096c7] via-[#00b4d8] to-[#48cae4] py-28 px-6 min-h-[80vh] flex flex-col items-center justify-center">
        {/* White grid overlay — matches reference */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#023e8a]/20 rounded-full blur-[100px] pointer-events-none" />

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
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-montserrat font-black text-white uppercase leading-tight mt-3">
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
              className="flex-1 px-7 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/50 text-base font-medium outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="flex-1 px-7 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/50 text-base font-medium outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all"
            />
          </div>

          {/* Row 2: Message + Submit */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={3}
              className="flex-1 px-7 py-5 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/50 text-base font-medium outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all resize-none"
            />
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="sm:self-stretch px-10 py-5 rounded-2xl bg-gray-900 text-white font-black uppercase tracking-widest text-xs shadow-2xl flex items-center justify-center gap-3 disabled:opacity-60 transition-all min-w-[140px]"
            >
              {status === "sending" ? (
                <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              Submit
            </motion.button>
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
