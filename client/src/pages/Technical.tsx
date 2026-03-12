/*
 * Swiss Industrial Design - Technical Support & Downloads Page
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Download, FileText, HelpCircle, BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const downloads = [
  { category: "Technical Data Sheets (TDS)", files: [
    { name: "95% YSZ Zirconia Beads - TDS", format: "PDF", size: "1.2 MB" },
    { name: "Zirconia Ceramic Structural Parts - TDS", format: "PDF", size: "0.9 MB" },
  ]},
  { category: "Safety Data Sheets (SDS)", files: [
    { name: "Zirconia Beads - SDS (EN)", format: "PDF", size: "0.8 MB" },
    { name: "Zirconia Beads - SDS (DE)", format: "PDF", size: "0.8 MB" },
    { name: "Zirconia Beads - SDS (JP)", format: "PDF", size: "0.8 MB" },
  ]},
  { category: "Application Guides", files: [
    { name: "Grinding Media Selection Guide", format: "PDF", size: "2.1 MB" },
    { name: "Bead Mill Optimization Handbook", format: "PDF", size: "3.5 MB" },
    { name: "Industry Application Manual", format: "PDF", size: "4.2 MB" },
  ]},
  { category: "Certificates", files: [
    { name: "ISO 9001:2015 Certificate", format: "PDF", size: "0.5 MB" },
    { name: "SGS Test Report", format: "PDF", size: "1.8 MB" },
    { name: "RoHS Compliance Certificate", format: "PDF", size: "0.3 MB" },
    { name: "Food Grade Certificate", format: "PDF", size: "0.4 MB" },
  ]},
];

const faqs = [
  {
    q: "How do I choose the right bead size for my application?",
    a: "The optimal bead size depends on your target particle size, mill type, and material properties. As a general rule, use beads 20-50x larger than your target particle size. For nano-grinding (<100nm), use 0.1-0.3mm beads. For standard grinding (1-10μm), use 0.6-1.5mm beads. Our technical team can provide specific recommendations based on your process parameters.",
  },
  {
    q: "What is the expected lifespan of ZircoMax zirconia beads?",
    a: "Under normal operating conditions, our 95% YSZ beads typically last 12-18 months in continuous production, which is 3-5x longer than glass beads and 2-3x longer than alumina beads. Actual lifespan depends on factors such as mill speed, slurry viscosity, material hardness, and operating temperature.",
  },
  {
    q: "Are your beads suitable for food and pharmaceutical applications?",
    a: "Yes, our 95% YSZ zirconia beads are certified for food contact applications and meet FDA and EU food contact material regulations. For pharmaceutical applications, we provide full batch documentation including Certificate of Analysis (CoA) and material traceability reports compatible with GMP requirements.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our standard MOQ is 50 kg for stock sizes. For custom sizes or special requirements, the MOQ may vary. We also offer sample packages of 1-5 kg for testing purposes. Contact our sales team for specific pricing and availability.",
  },
  {
    q: "How do you ensure batch-to-batch consistency?",
    a: "We maintain strict process control throughout our manufacturing process, including automated raw material dosing, real-time sintering temperature monitoring, and statistical process control (SPC) for key parameters. Every batch undergoes comprehensive testing for density, hardness, size distribution, and wear rate, with results documented in our Certificate of Analysis.",
  },
  {
    q: "Can you provide custom sizes not listed in your catalog?",
    a: "Yes, we can produce custom bead sizes to meet your specific requirements. Custom sizes typically require a minimum order of 100 kg and a lead time of 2-3 weeks. Please contact us with your desired size range and quantity for a detailed quotation.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We accept T/T (bank transfer), L/C (letter of credit), and Western Union. For sample orders, we require 100% prepayment. For bulk orders, standard terms are 30% deposit with the balance due before shipment. We can discuss other arrangements for established customers.",
  },
  {
    q: "Do you offer technical support after purchase?",
    a: "Absolutely. Our technical team provides comprehensive post-sale support including process optimization advice, troubleshooting assistance, and periodic performance reviews. We can also arrange on-site visits for major customers to help optimize their grinding processes.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUp}
      className="border border-graphite-100 rounded overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-titanium-white transition-colors"
      >
        <span className="font-heading font-semibold text-navy text-sm pr-4">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 text-graphite-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 bg-white">
          <p className="text-sm text-graphite-400 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function Technical() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Technical Support</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl">
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Resources</span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">Technical Support & Downloads</h1>
            <p className="text-graphite-400 leading-relaxed">
              Access technical data sheets, safety documents, application guides, and frequently asked questions 
              to help you get the most from our zirconia products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {downloads.map((cat, ci) => (
              <motion.div key={cat.category} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={ci} variants={fadeUp}
                className="bg-white rounded border border-graphite-100 overflow-hidden">
                <div className="bg-navy px-6 py-3 flex items-center gap-2">
                  {ci === 0 ? <FileText className="w-4 h-4 text-industrial-orange" /> :
                   ci === 1 ? <FileText className="w-4 h-4 text-industrial-orange" /> :
                   ci === 2 ? <BookOpen className="w-4 h-4 text-industrial-orange" /> :
                   <FileText className="w-4 h-4 text-industrial-orange" />}
                  <h3 className="font-heading font-semibold text-white text-sm">{cat.category}</h3>
                </div>
                <div className="divide-y divide-graphite-100">
                  {cat.files.map((file) => (
                    <div key={file.name} className="px-6 py-3 flex items-center justify-between hover:bg-titanium-white transition-colors">
                      <div>
                        <div className="text-sm text-navy font-medium">{file.name}</div>
                        <div className="text-xs text-graphite-400">{file.format} &middot; {file.size}</div>
                      </div>
                      <button className="flex items-center gap-1.5 text-xs text-industrial-orange font-medium hover:text-industrial-orange-hover transition-colors">
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-titanium-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="text-center mb-10">
            <HelpCircle className="w-8 h-8 text-industrial-orange mx-auto mb-3" />
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-3">Frequently Asked Questions</h2>
            <p className="text-graphite-400 max-w-xl mx-auto">
              Find answers to common questions about our products, ordering, and technical specifications.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Can&apos;t Find What You Need?</h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Our technical support team is available to answer your specific questions and provide customized documentation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
            Contact Technical Support <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
