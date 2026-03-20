/*
 * Swiss Industrial Design - Quality & Factory Page
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield, Award, FlaskConical, BarChart3, Users, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System certified by TÜV" },
  { name: "SGS Certification", desc: "Product testing and verification by SGS Group" },
  { name: "RoHS Compliant", desc: "Restriction of Hazardous Substances directive" },
  { name: "REACH Compliant", desc: "EU chemical safety regulation compliance" },
  { name: "Food Grade", desc: "FDA and EU food contact material certified" },
  { name: "MSDS/SDS", desc: "Complete safety data sheets for all products" },
];

const qcSteps = [
  { step: "01", title: "Raw Material Inspection", desc: "Every batch of raw zirconia powder is tested for purity, particle size, and composition before entering production." },
  { step: "02", title: "In-Process Monitoring", desc: "Real-time monitoring of spray-drying parameters, pressing pressure, and sintering temperature profiles." },
  { step: "03", title: "Dimensional Inspection", desc: "Laser particle size analysis and precision measurement of every production batch to ensure size accuracy." },
  { step: "04", title: "Performance Testing", desc: "Density, hardness, crushing strength, and wear rate testing on statistical samples from each batch." },
  { step: "05", title: "Final QC & Documentation", desc: "Complete inspection report with Certificate of Analysis (CoA) provided with every shipment." },
];

const factoryStats = [
  { icon: Factory, value: "20,000", unit: "m²", label: "Factory Area" },
  { icon: Users, value: "200+", unit: "", label: "Employees" },
  { icon: BarChart3, value: "5,000", unit: "tons/yr", label: "Annual Capacity" },
  { icon: Award, value: "15+", unit: "years", label: "Experience" },
];

export default function Quality() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Quality & Factory</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.factory} alt="Kerec Factory" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Quality Assurance</span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
              World-Class Manufacturing & Quality Control
            </h1>
            <p className="text-white/60 leading-relaxed mb-8">
              Our commitment to quality is embedded in every step of our manufacturing process, 
              from raw material selection to final product inspection.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {factoryStats.map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded p-5 text-center">
                <stat.icon className="w-6 h-6 text-industrial-orange mx-auto mb-2" />
                <div className="font-heading text-2xl font-bold text-white">
                  {stat.value}<span className="text-sm text-white/60 ml-1">{stat.unit}</span>
                </div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-3">Quality Certifications</h2>
            <p className="text-graphite-400 mb-8 max-w-2xl">
              Our products and processes are certified by internationally recognized bodies, ensuring compliance with global standards.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="bg-white p-6 rounded border border-graphite-100 hover:border-industrial-orange/30 transition-colors flex items-start gap-4">
                <Shield className="w-8 h-8 text-industrial-orange shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-navy mb-1">{cert.name}</h3>
                  <p className="text-sm text-graphite-400">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-16 bg-titanium-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-3">Quality Control Process</h2>
                <p className="text-graphite-400 mb-8">
                  Our 5-step quality control process ensures every batch meets our stringent specifications.
                </p>
              </motion.div>
              <div className="space-y-4">
                {qcSteps.map((step, i) => (
                  <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                    className="flex gap-4 p-4 bg-white rounded border border-graphite-100">
                    <span className="font-heading text-2xl font-bold text-industrial-orange/30">{step.step}</span>
                    <div>
                      <h3 className="font-heading font-semibold text-navy mb-1 text-sm">{step.title}</h3>
                      <p className="text-xs text-graphite-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="rounded overflow-hidden sticky top-24">
              <img src={IMAGES.qualityLab} alt="Quality Control Lab" loading="lazy" className="w-full aspect-[4/3] object-cover rounded" />
              <div className="mt-4 p-6 bg-white rounded border border-graphite-100">
                <FlaskConical className="w-6 h-6 text-industrial-orange mb-3" />
                <h3 className="font-heading font-semibold text-navy mb-2">Advanced Testing Lab</h3>
                <p className="text-sm text-graphite-400 leading-relaxed">
                  Our in-house laboratory is equipped with laser particle size analyzers, density meters, 
                  hardness testers, and SEM microscopes for comprehensive quality analysis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Batch Consistency */}
      <section className="py-16">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">Batch-to-Batch Consistency</h2>
            <p className="text-graphite-400 leading-relaxed mb-8">
              We understand that consistent quality is critical for your production process. Our automated production 
              lines and rigorous QC procedures ensure that every batch of zirconia beads delivers identical performance, 
              so you can rely on predictable results every time.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-5 bg-titanium-white rounded">
                <div className="font-heading text-2xl font-bold text-navy">±0.5%</div>
                <div className="text-xs text-graphite-400 mt-1">Density Variation</div>
              </div>
              <div className="p-5 bg-titanium-white rounded">
                <div className="font-heading text-2xl font-bold text-navy">±2%</div>
                <div className="text-xs text-graphite-400 mt-1">Size Distribution</div>
              </div>
              <div className="p-5 bg-titanium-white rounded">
                <div className="font-heading text-2xl font-bold text-navy">100%</div>
                <div className="text-xs text-graphite-400 mt-1">Batch Traceability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Want to Visit Our Factory?</h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            We welcome customers to visit our facility and see our quality processes firsthand.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
            Schedule a Visit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
