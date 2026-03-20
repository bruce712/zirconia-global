import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle, ChevronDown, Send, X, TrendingDown, Zap, Shield, Target, Droplets, Layers, Sparkles, Factory, Beaker } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";
import { IMAGES } from "@/lib/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const coreApplications = [
  { icon: Droplets, label: "Water-based inks" },
  { icon: Layers, label: "Solvent-based coatings" },
  { icon: Sparkles, label: "Pigment concentrates" },
  { icon: Factory, label: "Printing inks" },
  { icon: Beaker, label: "Nano color paste" },
];

const faqs = [
  {
    q: "Which bead size is suitable for ink grinding?",
    a: "For inkjet and nano inks, use 0.1–0.3mm beads. For gravure and flexographic printing inks, 0.3–0.6mm is optimal. Target fineness and viscosity determine the final selection.",
  },
  {
    q: "Are zirconia beads suitable for nano dispersion?",
    a: "Yes, 95% YSZ zirconia beads are ideal for nano dispersion. Their high density and hardness enable D90 < 100nm particle size for applications like automotive clear coats and inkjet inks.",
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
    if (!agreeTerms) {
      toast.error("Please agree to the Privacy Policy and Terms & Conditions");
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Zirconia Beads for Paint, Ink & Coatings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
            >
              Engineered for high-efficiency pigment dispersion and nano-grinding.
              Achieve target fineness faster with lower contamination.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-industrial-orange text-white font-semibold rounded-lg hover:bg-industrial-orange-hover transition-all shadow-lg hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Contact Technical Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 bg-gradient-to-b from-graphite-100 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Pain Points */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
                  Industry Challenges
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                  Common Problems in Pigment Milling
                </h2>
                <p className="text-graphite-500 text-lg">
                  Traditional grinding media often fail to deliver the performance needed for modern coatings.
                </p>
              </div>
              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                    className="flex items-start gap-4 p-5 bg-white rounded-lg border border-red-200 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{point.title}</h3>
                      <p className="text-sm text-graphite-500">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
                  Kerec Solutions
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                  Advanced Zirconia Technology
                </h2>
                <p className="text-graphite-500 text-lg">
                  Our 95% YSZ zirconia beads deliver superior performance across all metrics.
                </p>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                    className="flex items-start gap-4 p-5 bg-white rounded-lg border border-green-200 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{solution.title}</h3>
                      <p className="text-sm text-graphite-500">{solution.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Bead Sizes */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Recommended Bead Sizes
            </h2>
            <p className="text-lg text-graphite-500 max-w-2xl mx-auto">
              Select the optimal size based on your target fineness and application requirements.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-white font-heading font-semibold text-sm uppercase tracking-wide">
                        Size Range
                      </th>
                      <th className="text-left px-6 py-4 text-white font-heading font-semibold text-sm uppercase tracking-wide">
                        Typical Applications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {beadSizes.map((size, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-5 text-white font-semibold text-lg whitespace-nowrap">
                          {size.range}
                        </td>
                        <td className="px-6 py-5 text-white/80 leading-relaxed">
                          {size.applications}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-20 bg-graphite-100">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Recommended For
            </h2>
            <p className="text-lg text-graphite-500 max-w-2xl mx-auto">
              Proven performance across diverse coating and ink applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {coreApplications.map((app, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-graphite-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-industrial-orange to-industrial-orange-hover rounded-lg flex items-center justify-center">
                  <app.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-center text-sm font-semibold text-navy leading-snug">
                  {app.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Get Technical Recommendations
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Tell us your pigment system, mill type, target fineness, and monthly usage.
                We'll recommend a suitable bead size.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl p-10 text-center shadow-2xl"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                  Thank You for Your Inquiry!
                </h3>
                <p className="text-graphite-500 mb-6">
                  Our technical team will review your requirements and respond within 12 hours with personalized recommendations.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-industrial-orange font-semibold hover:text-industrial-orange-hover transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 md:p-10 shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                    placeholder="Your country"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Pigment System <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="pigmentSystem"
                      value={form.pigmentSystem}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                    >
                      <option value="">Select system</option>
                      <option value="water-based">Water-based</option>
                      <option value="solvent-based">Solvent-based</option>
                      <option value="uv-curable">UV-curable</option>
                      <option value="powder">Powder coating</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Mill Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="millType"
                      value={form.millType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                    >
                      <option value="">Select mill type</option>
                      <option value="horizontal-bead-mill">Horizontal bead mill</option>
                      <option value="vertical-bead-mill">Vertical bead mill</option>
                      <option value="basket-mill">Basket mill</option>
                      <option value="attritor-mill">Attritor mill</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Target Fineness <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="targetFineness"
                      value={form.targetFineness}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                      placeholder="e.g., D90 < 200nm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Monthly Usage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="monthlyUsage"
                      value={form.monthlyUsage}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent"
                      placeholder="e.g., 500 kg/month"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-graphite-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-industrial-orange focus:border-transparent resize-none"
                    placeholder="Tell us more about your application requirements..."
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 text-industrial-orange focus:ring-industrial-orange border-graphite-300 rounded"
                    />
                    <span className="text-sm text-graphite-500">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy-policy" className="text-industrial-orange hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-industrial-orange hover:underline">
                        Terms & Conditions
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-industrial-orange text-white font-bold text-lg rounded-lg hover:bg-industrial-orange-hover transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <Send className="w-5 h-5" />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-graphite-500">
                Common questions about zirconia beads for paint and ink applications.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-graphite-100 rounded-lg border border-graphite-200 px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-navy hover:text-industrial-orange hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-graphite-500 pb-5 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={5}
              className="text-center mt-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-orange hover:text-industrial-orange-hover transition-colors"
              >
                Have more questions? Contact our technical team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
