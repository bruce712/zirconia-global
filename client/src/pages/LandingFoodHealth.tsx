import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle, ChevronDown, Send, X, TriangleAlert as AlertTriangle, Shield, Sparkles, Target, Leaf, Pill, Coffee, Apple, FileCheck, Download } from "lucide-react";
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
  { icon: AlertTriangle, title: "Contamination concerns", desc: "Risk of media wear introducing unwanted particles into food-grade products" },
  { icon: Shield, title: "Hygiene requirements", desc: "Need for strict sanitation standards in food processing environments" },
  { icon: Sparkles, title: "Product purity", desc: "Maintaining ingredient integrity and avoiding cross-contamination" },
  { icon: X, title: "Fine powder consistency", desc: "Difficulty achieving uniform particle size for supplements and functional foods" },
];

const solutions = [
  { icon: Shield, title: "Low wear rate", desc: "Ultra-low wear rate (<0.01%) minimizes contamination in food-grade applications" },
  { icon: CheckCircle, title: "Suitable for hygienic grinding environments", desc: "Non-porous surface prevents bacterial growth and enables thorough cleaning" },
  { icon: Target, title: "Consistent particle reduction", desc: "Precise particle size control ensures product uniformity and bioavailability" },
  { icon: Leaf, title: "Dedicated support for food ingredient / supplement powder processing", desc: "Expert guidance for nutraceuticals, botanicals, and functional food powders" },
];

const beadSizes = [
  {
    range: "0.3–0.6 mm",
    applications: "Fine grinding for nutraceutical powders, herbal extracts, and functional food ingredients. Ideal for achieving D90 < 50μm for enhanced bioavailability.",
  },
  {
    range: "0.6–1.0 mm",
    applications: "Standard grinding for food additives, plant extract powders, and dietary supplement formulations. Suitable for most food-grade milling applications.",
  },
  {
    range: "1.0–2.0 mm",
    applications: "High-throughput grinding for coarse food ingredients, spices, and bulk nutraceutical processing. Optimal for large-scale production environments.",
  },
];

const coreApplications = [
  { icon: Leaf, label: "Plant extract powders" },
  { icon: Pill, label: "Nutraceutical powders" },
  { icon: Coffee, label: "Food additives" },
  { icon: Apple, label: "Functional ingredient milling" },
];

const faqs = [
  {
    q: "Are your zirconia beads food-grade certified?",
    a: "Our zirconia beads comply with food contact material standards. We provide comprehensive documentation including material composition reports and compliance statements. Contact us for detailed certification documents.",
  },
  {
    q: "What bead size is recommended for herbal extract grinding?",
    a: "For herbal extracts and botanical powders, we recommend 0.3–0.6mm beads. This size range provides excellent particle reduction while maintaining the integrity of heat-sensitive compounds.",
  },
  {
    q: "How do I ensure hygiene during the milling process?",
    a: "Zirconia beads feature a non-porous, smooth surface that resists bacterial adhesion and allows for thorough CIP (Clean-In-Place) procedures. We provide detailed cleaning protocols for food-grade operations.",
  },
  {
    q: "Can zirconia beads be used for probiotic formulations?",
    a: "Yes, zirconia beads are suitable for grinding probiotic carriers and functional food ingredients. The low-heat generation during grinding helps preserve sensitive bioactive compounds. Consult our technical team for specific application guidance.",
  },
];

export default function LandingFoodHealth() {
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    productType: "",
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
    toast.success("Your inquiry has been submitted! We'll contact you within 24 hours.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.06),transparent_50%)]" />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Food-Grade Certified</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                Zirconia Beads for Food & Health Powder Processing
              </h1>

              <p className="text-lg text-graphite-500 mb-8 leading-relaxed">
                Food-grade certified zirconia grinding media for food ingredients, health supplements, and nutraceuticals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                >
                  Request a Food-Grade Grinding Recommendation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#compliance"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all"
                >
                  Ask for Sample & Documentation
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
                  alt="Food-grade zirconia beads"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-graphite-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">&lt;0.01%</div>
                <div className="text-sm text-graphite-500 font-medium">Ultra-Low Wear Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions - Paired Row Layout */}
      <section className="py-20 bg-gradient-to-b from-graphite-50 to-white">
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
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
                Industry Challenges
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Food & Health Powder Processing Challenges
              </h2>
              <p className="text-graphite-500 text-lg">
                Traditional grinding media struggle to meet the strict requirements of food-grade applications.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
                Kerec Solutions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Food-Grade Zirconia Technology
              </h2>
              <p className="text-graphite-500 text-lg">
                Our 95% YSZ zirconia beads meet stringent food safety and hygiene standards.
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
                  <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-red-200 shadow-sm h-full">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{point.title}</h3>
                      <p className="text-sm text-graphite-500">{point.desc}</p>
                    </div>
                  </div>

                  {/* Solution Card */}
                  <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-green-200 shadow-sm h-full">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <SolutionIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{solution.title}</h3>
                      <p className="text-sm text-graphite-500">{solution.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section id="compliance" className="py-20 bg-blue-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                <FileCheck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Compliance & Documentation</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Food-Grade Safety & Certification
              </h2>
              <p className="text-lg text-graphite-500">
                Our zirconia beads comply with international food contact material standards. We provide comprehensive documentation to support your regulatory requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Compliance Statement</h3>
                    <p className="text-sm text-graphite-500 mb-3">
                      Complies with food contact material regulations including EU 10/2011, FDA CFR 21, and GB standards.
                    </p>
                    <button className="text-sm text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Request Documentation
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Available Documentation</h3>
                    <ul className="text-sm text-graphite-500 space-y-1">
                      <li>• Certificate of Analysis (COA)</li>
                      <li>• Material Safety Data Sheet (MSDS)</li>
                      <li>• Material Composition Report</li>
                      <li>• Third-Party Test Reports</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-graphite-100">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Test Report / COA / Material Information</h4>
                    <p className="text-sm text-graphite-500">
                      We provide batch-specific test reports, certificates of analysis, and detailed material information for full traceability. Contact our team to request documentation for your specific application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Applications */}
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
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Core Applications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Recommended Applications
            </h2>
            <p className="text-graphite-500 text-lg max-w-3xl mx-auto">
              Our food-grade zirconia beads are trusted across the nutraceutical and functional food industries.
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
                className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <app.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-navy">{app.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Bead Sizes */}
      <section className="py-20 bg-gradient-to-b from-graphite-50 to-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Size Selection
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Recommended Bead Sizes for Food & Health Applications
            </h2>
            <p className="text-graphite-500 text-lg max-w-3xl mx-auto">
              Choose the optimal bead size based on your product requirements and target particle fineness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beadSizes.map((size, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white p-8 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <span className="text-2xl font-bold text-blue-600">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">{size.range}</h3>
                </div>
                <p className="text-graphite-500 leading-relaxed">{size.applications}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-graphite-500 text-lg">
              Expert answers to common questions about food-grade zirconia beads.
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
                  className="bg-blue-50 border border-blue-100 rounded-lg px-6 data-[state=open]:bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-graphite-500 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Get Expert Guidance
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Request Your Food-Grade Grinding Recommendation
            </h2>
            <p className="text-graphite-500 text-lg">
              Share your requirements and our experts will recommend the optimal solution for your application.
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
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Thank You!</h3>
                <p className="text-graphite-500 mb-6">
                  Your inquiry has been received. Our food-grade grinding experts will contact you within 24 hours.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                  Return to Homepage
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-blue-100 p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Country/Region *</label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Product Type</label>
                    <select
                      name="productType"
                      value={form.productType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select product type</option>
                      <option value="herbal-extract">Herbal Extract Powders</option>
                      <option value="nutraceutical">Nutraceutical Powders</option>
                      <option value="food-additive">Food Additives</option>
                      <option value="functional-food">Functional Food Ingredients</option>
                      <option value="probiotic">Probiotic Formulations</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Mill Type</label>
                    <input
                      type="text"
                      name="millType"
                      value={form.millType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Horizontal, Vertical"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Target Fineness</label>
                    <input
                      type="text"
                      name="targetFineness"
                      value={form.targetFineness}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., D90 < 50μm"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-navy mb-2">Estimated Monthly Usage</label>
                  <select
                    name="monthlyUsage"
                    value={form.monthlyUsage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select monthly usage</option>
                    <option value="0-100">0–100 kg</option>
                    <option value="100-500">100–500 kg</option>
                    <option value="500-1000">500–1000 kg</option>
                    <option value="1000+">1000+ kg</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-navy mb-2">Additional Requirements</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Share any specific requirements or questions about food-grade grinding..."
                  />
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 border-graphite-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-graphite-500">
                    I agree to the{" "}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms & Conditions
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                >
                  <Send className="w-5 h-5" />
                  Submit Your Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Risk Control & Disclaimer */}
      <section className="py-12 bg-graphite-50 border-t border-graphite-100">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-white rounded-lg p-8 border border-graphite-200"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-3">Disclaimer</h3>
                <p className="text-sm text-graphite-500 leading-relaxed">
                  Kerec zirconia beads are strictly industrial grinding media designed exclusively for material milling and particle size reduction. We do not make any medical, nutritional, or health efficacy claims regarding the final processed products. Customers are responsible for ensuring their final products comply with all applicable food safety regulations, good manufacturing practices (GMP), and labeling requirements in their respective jurisdictions. All product information provided is for industrial milling process guidance only.
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
