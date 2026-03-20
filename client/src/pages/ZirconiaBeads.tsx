/*
 * Swiss Industrial Design - Zirconia Beads Product Page
 * Detailed product information, technical specs, CTA-focused layout
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { IMAGES } from "@/lib/images";
import QuickSupplierFacts from "@/components/QuickSupplierFacts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const specs = [
  { property: "Material", value: "95% ZrO₂ + 5% Y₂O₃ (YSZ)" },
  { property: "Density", value: ">6.0 g/cm³" },
  { property: "Hardness (HV)", value: "1250" },
  { property: "Size Range", value: "0.1 mm – 100 mm" },
  { property: "Crushing Strength", value: ">3 kgf" },
  { property: "Wear Rate", value: "<0.01% (water-based test)" },
  { property: "Roundness", value: ">95%" },
  { property: "Surface Finish", value: "Ra < 0.02 μm" },
  { property: "Color", value: "White" },
  { property: "Packaging", value: "5 kg / 10 kg / 25 kg bags" },
];

const sizeRanges = [
  { range: "0.1 – 0.3 mm", application: "Nano-grinding, pigment dispersion, pharmaceutical milling" },
  { range: "0.3 – 0.6 mm", application: "Fine grinding, ink production, battery material processing" },
  { range: "0.6 – 1.0 mm", application: "General grinding, coating production, chemical processing" },
  { range: "1.0 – 2.0 mm", application: "Coarse grinding, mineral processing, ceramic raw materials" },
  { range: "2.0 – 5.0 mm", application: "Heavy-duty grinding, large bead mills, industrial mixing" },
  { range: "5.0 – 100 mm", application: "Ball mills, tumbling mills, specialized applications" },
];

const advantages = [
  "Ultra-high density (>6.0 g/cm³) for maximum grinding efficiency",
  "Extremely low wear rate extends media lifespan by 3-5x vs. glass beads",
  "Minimal contamination (tested) — suitable for food, pharma, and electronic applications",
  "Tight size distribution ensures consistent grinding results",
  "Excellent chemical resistance to acids, alkalis, and solvents",
  "High fracture toughness prevents bead breakage during operation",
];

export default function ZirconiaBeads() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">95% YSZ Zirconia Beads</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded overflow-hidden"
            >
              <img
                src={IMAGES.heroBanner}
                alt="95% YSZ Zirconia Beads"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-industrial-orange text-white text-xs font-semibold rounded">
                Best Seller
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Grinding Media</span>
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4 leading-tight">
                95% YSZ Zirconia Beads
              </h1>
              <p className="text-graphite-400 leading-relaxed mb-6">
                Our premium 95% Yttria-Stabilized Zirconia beads deliver exceptional grinding performance 
                with ultra-high density, minimal wear, and low contamination (tested under specific conditions). Available in sizes from 
                0.1mm to 100mm for diverse industrial applications including coatings, inks, food processing, 
                pharmaceuticals, and battery materials.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-titanium-white p-4 rounded">
                  <div className="font-heading text-2xl font-bold text-navy">&gt;6.0</div>
                  <div className="text-xs text-graphite-400 mt-0.5">Density (g/cm³)</div>
                </div>
                <div className="bg-titanium-white p-4 rounded">
                  <div className="font-heading text-2xl font-bold text-navy">&lt;0.01%</div>
                  <div className="text-xs text-graphite-400 mt-0.5">Wear Rate</div>
                </div>
                <div className="bg-titanium-white p-4 rounded">
                  <div className="font-heading text-2xl font-bold text-navy">0.1–100</div>
                  <div className="text-xs text-graphite-400 mt-0.5">Size Range (mm)</div>
                </div>
                <div className="bg-titanium-white p-4 rounded">
                  <div className="font-heading text-2xl font-bold text-navy">1250</div>
                  <div className="text-xs text-graphite-400 mt-0.5">Hardness (HV)</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-navy/20 text-navy font-semibold text-sm rounded hover:bg-navy/5 transition-colors"
                >
                  Get Free Sample
                </Link>
              </div>

              <div className="flex items-center gap-4 text-xs text-graphite-400">
                <button className="inline-flex items-center gap-1.5 hover:text-navy transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Download TDS
                </button>
                <button className="inline-flex items-center gap-1.5 hover:text-navy transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Download SDS
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Supplier Facts */}
      <QuickSupplierFacts />

      {/* Technical Specifications */}
      <section className="py-16 bg-titanium-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">Technical Specifications</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="bg-white rounded border border-graphite-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-3 font-semibold">Property</th>
                    <th className="text-left px-6 py-3 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, i) => (
                    <tr key={spec.property} className={i % 2 === 0 ? "bg-white" : "bg-titanium-white"}>
                      <td className="px-6 py-3 text-graphite-500 font-medium">{spec.property}</td>
                      <td className="px-6 py-3 text-navy font-semibold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Size Selection Guide */}
      <section className="py-16">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-3">Size Selection Guide</h2>
            <p className="text-graphite-400 mb-8 max-w-2xl">
              Choose the right bead size based on your target particle size and application requirements. 
              Our technical team can help you optimize the selection.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sizeRanges.map((size, i) => (
              <motion.div
                key={size.range}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="bg-white p-5 rounded border border-graphite-100 hover:border-industrial-orange/30 transition-colors"
              >
                <div className="font-heading text-lg font-bold text-industrial-orange mb-2">{size.range}</div>
                <p className="text-sm text-graphite-400">{size.application}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-navy">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-8">Key Advantages</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 bg-white/5 rounded border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-industrial-orange shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">{adv}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-titanium-white">
        <div className="container text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
            Need Help Choosing the Right Size?
          </h2>
          <p className="text-graphite-400 mb-8 max-w-xl mx-auto">
            Our technical team is ready to help you select the optimal grinding media for your specific application.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors"
            >
              Contact Our Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/size-guide"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy/20 text-navy font-semibold text-sm rounded hover:bg-navy/5 transition-colors"
            >
              View Size Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
