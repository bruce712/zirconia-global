import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleCheck as CheckCircle,
  ChevronRight,
  Send,
  Paintbrush,
  X,
  TrendingDown,
  Zap,
  Shield,
  Target,
  Droplets,
  Layers,
  Sparkles,
  Factory,
  Beaker
} from "lucide-react";
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
  { icon: X, title: "Poor dispersion", desc: "Inconsistent particle distribution affects final product quality" },
  { icon: TrendingDown, title: "Long milling time", desc: "Extended processing cycles reduce productivity and increase costs" },
  { icon: X, title: "High contamination", desc: "Media wear introduces impurities that alter pigment colors" },
  { icon: TrendingDown, title: "Media wear issues", desc: "Frequent replacement leads to downtime and higher operating costs" },
];

const solutions = [
  { icon: Zap, title: "High-density 95% YSZ beads", desc: "Superior grinding efficiency with optimal energy transfer" },
  { icon: Shield, title: "Lower wear", desc: "Ultra-low wear rate (<0.01%) ensures product purity" },
  { icon: Target, title: "Suitable for fine dispersion", desc: "Achieve D90 < 100nm for nano-scale applications" },
  { icon: CheckCircle, title: "Stable grinding performance", desc: "Consistent results batch after batch with minimal variation" },
];

const beadSizes = [
  {
    range: "0.1–0.3 mm",
    applications: "Nano-grinding & ultra-fine dispersion. Ideal for inkjet inks, nano color pastes, and high-transparency automotive coatings (D90 < 100nm).",
  },
  {
    range: "0.3–0.6 mm",
    applications: "Sub-micron grinding. Perfectly suited for premium printing inks (gravure/flexo), high-gloss pigment concentrates, and premium architectural coatings.",
  },
  {
    range: "0.6–1.0 mm",
    applications: "High-efficiency fine grinding. Recommended for heavy-duty industrial coatings, marine paints, standard solvent/water-based paints, and titanium dioxide (TiO₂) milling.",
  },
];

const applicationScenarios = [
  { icon: Droplets, label: "Water-based inks" },
  { icon: Layers, label: "Solvent-based coatings" },
  { icon: Sparkles, label: "Pigment concentrates" },
  { icon: Paintbrush, label: "Printing inks" },
  { icon: Beaker, label: "Nano color paste" },
];

const faqs = [
  {
    q: "Which bead size is suitable for ink grinding?",
    a: "For printing inks, we recommend 0.3-0.6mm for gravure and flexographic inks. For inkjet inks requiring ultra-fine particles, use 0.1-0.3mm to achieve D90 < 100nm.",
  },
  {
    q: "Are zirconia beads suitable for nano dispersion?",
    a: "Yes, our 95% YSZ beads in 0.1-0.3mm size are specifically engineered for nano-scale grinding, achieving particle sizes below 100nm for advanced coating formulations and nano color pastes.",
  },
  {
    q: "What is the wear rate?",
    a: "Our premium zirconia beads have an ultra-low wear rate of <0.01%, which is 3-5× better than glass beads, ensuring minimal contamination and longer service life.",
  },
  {
    q: "Can you recommend size by mill type?",
    a: "Yes, absolutely. Share your mill type (horizontal, vertical, basket, etc.), pigment system, and target fineness. Our technical team will recommend the optimal bead size and filling ratio for your specific equipment.",
  },
];

export default function LandingPaintInk() {
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    pigmentSystem: "",
    millType: "",
    targetFineness: "",
    monthlyUsage: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />

      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container py-3 flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/applications" className="hover:text-white transition-colors">Applications</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Paint, Ink & Coatings</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={IMAGES.applicationGrinding} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        }} />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Paintbrush className="w-6 h-6 text-blue-400" />
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">Industry Solution</span>
            </div>

            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Zirconia Beads for Paint, Ink & Coatings
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
              Engineered for high-efficiency pigment dispersion and nano-grinding. Achieve target fineness faster with lower contamination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-base rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold text-base rounded-lg hover:bg-slate-800 transition-all"
              >
                Contact Technical Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">Transform Your Process</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3">
              From Challenges to Solutions
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Industry Challenges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700"
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                Industry Challenges
              </h3>
              <div className="space-y-5">
                {painPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">{point.title}</div>
                        <div className="text-sm text-slate-400">{point.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Kerec Solutions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl p-8 border border-blue-800"
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                Kerec Solutions
              </h3>
              <div className="space-y-5">
                {solutions.map((solution, i) => {
                  const Icon = solution.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">{solution.title}</div>
                        <div className="text-sm text-slate-400">{solution.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Bead Sizes */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">Specification Guide</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3">
              Recommended Bead Sizes
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Select the optimal bead size based on your target fineness and application requirements
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-950 to-slate-800 border-b border-slate-700">
                  <th className="text-left px-6 py-4 font-heading font-bold text-white text-sm uppercase tracking-wide">
                    Size Range
                  </th>
                  <th className="text-left px-6 py-4 font-heading font-bold text-white text-sm uppercase tracking-wide">
                    Typical Applications
                  </th>
                </tr>
              </thead>
              <tbody>
                {beadSizes.map((size, i) => (
                  <motion.tr
                    key={size.range}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 2}
                    variants={fadeUp}
                    className="border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="font-mono font-bold text-blue-400 text-lg">{size.range}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-slate-300 text-sm leading-relaxed">{size.applications}</div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Core Application Scenarios */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">Recommended For</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3">
              Core Application Scenarios
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {applicationScenarios.map((app, i) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-105 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="font-semibold text-white text-sm leading-snug">{app.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Inquiry Form */}
      <section id="inquiry-form" className="py-20 lg:py-28 bg-slate-950">
        <div className="container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">Get Expert Recommendation</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
              Technical Inquiry Form
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Tell us your pigment system, mill type, target fineness, and monthly usage. We'll recommend a suitable bead size.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-gradient-to-br from-green-950 to-slate-900 rounded-xl border border-green-800"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Thank You!</h3>
              <p className="text-slate-300 text-base">
                We have received your inquiry and will respond within 12 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 lg:p-10 border border-slate-700 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 font-semibold mb-2">Country / Region *</label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="Your country"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Pigment System *</label>
                    <input
                      type="text"
                      name="pigmentSystem"
                      value={form.pigmentSystem}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="e.g., TiO₂, carbon black, organic pigments"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Mill Type *</label>
                    <select
                      name="millType"
                      value={form.millType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    >
                      <option value="">Select mill type</option>
                      <option value="horizontal">Horizontal bead mill</option>
                      <option value="vertical">Vertical bead mill</option>
                      <option value="basket">Basket mill</option>
                      <option value="pearl">Pearl mill</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Target Fineness *</label>
                    <input
                      type="text"
                      name="targetFineness"
                      value={form.targetFineness}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="e.g., D90 < 100nm, 5-10 microns"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 font-semibold mb-2">Monthly Usage *</label>
                    <input
                      type="text"
                      name="monthlyUsage"
                      value={form.monthlyUsage}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="e.g., 500 kg/month"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 font-semibold mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none transition-all"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="agree-paint"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500/20"
                  />
                  <label htmlFor="agree-paint" className="text-xs text-slate-400 leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="/terms" className="text-blue-400 hover:underline">Terms & Conditions</Link>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreeTerms}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-base rounded-lg hover:bg-blue-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-600/30"
                >
                  <Send className="w-5 h-5" />
                  Request a Quote
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-widest">Common Questions</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="group border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors bg-slate-800/50"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-heading font-semibold text-white text-base hover:bg-slate-800 transition-colors">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 py-5 bg-slate-900/50 text-sm text-slate-300 leading-relaxed border-t border-slate-700">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Have more questions? Contact our technical team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
