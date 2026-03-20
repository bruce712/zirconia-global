/*
 * Swiss Industrial Design - Home Page
 * Asymmetric hero, data-driven product highlights, industry grid, testimonials
 * Color: Navy #0A1628, Orange #E8642C, Titanium White #F8F9FA
 * Font: Space Grotesk (headings), DM Sans (body)
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Gauge,
  Target,
  Zap,
  Beaker,
  Paintbrush,
  Pill,
  Battery,
  Cpu,
  Factory,
  Star,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { IMAGES } from "@/lib/images";
import QuickSupplierFacts from "@/components/QuickSupplierFacts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stats = [
  { value: ">6.0", unit: "g/cm³", label: "Density" },
  { value: "0.1–100", unit: "mm", label: "Size Range" },
  { value: "95%", unit: "ZrO₂", label: "Purity" },
  { value: "<0.01%", unit: "", label: "Wear Rate" },
];

const features = [
  { icon: Shield, title: "Ultra-High Density", desc: "Density >6.0 g/cm³ ensures superior grinding efficiency and faster particle size reduction." },
  { icon: Gauge, title: "Minimal Wear Rate", desc: "Advanced sintering process delivers wear rate <0.01%, extending media lifespan significantly." },
  { icon: Target, title: "Precision Sizing", desc: "Tight particle size distribution from 0.1mm to 100mm, meeting diverse grinding requirements." },
  { icon: Zap, title: "Rapid Response", desc: "Small batch samples within 3 days, bulk orders with flexible lead times and global shipping." },
];

const industries = [
  { icon: Paintbrush, title: "Coatings & Inks", desc: "Nano-grinding for pigment dispersion", href: "/applications/coatings-inks" },
  { icon: Beaker, title: "Food & Health", desc: "Food-grade certified grinding media", href: "/applications/food-health" },
  { icon: Pill, title: "Chemical & Pharma", desc: "High-purity milling solutions", href: "/applications/chemical-pharma" },
  { icon: Battery, title: "Battery Materials", desc: "Cathode & anode material processing", href: "/applications/battery" },
  { icon: Cpu, title: "Electronics", desc: "Semiconductor slurry preparation", href: "/applications/electronics" },
  { icon: Factory, title: "Ceramics Mfg", desc: "Raw material grinding & mixing", href: "/applications/ceramics" },
];

const testimonials = [
  {
    quote: "Switching to Kerec beads reduced our grinding time by 30% while achieving finer particle sizes. The consistency between batches is remarkable.",
    author: "Thomas Mueller",
    role: "Production Manager",
    company: "EuroCoat GmbH, Germany",
  },
  {
    quote: "We tested multiple suppliers before choosing Kerec. Their 95% YSZ beads show significantly lower contamination levels, critical for our pharmaceutical applications.",
    author: "Dr. Kenji Tanaka",
    role: "R&D Director",
    company: "NipponPharma Co., Japan",
  },
  {
    quote: "The technical support team helped us optimize our bead mill parameters, resulting in 40% energy savings. Truly a partner, not just a supplier.",
    author: "Sarah Chen",
    role: "Chief Engineer",
    company: "Pacific Coatings Ltd., Australia",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBanner}
            alt="Zirconia beads"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>
        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Premium <span className="text-industrial-orange">95% YSZ</span> Zirconia Beads for High-Efficiency Grinding
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
            >
              High-density, low-wear zirconia grinding media for coatings, ink, food powders, pharma, and advanced ceramic applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors"
              >
                Get Free Sample
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              {[
                { icon: Shield, label: "95% YSZ" },
                { icon: Gauge, label: "High Density" },
                { icon: Target, label: "Low Wear" },
                { icon: Shield, label: "ISO 9001:2015" },
                { icon: Shield, label: "SGS Tested" },
                { icon: Shield, label: "RoHS Compliant" },
              ].map((badge, i) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-sm text-xs text-white/90 font-medium backdrop-blur-sm"
                >
                  <badge.icon className="w-3.5 h-3.5 text-industrial-orange" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Purchase Info */}
      <section className="py-8 bg-white border-b border-graphite-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {[
              { label: "Common Sizes", value: "0.1–100 mm", icon: Target },
              { label: "MOQ", value: "50 kg", icon: Gauge },
              { label: "Standard Packaging", value: "25 kg/drum", icon: Factory },
              { label: "Sample Availability", value: "Available", icon: Shield },
              { label: "Export Port", value: "Qingdao, China", icon: Factory },
              { label: "Payment Terms", value: "T/T", icon: Shield },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <item.icon className="w-4 h-4 text-industrial-orange" />
                  <div className="text-xs text-graphite-400 font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
                <div className="font-heading text-base font-bold text-navy">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Supplier Facts */}
      <QuickSupplierFacts />

      {/* Product Features */}
      <section className="py-20 lg:py-28 bg-titanium-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
                variants={fadeUp}
              >
                <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Why Kerec</span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-3 mb-5 leading-tight">
                  Engineered for Superior Grinding Performance
                </h2>
                <p className="text-graphite-400 leading-relaxed mb-8">
                  Our 95% Yttria-Stabilized Zirconia beads are manufactured using advanced spray-drying 
                  and high-temperature sintering processes, delivering unmatched density, hardness, and 
                  wear resistance for demanding industrial applications.
                </p>
                <Link
                  href="/products/zirconia-beads"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-orange hover:text-industrial-orange-hover transition-colors"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white p-6 rounded border border-graphite-100 hover:border-industrial-orange/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-navy/5 rounded flex items-center justify-center mb-4 group-hover:bg-industrial-orange/10 transition-colors">
                    <feat.icon className="w-5 h-5 text-navy group-hover:text-industrial-orange transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy mb-2">{feat.title}</h3>
                  <p className="text-sm text-graphite-400 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Our Products</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-3">
              Premium Zirconia Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Zirconia Beads Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="group relative overflow-hidden rounded bg-white border border-graphite-100 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.heroBanner}
                  alt="95% YSZ Zirconia Beads"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  95% YSZ Zirconia Beads
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed mb-4">
                  High-density grinding media available in 0.1mm–100mm, ideal for nano-grinding, 
                  dispersion, and fine particle size reduction across multiple industries.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["High Density", "Low Wear", "0.1–100mm", "SGS Certified"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-navy/5 text-navy text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products/zirconia-beads"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-orange hover:text-industrial-orange-hover transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Ceramic Parts Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="group relative overflow-hidden rounded bg-white border border-graphite-100 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={IMAGES.ceramicParts}
                  alt="Zirconia Ceramic Structural Parts"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  Zirconia Ceramic Structural Parts
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed mb-4">
                  Custom-engineered ceramic components including rings, tubes, bushings, and precision parts 
                  for demanding mechanical and chemical applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Custom Shapes", "High Hardness", "Corrosion Resistant", "Precision CNC"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-navy/5 text-navy text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products/ceramic-parts"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-orange hover:text-industrial-orange-hover transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Applications</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Our zirconia products are trusted by leading manufacturers across the globe for their 
              precision grinding and structural component needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
              >
                <Link
                  href={ind.href}
                  className="block p-6 bg-white/5 border border-white/10 rounded hover:bg-white/10 hover:border-industrial-orange/30 transition-all group"
                >
                  <ind.icon className="w-8 h-8 text-industrial-orange mb-4" />
                  <h3 className="font-heading font-semibold text-white mb-1.5">{ind.title}</h3>
                  <p className="text-sm text-white/50 mb-3">{ind.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-industrial-orange font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Factory Preview */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="relative rounded overflow-hidden">
                <img
                  src={IMAGES.factory}
                  alt="Kerec Factory"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                  <div className="flex gap-6">
                    <div>
                      <div className="font-heading text-2xl font-bold text-white">15+</div>
                      <div className="text-xs text-white/60">Years Experience</div>
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-white">5,000</div>
                      <div className="text-xs text-white/60">Tons/Year Capacity</div>
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-white">50+</div>
                      <div className="text-xs text-white/60">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Quality & Factory</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-3 mb-5 leading-tight">
                World-Class Manufacturing & Quality Assurance
              </h2>
              <p className="text-graphite-400 leading-relaxed mb-6">
                Our state-of-the-art facility features automated production lines, advanced sintering kilns, 
                and comprehensive quality control laboratories. Every batch undergoes rigorous testing to ensure 
                consistent performance and reliability.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ISO 9001:2015 certified quality management system",
                  "SGS-verified product testing and certification",
                  "RoHS compliant, suitable for food and pharma industries",
                  "100% batch traceability with detailed quality reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-graphite-500">
                    <div className="w-1.5 h-1.5 bg-industrial-orange rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-orange hover:text-industrial-orange-hover transition-colors"
              >
                Learn About Our Quality
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-titanium-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-3">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="bg-white p-6 lg:p-8 rounded border border-graphite-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-industrial-orange text-industrial-orange" />
                  ))}
                </div>
                <p className="text-sm text-graphite-500 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-graphite-100 pt-4">
                  <div className="font-heading font-semibold text-navy text-sm">{t.author}</div>
                  <div className="text-xs text-graphite-400">{t.role}</div>
                  <div className="text-xs text-industrial-orange mt-0.5">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
