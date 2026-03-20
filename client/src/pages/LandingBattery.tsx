/*
 * Landing Page: Battery Materials Industry
 * Ultra-high conversion landing page with paired pain-solution layout
 * Background: Matches Home page exactly (bg-navy) - NO WHITE SECTIONS
 */
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleAlert as AlertCircle, CircleCheck as CheckCircle, ChevronRight, Send, Battery, Zap, Shield, Target, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const pairedChallengesSolutions = [
  {
    challenge: "Magnetic impurity (Iron) contamination",
    solution: "High-purity YSZ ensures ZERO metal contamination",
    icon: Shield,
  },
  {
    challenge: "Low nano-grinding efficiency",
    solution: "High density (6.0g/cm³) delivers massive kinetic energy for rapid dispersion",
    icon: Zap,
  },
  {
    challenge: "High media wear rates & costs",
    solution: "Ultra-low wear rate (<0.01%) significantly reduces Total Cost of Ownership (TCO)",
    icon: Target,
  },
  {
    challenge: "Inconsistent particle sizes",
    solution: "Ensures stable D50/D90 distribution for premium battery slurries",
    icon: CheckCircle,
  },
];

const applications = [
  {
    icon: Battery,
    title: "LFP (Lithium Iron Phosphate) Cathodes",
    desc: "Ultra-pure grinding for superior electrochemical performance",
  },
  {
    icon: FlaskConical,
    title: "Silicon-Carbon Anodes",
    desc: "Nano-scale dispersion for high-capacity battery materials",
  },
  {
    icon: Zap,
    title: "Solid-State Battery Electrolytes",
    desc: "Precision milling for next-generation battery technology",
  },
  {
    icon: Shield,
    title: "CNT (Carbon Nanotube) Conductive Pastes",
    desc: "Uniform dispersion for enhanced conductivity",
  },
];

const sizeRecommendations = [
  {
    range: "0.1 - 0.3 mm",
    application: "Nano-grinding for Silicon-Carbon anodes & CNT pastes",
    target: "D50 < 100nm",
  },
  {
    range: "0.3 - 0.5 mm",
    application: "Ultra-fine milling for premium LFP cathode materials",
    target: "D50: 100-500nm",
  },
];

export default function LandingBattery() {
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    slurryType: "",
    impurityLimit: "",
    targetD50D90: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xojnbblz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      toast.success("Inquiry submitted! We will respond within 12 hours.");
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy">
      <Header />

      {/* Breadcrumb - Dark Theme */}
      <div className="bg-navy/95 border-b border-white/10">
        <div className="container py-3 flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="hover:text-industrial-orange transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/applications" className="hover:text-industrial-orange transition-colors">Applications</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Battery Materials</span>
        </div>
      </div>

      {/* Hero Section - EXACT same bg-navy as Home */}
      <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.factory} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy"></div>
        <div className="container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Battery className="w-6 h-6 text-industrial-orange" />
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Industry Solution</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ultra-Pure Zirconia Beads for Battery Material Milling
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Engineered for lithium-ion battery slurries. Achieve nano-scale dispersion with absolute zero magnetic impurity contamination.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 bg-industrial-orange text-white font-semibold text-base rounded hover:bg-industrial-orange-hover transition-colors shadow-lg">
                Get Technical Recommendation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-base rounded hover:bg-white/10 transition-colors">
                Request Free Sample
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges vs. Our Solutions - PAIRED ROW LAYOUT with height alignment */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Challenges vs. Our Solutions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Battery material processing demands extreme purity and precision. Our zirconia beads deliver both.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {pairedChallengesSolutions.map((pair, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-6 items-stretch"
              >
                {/* Challenge Card */}
                <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-6 flex items-start gap-4 h-full">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg mb-2">Challenge</h3>
                    <p className="text-red-200/80">{pair.challenge}</p>
                  </div>
                </div>

                {/* Solution Card */}
                <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-6 flex items-start gap-4 h-full">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <pair.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg mb-2">Our Solution</h3>
                    <p className="text-green-200/80">{pair.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Applications - Dark Theme Grid */}
      <section className="py-20 bg-navy/95">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              Recommended Applications
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Precision-engineered for the most demanding battery material processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-industrial-orange/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-industrial-orange/20 flex items-center justify-center mb-4 group-hover:bg-industrial-orange/30 transition-colors">
                  <app.icon className="w-6 h-6 text-industrial-orange" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-sm text-white/60">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Recommendations Table - Dark Theme */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              Size Recommendations
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Precision sizing for optimal battery material processing
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Bead Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Application</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Target Particle Size</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRecommendations.map((rec, index) => (
                    <motion.tr
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                      variants={fadeUp}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-heading text-lg font-bold text-industrial-orange">{rec.range}</span>
                      </td>
                      <td className="px-6 py-4 text-white/80">{rec.application}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                          {rec.target}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Inquiry Form - Dark Theme */}
      <section id="inquiry-form" className="py-20 bg-navy/95">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
              Get Expert Grinding Media Configuration
            </h2>
            <p className="text-white/70 text-lg">
              Share your battery slurry type, current impurity limits (ppm), and target D50/D90. Our engineers will configure the optimal grinding media.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center py-16 bg-green-950/30 border border-green-900/50 rounded-lg">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-white/70 text-lg">We have received your inquiry and will respond within 12 hours.</p>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Contact Person *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/90 font-medium mb-2">Country / Region *</label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                  placeholder="Your country"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Battery Slurry Type</label>
                  <input
                    type="text"
                    name="slurryType"
                    value={form.slurryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="e.g., LFP, NMC, Si-C"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Impurity Limit (ppm)</label>
                  <input
                    type="text"
                    name="impurityLimit"
                    value={form.impurityLimit}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="e.g., <10 ppm Fe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/90 font-medium mb-2">Target D50/D90</label>
                  <input
                    type="text"
                    name="targetD50D90"
                    value={form.targetD50D90}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all"
                    placeholder="e.g., D50 < 100nm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/90 font-medium mb-2">Additional Requirements</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all resize-none"
                  placeholder="Please describe your specific grinding requirements, production scale, or any other technical details..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree-battery"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="mt-1 w-5 h-5 rounded border-white/30 bg-white/10 checked:bg-industrial-orange focus:ring-2 focus:ring-industrial-orange/20"
                />
                <label htmlFor="agree-battery" className="text-sm text-white/70 leading-relaxed">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-industrial-orange hover:underline">Privacy Policy</Link>
                  {" "}and{" "}
                  <Link href="/terms" className="text-industrial-orange hover:underline">Terms & Conditions</Link>.
                </label>
              </div>

              <button
                type="submit"
                disabled={!agreeTerms}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-industrial-orange text-white font-semibold text-base rounded hover:bg-industrial-orange-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <Send className="w-5 h-5" />
                Submit Technical Inquiry
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
