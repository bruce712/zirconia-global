/*
 * Swiss Industrial Design - Size Selection Guide
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const guideData = [
  { beadSize: "0.05 – 0.2 mm", targetParticle: "< 100 nm", millType: "Nano bead mill", industries: "Electronics, battery, advanced ceramics" },
  { beadSize: "0.2 – 0.4 mm", targetParticle: "100 – 500 nm", millType: "High-energy bead mill", industries: "Inks, pigments, pharmaceuticals" },
  { beadSize: "0.4 – 0.8 mm", targetParticle: "0.5 – 2 μm", millType: "Horizontal bead mill", industries: "Coatings, paints, agrochemicals" },
  { beadSize: "0.8 – 1.5 mm", targetParticle: "2 – 10 μm", millType: "Standard bead mill", industries: "General chemicals, minerals" },
  { beadSize: "1.5 – 3.0 mm", targetParticle: "10 – 50 μm", millType: "Large bead mill", industries: "Mining, heavy industry" },
  { beadSize: "3.0 – 30 mm", targetParticle: "> 50 μm", millType: "Ball mill / Attritor", industries: "Ceramics, cement, ore processing" },
];

const tips = [
  { title: "Bead-to-Particle Ratio", desc: "Optimal ratio is typically 20:1 to 50:1. For example, use 0.3mm beads to grind particles down to ~10μm." },
  { title: "Bead Loading", desc: "Fill the grinding chamber 70-85% with beads for optimal efficiency. Under-loading reduces grinding force; over-loading increases wear." },
  { title: "Mill Speed", desc: "Operate at 8-12 m/s tip speed for most applications. Higher speeds for nano-grinding, lower for heat-sensitive materials." },
  { title: "Viscosity Consideration", desc: "Higher viscosity slurries may require larger beads. Ensure adequate flow through the separation screen." },
];

export default function SizeGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-titanium-white border-b border-graphite-100">
        <div className="container py-3 flex items-center gap-2 text-xs text-graphite-400">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-medium">Size Selection Guide</span>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="max-w-3xl mb-12">
            <span className="text-xs text-industrial-orange font-semibold uppercase tracking-widest">Selection Guide</span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">Grinding Media Size Selection Guide</h1>
            <p className="text-graphite-400 leading-relaxed">
              Selecting the correct bead size is critical for achieving your target particle size distribution. 
              Use this guide as a starting point, and contact our technical team for application-specific recommendations.
            </p>
          </motion.div>

          {/* Guide Table */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
            <div className="bg-white rounded border border-graphite-100 overflow-x-auto mb-12">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-5 py-3 font-semibold">Bead Size</th>
                    <th className="text-left px-5 py-3 font-semibold">Target Particle Size</th>
                    <th className="text-left px-5 py-3 font-semibold">Mill Type</th>
                    <th className="text-left px-5 py-3 font-semibold">Typical Industries</th>
                  </tr>
                </thead>
                <tbody>
                  {guideData.map((row, i) => (
                    <tr key={row.beadSize} className={i % 2 === 0 ? "bg-white" : "bg-titanium-white"}>
                      <td className="px-5 py-3 text-industrial-orange font-semibold">{row.beadSize}</td>
                      <td className="px-5 py-3 text-navy font-medium">{row.targetParticle}</td>
                      <td className="px-5 py-3 text-graphite-500">{row.millType}</td>
                      <td className="px-5 py-3 text-graphite-400">{row.industries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Tips */}
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">Optimization Tips</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((tip, i) => (
              <motion.div key={tip.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 2} variants={fadeUp}
                className="bg-titanium-white p-6 rounded border border-graphite-100">
                <h3 className="font-heading font-semibold text-navy mb-2">{tip.title}</h3>
                <p className="text-sm text-graphite-400 leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Need Expert Guidance?</h2>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">Our technical team can analyze your process parameters and recommend the optimal bead size and loading.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-industrial-orange text-white font-semibold text-sm rounded hover:bg-industrial-orange-hover transition-colors">
            Consult Our Experts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
