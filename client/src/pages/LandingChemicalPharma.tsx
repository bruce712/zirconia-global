import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle, ChevronDown, Send, X, TriangleAlert as AlertTriangle, Shield, Sparkles, Target, Pill, Beaker, FlaskConical, Factory, FileCheck } from "lucide-react";
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
  { icon: X, title: "Cross-contamination risks", desc: "Risk of batch-to-batch contamination in pharmaceutical and chemical processing" },
  { icon: AlertTriangle, title: "Harsh chemical environments", desc: "Media must withstand aggressive solvents and extreme pH conditions" },
  { icon: Shield, title: "Strict hygiene standards", desc: "GMP compliance requires validated materials with full traceability" },
  { icon: X, title: "Scale-up inconsistencies", desc: "Difficulty maintaining particle size consistency from lab to production scale" },
];

const solutions = [
  { icon: Sparkles, title: "High-purity 95% YSZ media", desc: "Ultra-pure zirconia ensures minimal contamination in critical applications" },
  { icon: Shield, title: "Excellent chemical inertness & corrosion resistance", desc: "Withstands acids, bases, and organic solvents without degradation" },
  { icon: CheckCircle, title: "Smooth surface, easy to clean & sterilize", desc: "Non-porous surface enables thorough CIP/SIP protocols for GMP compliance" },
  { icon: Target, title: "Stable particle size distribution from lab to plant", desc: "Consistent performance ensures seamless scale-up with predictable results" },
];

const beadSizes = [
  {
    range: "0.1–0.3 mm",
    labUse: "Nano-milling for APIs and fine chemical dispersion (D90 < 200nm)",
    productionUse: "High-shear nano-grinding for pharmaceutical formulations requiring ultra-fine particles",
  },
  {
    range: "0.3–0.6 mm",
    labUse: "Sub-micron grinding for pharmaceutical intermediates and specialty chemicals",
    productionUse: "Standard fine milling for APIs, agrochemicals, and pigment dispersions in chemical synthesis",
  },
  {
    range: "0.6–1.0 mm",
    labUse: "General chemical dispersion and particle size reduction for R&D",
    productionUse: "High-throughput production milling for bulk chemicals, pigments, and pharmaceutical excipients",
  },
  {
    range: "1.0–3.0 mm+",
    labUse: "Coarse grinding for pilot-scale testing and material characterization",
    productionUse: "Large-scale industrial milling for agrochemicals, bulk pharmaceuticals, and chemical intermediates",
  },
];

const coreApplications = [
  { icon: Pill, label: "Fine Chemical Dispersion" },
  { icon: Beaker, label: "Pharma Intermediates Milling" },
  { icon: FlaskConical, label: "Agrochemical Grinding" },
  { icon: Factory, label: "High-Purity Material Synthesis" },
];

const faqs = [
  {
    q: "Are your zirconia beads GMP compliant?",
    a: "Yes, our zirconia beads are manufactured under ISO-certified quality systems with full batch traceability. We provide Certificates of Analysis (COA), Material Safety Data Sheets (MSDS), and compliance documentation to support your GMP validation requirements.",
  },
  {
    q: "What bead size is recommended for API milling?",
    a: "For API (Active Pharmaceutical Ingredient) milling, we typically recommend 0.1–0.3mm beads for nano-scale grinding, or 0.3–0.6mm for sub-micron milling. The optimal size depends on your target particle size, mill type, and formulation viscosity. Contact our technical team for specific recommendations.",
  },
  {
    q: "How do I prevent cross-contamination between batches?",
    a: "Our zirconia beads feature an ultra-smooth, non-porous surface that resists product adhesion and enables thorough cleaning. We recommend implementing validated CIP (Clean-In-Place) or SIP (Sterilize-In-Place) procedures between batches, and maintaining dedicated bead inventories for high-potency compounds.",
  },
  {
    q: "Can zirconia beads withstand aggressive chemical environments?",
    a: "Yes, zirconia exhibits excellent chemical inertness across a wide pH range (1-14) and is resistant to most organic solvents, acids, and bases. This makes it ideal for harsh chemical processing environments where other grinding media would degrade or contaminate your product.",
  },
];

export default function LandingChemicalPharma() {
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    chemicalSystem: "",
    viscosity: "",
    targetFineness: "",
    millType: "",
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
    toast.success("Your inquiry has been submitted! We'll contact you within 24 hours.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative bg-navy pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(232,100,44,0.06),transparent_50%)]" />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300">High-Purity GMP Grade</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ultra-Pure Zirconia Beads for Chemical & Pharma Processing
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                High-purity zirconia grinding media for pharmaceutical milling, chemical processing, and API particle size reduction with strict contamination control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  Request Technical Recommendation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#compliance"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
                >
                  Ask for Sample Support
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.heroBanner}
                  alt="Chemical & Pharmaceutical grade zirconia beads"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-light p-6 rounded-xl shadow-lg border border-blue-500/30">
                <div className="text-3xl font-bold text-orange-500 mb-1">&lt;0.01%</div>
                <div className="text-sm text-gray-300 font-medium">Ultra-Low Wear Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions - Paired Row Layout */}
      <section className="py-20 bg-navy">
        <div className="container">
          {/* Section Headers */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 text-sm font-semibold rounded-full mb-4">
                Industry Challenges
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Chemical & Pharma Processing Challenges
              </h2>
              <p className="text-gray-300 text-lg">
                Traditional grinding media struggle to meet the stringent requirements of pharmaceutical and chemical industries.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full mb-4">
                Kerec Solutions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                High-Purity Zirconia Technology
              </h2>
              <p className="text-gray-300 text-lg">
                Our 95% YSZ zirconia beads deliver exceptional purity, chemical resistance, and process consistency.
              </p>
            </motion.div>
          </div>

          {/* Paired Rows - Each pain point paired with its solution */}
          <div className="space-y-6">
            {painPoints.map((point, i) => {
              const solution = solutions[i];
              const SolutionIcon = solution.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
                >
                  {/* Pain Point Card */}
                  <div className="flex items-start gap-4 p-5 bg-navy-light rounded-lg border border-red-500/30 shadow-sm h-full">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-400">{point.desc}</p>
                    </div>
                  </div>

                  {/* Solution Card */}
                  <div className="flex items-start gap-4 p-5 bg-navy-light rounded-lg border border-green-500/30 shadow-sm h-full">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <SolutionIcon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{solution.title}</h3>
                      <p className="text-sm text-gray-400">{solution.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended Applications */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-4">
              Core Applications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Recommended Applications
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our high-purity zirconia beads are trusted across pharmaceutical and chemical processing industries.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreApplications.map((app, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center text-center p-6 bg-navy-light rounded-xl border border-blue-500/30 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <app.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">{app.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Recommendations Table */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-4">
              Size Selection Guide
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Recommended Bead Sizes for Chemical & Pharma
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Choose the optimal bead size based on your application scale and target particle fineness.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.table
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="w-full bg-navy-light rounded-xl border border-blue-500/30 overflow-hidden"
            >
              <thead>
                <tr className="bg-navy">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-blue-500/30">
                    Bead Size Range
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-blue-500/30">
                    Lab / R&D Applications
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white border-b border-blue-500/30">
                    Production / Pilot Scale
                  </th>
                </tr>
              </thead>
              <tbody>
                {beadSizes.map((size, i) => (
                  <motion.tr
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 2}
                    className="border-b border-blue-500/20 last:border-0 hover:bg-navy/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-orange-400">{size.range}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">{size.labUse}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{size.productionUse}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-navy">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg">
              Expert answers to common questions about chemical & pharmaceutical grade zirconia beads.
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
                  className="bg-navy-light border border-blue-500/30 rounded-lg px-6 data-[state=open]:bg-navy-light data-[state=open]:border-blue-400/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-navy">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-4">
              Get Expert Guidance
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Request Your Technical Recommendation
            </h2>
            <p className="text-gray-300 text-lg">
              Share your chemical system, viscosity, and target fineness. We will recommend the optimal bead size.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {submitted ? (
              <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Your inquiry has been received. Our technical team will contact you within 24 hours.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center text-orange-400 font-semibold hover:underline"
                >
                  Return to Homepage
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-navy-light rounded-xl shadow-lg border border-blue-500/30 p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Country/Region *</label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Chemical System</label>
                    <select
                      name="chemicalSystem"
                      value={form.chemicalSystem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                    >
                      <option value="">Select chemical system</option>
                      <option value="water-based">Water-based</option>
                      <option value="solvent-based">Solvent-based</option>
                      <option value="high-viscosity">High viscosity</option>
                      <option value="api">API / Pharmaceutical</option>
                      <option value="agrochemical">Agrochemical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Viscosity Range</label>
                    <input
                      type="text"
                      name="viscosity"
                      value={form.viscosity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="e.g., 500-2000 cP"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Target Fineness</label>
                    <input
                      type="text"
                      name="targetFineness"
                      value={form.targetFineness}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="e.g., D90 < 500nm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Mill Type</label>
                    <input
                      type="text"
                      name="millType"
                      value={form.millType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                      placeholder="e.g., Horizontal, Basket"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Estimated Monthly Usage</label>
                    <select
                      name="monthlyUsage"
                      value={form.monthlyUsage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-500"
                    >
                      <option value="">Select monthly usage</option>
                      <option value="0-100">0–100 kg</option>
                      <option value="100-500">100–500 kg</option>
                      <option value="500-1000">500–1000 kg</option>
                      <option value="1000+">1000+ kg</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-white mb-2">Additional Requirements</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-navy border border-blue-500/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none placeholder:text-gray-500"
                    placeholder="Share any specific requirements or questions about chemical & pharma grinding..."
                  />
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-orange-500 border-blue-500/30 bg-navy rounded focus:ring-orange-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to the{" "}
                    <Link href="/privacy-policy" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-blue-400 hover:underline">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  <Send className="w-5 h-5" />
                  Submit Your Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Compliance & Disclaimer */}
      <section className="py-12 bg-navy border-t border-blue-500/20">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-navy-light rounded-lg p-8 border border-amber-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Disclaimer</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Kerec zirconia beads are strictly industrial grinding media designed exclusively for material milling and particle processing. We do not manufacture pharmaceuticals nor make any medical or efficacy claims regarding the final processed products. Customers are responsible for ensuring their final products comply with all applicable pharmaceutical regulations, GMP requirements, and quality standards in their respective jurisdictions. All product information provided is for industrial milling process guidance only.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
