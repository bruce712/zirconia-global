/*
 * Landing Page: Paint, Ink & Coatings Industry
 * High-conversion B2B landing page with optimized layout and technical inquiry form
 */
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle, ChevronRight, Send, Paintbrush, Droplets, Zap, Shield, Beaker, Gauge } from "lucide-react";
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
  { title: "Poor Dispersion", desc: "Inadequate pigment dispersion leads to color inconsistency and coating defects" },
  { title: "Long Milling Time", desc: "Inefficient grinding extends production cycles and increases energy costs" },
  { title: "High Contamination", desc: "Media wear particles contaminate pigments, affecting final product quality" },
  { title: "Media Wear Issues", desc: "Frequent media replacement increases downtime and operational expenses" },
];

const solutions = [
  { title: "High-Density 95% YSZ Beads", desc: "Superior hardness and density ensure efficient grinding without contamination" },
  { title: "Lower Wear Rate", desc: "Ultra-low wear rate (<0.01%) extends media lifespan 3–5× longer than glass beads" },
  { title: "Suitable for Fine Dispersion", desc: "Available in 0.1–0.3 mm for nano-grinding down to <100 nm particle size" },
  { title: "Stable Grinding Performance", desc: "Consistent size distribution ensures predictable, repeatable grinding results" },
];

const recommendedSizes = [
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
    applications: "High-efficiency fine grinding. Recommended for heavy-duty industrial coatings, marine paints, standard solvent/water-based paints, and titanium dioxide (TiO2) milling.",
  },
];

const recommendedFor = [
  { icon: Droplets, label: "Water-based Inks" },
  { icon: Beaker, label: "Solvent-based Coatings" },
  { icon: Zap, label: "Pigment Concentrates" },
  { icon: Gauge, label: "Printing Inks" },
  { icon: Shield, label: "Nano Color Paste" },
];

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-graphite-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-semibold text-navy">{question}</span>
        <svg
          className={`w-5 h-5 text-graphite-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-slate-50 text-graphite-600 text-sm leading-relaxed border-t border-graphite-100">
          {answer}
        </div>
      )}
    </div>
  );
}

const faqItems = [
  {
    question: "Which bead size is suitable for ink grinding?",
    answer: "For most printing inks, 0.3–0.6 mm beads are ideal. For nano-scale inks requiring <100 nm fineness, use 0.1–0.3 mm. For heavy-duty industrial applications, 0.6–1.0 mm is recommended.",
  },
  {
    question: "Are zirconia beads suitable for nano dispersion?",
    answer: "Yes, zirconia beads are excellent for nano dispersion. Our 0.1–0.3 mm beads achieve particle sizes down to <100 nm with minimal contamination, making them ideal for advanced coating formulations.",
  },
  {
    question: "What is the wear rate?",
    answer: "Our 95% YSZ zirconia beads have an ultra-low wear rate of <0.01%, which is 10–50× lower than glass beads. This extends media lifespan 3–5× longer and significantly reduces total cost of ownership.",
  },
  {
    question: "Can you recommend size by mill type?",
    answer: "Absolutely. For ball mills, 0.6–1.0 mm is standard. For bead mills and attritors, 0.3–0.6 mm is optimal. For high-speed nano mills, 0.1–0.3 mm is recommended. Contact us for specific mill compatibility.",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      toast.error("Please agree to the Privacy Policy and Terms & Conditions.");
      return;
    }
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/applications" className="hover:text-navy transition-colors">Applications</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Paint, Ink &amp; Coatings</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy via-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.applicationGrinding} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Paintbrush className="w-5 h-5 text-industrial-orange" />
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Industry Solution</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Zirconia Beads for Paint, Ink &amp; Coatings
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Engineered for high-efficiency pigment dispersion and nano-grinding. Achieve target fineness faster with lower contamination.
            </p>
            <a href="#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 bg-industrial-orange text-white font-semibold text-base rounded hover:bg-industrial-orange-hover transition-colors shadow-lg hover:shadow-xl">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points vs. Solutions */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">Industry Challenges vs. Kerec Solutions</h2>
            <p className="text-graphite-500 text-lg max-w-2xl mx-auto">See how our zirconia beads address the most pressing challenges in paint, ink, and coating production.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pain Points */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold text-red-600 mb-8">Industry Challenges</h3>
              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-red-50 rounded-lg border border-red-100 hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{point.title}</h4>
                      <p className="text-sm text-graphite-600">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold text-green-600 mb-8">Kerec Solutions</h3>
              <div className="space-y-4">
                {solutions.map((sol, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-green-50 rounded-lg border border-green-100 hover:shadow-md transition-shadow">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">{sol.title}</h4>
                      <p className="text-sm text-graphite-600">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Bead Sizes Table */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">Recommended Bead Sizes</h2>
            <p className="text-graphite-500 text-lg">Select the optimal bead size for your specific application requirements.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="bg-white rounded-lg border border-graphite-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-8 py-4 font-semibold">Size Range</th>
                    <th className="text-left px-8 py-4 font-semibold">Typical Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {recommendedSizes.map((size, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-8 py-5 font-heading font-bold text-industrial-orange text-lg border-b border-graphite-100">{size.range}</td>
                      <td className="px-8 py-5 text-graphite-600 text-sm leading-relaxed border-b border-graphite-100">{size.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended For */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">Recommended For</h2>
            <p className="text-graphite-500 text-lg">Our zirconia beads excel across diverse coating and ink applications.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {recommendedFor.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="flex flex-col items-center p-6 bg-slate-50 rounded-lg border border-graphite-100 hover:border-industrial-orange hover:shadow-md transition-all">
                  <Icon className="w-8 h-8 text-industrial-orange mb-3" />
                  <p className="font-semibold text-navy text-center text-sm">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4 text-center">Technical Inquiry Form</h2>
            <p className="text-graphite-600 text-center mb-6">Tell us your pigment system, mill type, target fineness, and monthly usage. We'll recommend a suitable bead size.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
              <p className="font-semibold mb-2">💡 Pro Tip:</p>
              <p>Providing detailed information about your application helps us recommend the most cost-effective solution tailored to your specific needs.</p>
            </div>
          </motion.div>

          {submitted ? (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="text-center py-16 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-navy mb-2">Thank You!</h3>
              <p className="text-graphite-600 mb-4">We have received your inquiry and will respond within 12 hours.</p>
              <p className="text-sm text-graphite-500">You should receive a confirmation email shortly.</p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="bg-white rounded-lg border border-graphite-200 p-8 shadow-sm">
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Company Name *</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Contact Person *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Phone / WhatsApp</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="+1 234 567 8900" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-navy mb-2">Country / Region *</label>
                    <input type="text" name="country" value={form.country} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="Your country" />
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Technical Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Pigment System *</label>
                    <select name="pigmentSystem" value={form.pigmentSystem} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all">
                      <option value="">Select pigment system</option>
                      <option value="water-based">Water-based Inks</option>
                      <option value="solvent-based">Solvent-based Coatings</option>
                      <option value="pigment-concentrate">Pigment Concentrates</option>
                      <option value="printing-inks">Printing Inks</option>
                      <option value="nano-paste">Nano Color Paste</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Mill Type *</label>
                    <select name="millType" value={form.millType} onChange={handleChange} required className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all">
                      <option value="">Select mill type</option>
                      <option value="ball-mill">Ball Mill</option>
                      <option value="bead-mill">Bead Mill</option>
                      <option value="attritor">Attritor</option>
                      <option value="nano-mill">Nano Mill</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Target Fineness (D90)</label>
                    <input type="text" name="targetFineness" value={form.targetFineness} onChange={handleChange} className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="e.g., <100 nm, <1 µm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Monthly Usage (kg)</label>
                    <input type="text" name="monthlyUsage" value={form.monthlyUsage} onChange={handleChange} className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white transition-all" placeholder="e.g., 100, 500, 1000+" />
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-navy mb-2">Additional Information</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 border border-graphite-200 rounded-lg text-sm text-navy focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none bg-white resize-none transition-all" placeholder="Please describe your specific requirements, challenges, or any other relevant information..." />
              </div>

              {/* Compliance */}
              <div className="mb-6">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-graphite-100">
                  <input type="checkbox" id="agree-paint" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required className="mt-1 w-4 h-4 rounded border-graphite-300 cursor-pointer" />
                  <label htmlFor="agree-paint" className="text-xs text-graphite-600 leading-relaxed cursor-pointer">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-industrial-orange font-semibold hover:underline">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="/terms" className="text-industrial-orange font-semibold hover:underline">Terms &amp; Conditions</Link>.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={!agreeTerms} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-industrial-orange text-white font-semibold text-base rounded-lg hover:bg-industrial-orange-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
                <Send className="w-4 h-4" />
                Request a Quote
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-graphite-500 text-lg">Find answers to common questions about our zirconia beads and their applications.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="bg-white rounded-lg border border-graphite-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-graphite-100">
              {faqItems.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="text-center mt-12">
            <p className="text-graphite-600 mb-4">Didn't find your answer?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-orange text-white font-semibold text-sm rounded-lg hover:bg-industrial-orange-hover transition-colors">
              Contact Our Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-slate-900">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Optimize Your Grinding Process?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">Get in touch with our technical team to discuss your specific requirements and receive a customized recommendation.</p>
            <a href="#inquiry-form" className="inline-flex items-center gap-2 px-8 py-4 bg-industrial-orange text-white font-semibold text-base rounded-lg hover:bg-industrial-orange-hover transition-colors shadow-lg hover:shadow-xl">
              Request a Quote Now <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
