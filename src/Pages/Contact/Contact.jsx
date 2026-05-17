"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import SparkleBadge from "../AboutMe/SparkleBadge";

// --- Form Component (Separated with its own glass style) ---
const Form = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md rounded-[2rem] shadow-2xl"
    >
      <form className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Kael Ardent"
            className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 px-5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="hello@kaelardent.dev"
            className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 px-5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Let's build something obsidian..."
            className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 px-5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white py-4 font-bold text-black transition-all hover:scale-[1.02] active:scale-95"
        >
          <span className="flex items-center gap-2">
            Send Message <Send size={18} />
          </span>
        </button>
      </form>
    </motion.div>
  );
};

// --- Contact Card (Individual floating items) ---
const ContactCard = ({ icon: Icon, text, href, isWhatsApp, delay }) => (
  <motion.a
    href={href}
    target={isWhatsApp ? "_blank" : "_self"}
    rel={isWhatsApp ? "noopener noreferrer" : ""}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.08] hover:border-white/20"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
      <Icon size={20} />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-tighter text-white/30">
        Reach out via
      </span>
      <span className="text-sm font-medium text-white/90">{text}</span>
    </div>
  </motion.a>
);

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background Glows (Separated from the container) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              <SparkleBadge text="Contact" /> Me
            </h2>
            <p className="max-w-md text-lg text-white/40 leading-relaxed">
              Available for new projects and creative collaborations. Let's turn
              your ideas into digital reality.
            </p>
          </motion.div>
        </div>

        {/* Main Content: Split and Separated */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info (List of floating cards) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500 mb-8">
              Contact Details
            </h3>

            <div className="space-y-3">
              <ContactCard
                icon={Mail}
                text="alaminislam43.bd@email.com"
                href="mailto:alaminislam43.bd@email.com"
                delay={0.1}
              />
              <ContactCard
                icon={Phone}
                text="+880 182 1858 917"
                href="tel:+8801821858917"
                delay={0.2}
              />
              <ContactCard
                icon={MessageSquare}
                text="Chat on WhatsApp"
                href="https://wa.me/8801821858917"
                isWhatsApp={true}
                delay={0.3}
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-10 p-6 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                  Current Status
                </span>
              </div>
              <p className="text-sm text-white/40">
                Currently accepting{" "}
                <span className="text-white">Q2 Retainers</span> and one-off
                high-impact projects.
              </p>
            </div>
          </div>

          {/* Right: The Form (Distinct floating card) */}
          <div className="lg:col-span-7">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
