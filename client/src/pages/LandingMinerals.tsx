/*
 * Landing Page: Minerals & Chemicals Industry
 * Google Ads optimized landing page with inquiry form and compliance
 */
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight, Send, Beaker } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const painPoints = [
  "Abrasive mineral slurries cause rapid media wear and high replacement costs",
  "Metal contamination from steel balls affects downstream product purity",
  "Inconsistent grinding results between batches reduce process reliability",
  "High energy consumption from low-density media increases operating costs",
];

const solutions = [
  "Ultra-low wear rate (<0.01%) extends media lifespan by 3–5× vs. alternatives",
  "Chemically inert 95% YSZ ensures very low contamination (tested)",
  "Tight size distribution delivers repeatable grinding results batch after batch",
  "High density (>6.0 g/cm³) improves grinding efficiency and reduces energy use",
];

const recommendedSizes = [
  { range: "0.6 – 1.0 mm", use: "Fine chemical grinding, pigment processing" },
  { range: "1.0 – 3.0 mm", use: "Mineral processing, calcium carbonate" },
  { range: "3.0 – 20 mm", use: "Ball mills, heavy-duty mineral grinding" },
];

export default function LandingMinerals() {
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", country: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); toast.success("Inquiry submitted! We will respond within 12 hours."); };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/applications" className="hover:text-navy transition-colors">Applications</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Minerals &amp; Chemicals</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.qualityLab} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Beaker className="w-5 h-5 text-industrial-orange" />
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Industry Solution</span>
            </div>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Zirconia Beads for Minerals &amp; Chemicals
            </h1>
            <p className="text-white/70 leading-relaxed mb-8">
              High-performance zirconia grinding media for mineral processing, chemical milling, and industrial powder production with superior durability and efficiency.
            </p>
            <a href="#inquiry-form" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
              Get a Free Sample <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Common Challenges</h2>
              <ul className="space-y-4">
                {painPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-graphite-500">
                    <span className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Our Solutions</h2>
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-graphite-500">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Sizes */}
      <section className="py-12 bg-titanium-white">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">Recommended Bead Sizes</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {recommendedSizes.map((s) => (
              <div key={s.range} className="bg-white p-5 rounded border border-graphite-100">
                <div className="font-heading text-lg font-bold text-industrial-orange mb-1">{s.range}</div>
                <p className="text-sm text-graphite-400">{s.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-navy mb-2 text-center">Request a Free Sample</h2>
          <p className="text-graphite-400 text-sm text-center mb-8">Fill out the form below and our technical team will respond within 12 hours.</p>

          {submitted ? (
            <div className="text-center py-12 bg-green-50 rounded border border-green-200">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy mb-2">Thank You!</h3>
              <p className="text-sm text-graphite-400">We have received your inquiry and will respond within 12 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-graphite-500 font-medium mb-1.5">Company Name *</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none bg-white" placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-xs text-graphite-500 font-medium mb-1.5">Contact Person *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none bg-white" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-xs text-graphite-500 font-medium mb-1.5">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none bg-white" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs text-graphite-500 font-medium mb-1.5">Phone / WhatsApp</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none bg-white" placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-graphite-500 font-medium mb-1.5">Country / Region *</label>
                <input type="text" name="country" value={form.country} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none bg-white" placeholder="Your country" />
              </div>
              <div>
                <label className="block text-xs text-graphite-500 font-medium mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 border border-graphite-200 rounded text-sm text-navy focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange/20 outline-none bg-white resize-none" placeholder="Please describe your requirements..." />
              </div>

              <div className="flex items-start gap-2.5">
                <input type="checkbox" id="agree-minerals" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required className="mt-1 w-4 h-4 rounded border-graphite-300" />
                <label htmlFor="agree-minerals" className="text-xs text-graphite-500 leading-relaxed">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-industrial-orange hover:underline">Privacy Policy</Link>
                  {" "}and{" "}
                  <Link href="/terms" className="text-industrial-orange hover:underline">Terms</Link>.
                </label>
              </div>

              <button type="submit" disabled={!agreeTerms} className="inline-flex items-center gap-2 px-8 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
